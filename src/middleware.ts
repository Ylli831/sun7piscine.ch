import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle image requests with special characters
  if (request.nextUrl.pathname.startsWith('/_next/image')) {
    const url = request.nextUrl.searchParams.get('url');
    
    if (url && /[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇ\s]/i.test(url)) {
      // URL contains special characters that might cause issues
      // Redirect to the direct file path instead of using optimization
      const decodedUrl = decodeURIComponent(url);
      return NextResponse.rewrite(new URL(decodedUrl, request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/_next/image',
  ],
};
