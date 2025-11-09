# Email Configuration Setup

## Contact Form Email Integration

The contact form is now configured to send emails using Outlook SMTP.

### Configuration Details

- **SMTP Host**: smtp-mail.outlook.com
- **Port**: 587
- **Security**: STARTTLS
- **Email**: info@sun7piscine.ch

### How It Works

1. When a user submits the contact form, the data is sent to `/api/contact`
2. The API route sends two emails:
   - **Business Email**: Sent to info@sun7piscine.ch with all the form details
   - **Confirmation Email**: Sent to the customer confirming their submission

### Environment Variables

The email credentials are stored in `.env.local`:

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=info@sun7piscine.ch
EMAIL_PASSWORD=Bmond280985
EMAIL_FROM=info@sun7piscine.ch
```

**Important**: The `.env.local` file is already included in `.gitignore` and will not be committed to the repository.

### Testing

To test the contact form:
1. Start the development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check the inbox at info@sun7piscine.ch for the notification
5. The customer should also receive a confirmation email

### Deployment

When deploying to production (Cloudflare Pages, Vercel, etc.), make sure to add the environment variables in your deployment platform's settings:

- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `EMAIL_FROM`

### Troubleshooting

If emails are not being sent:
1. Verify the email credentials are correct
2. Check that the Outlook account allows SMTP access
3. Ensure 2FA is configured properly if enabled
4. Check the server logs for error messages
