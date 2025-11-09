import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic, name, email, phone, company, contactPreference, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Get topic label
    const topicLabels: { [key: string]: string } = {
      construction: 'Construction de piscine',
      renovation: 'Rénovation complète',
      maintenance: 'Entretien régulier',
      spa: 'Projet spa / bien-être',
      autre: 'Autre demande',
    };

    const topicLabel = topicLabels[topic] || topic;

    // Get contact preference label
    const preferenceLabels: { [key: string]: string } = {
      email: 'Email',
      phone: 'Téléphone',
      visio: 'Visio / Appel vidéo',
    };

    const preferenceLabel = preferenceLabels[contactPreference] || contactPreference;

    // Email to business (info@sun7piscine.ch)
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #009dfe 0%, #00008f 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #00008f; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #fed700; }
          .footer { margin-top: 30px; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nouvelle demande de contact</h1>
            <p style="margin: 0;">SUN7 Piscine</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Sujet :</div>
              <div class="value">${topicLabel}</div>
            </div>
            <div class="field">
              <div class="label">Nom :</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email :</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Téléphone :</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ${company ? `
            <div class="field">
              <div class="label">Société :</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Préférence de contact :</div>
              <div class="value">${preferenceLabel}</div>
            </div>
            <div class="field">
              <div class="label">Message :</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="footer">
              <p>Cette demande a été envoyée depuis le formulaire de contact du site sun7piscine.ch</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #009dfe 0%, #00008f 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: #fed700; color: #00008f; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center; font-weight: bold; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #009dfe; }
          .contact-info { margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Merci pour votre demande !</h1>
            <p style="margin: 0;">SUN7 Piscine</p>
          </div>
          <div class="content">
            <p>Bonjour ${name},</p>
            <p>Nous avons bien reçu votre demande concernant : <strong>${topicLabel}</strong></p>
            <div class="highlight">
              Un expert SUN7 vous recontactera sous 24 heures ouvrées
            </div>
            <p>Votre préférence de contact : <strong>${preferenceLabel}</strong></p>
            <div class="footer">
              <h3 style="color: #00008f;">Nos coordonnées</h3>
              <div class="contact-info">
                <strong>Téléphone :</strong> <a href="tel:+41793463200">+41 79 346 32 00</a>
              </div>
              <div class="contact-info">
                <strong>Email :</strong> <a href="mailto:info@sun7piscine.ch">info@sun7piscine.ch</a>
              </div>
              <div class="contact-info">
                <strong>Adresse :</strong> Esplanade des Récréation 22, 1217 Meyrin, Genève, Suisse
              </div>
              <div class="contact-info">
                <strong>Horaires :</strong> Lun-Ven: 8h-18h | Sam: 9h-16h
              </div>
              <p style="margin-top: 20px; color: #666; font-size: 14px;">
                Plus de 20 ans d'expérience dans la construction, rénovation et entretien de piscines et spas en Suisse Romande.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to business
    await resend.emails.send({
      from: 'SUN7 Piscine <info@sun7piscine.ch>',
      to: 'info@sun7piscine.ch',
      subject: `Nouvelle demande: ${topicLabel} - ${name}`,
      html: businessEmailHtml,
      replyTo: email,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'SUN7 Piscine <info@sun7piscine.ch>',
      to: email,
      subject: 'Confirmation de votre demande - SUN7 Piscine',
      html: customerEmailHtml,
    });

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
