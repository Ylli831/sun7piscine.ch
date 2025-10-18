import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#00008f] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#00008f] mb-8">Page non trouvée</h2>
        <p className="text-lg text-[#00008f]/70 mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#009dfe] hover:bg-[#0088e0] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}