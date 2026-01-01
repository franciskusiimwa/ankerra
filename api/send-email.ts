import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@ankerra.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Ankerra <onboarding@resend.dev>';

interface EmailRequest {
  type: 'partner' | 'newsletter' | 'build_inquiry' | 'contact';
  data: any;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, data }: EmailRequest = req.body;

    let adminSubject = '';
    let adminHtml = '';
    let userSubject = '';
    let userHtml = '';
    let userEmail = data.email;

    // Build email content based on form type
    switch (type) {
      case 'partner':
        adminSubject = '🤝 New Partner Application';
        adminHtml = `
          <h2>New Partner Application Received</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
          <p><strong>Partnership Type:</strong> ${data.partnership_type || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `;
        userSubject = 'Thank you for your partnership interest - Ankerra';
        userHtml = `
          <h2>Thank you for your interest, ${data.name}!</h2>
          <p>We've received your partnership application and appreciate you taking the time to reach out.</p>
          <p>We review every submission carefully and will get back to you soon.</p>
          <br>
          <p>Best regards,<br>The Ankerra Team</p>
        `;
        break;

      case 'newsletter':
        adminSubject = '📧 New Newsletter Subscription';
        adminHtml = `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${data.email}</p>
        `;
        userSubject = 'Welcome to Ankerra Updates';
        userHtml = `
          <h2>Thank you for subscribing!</h2>
          <p>You're now subscribed to Ankerra updates.</p>
          <p>We share occasional updates on what we're building, what we're learning, and where we're headed.</p>
          <p>No noise. No spam. Only thoughtful reflections and progress.</p>
          <br>
          <p>Best regards,<br>The Ankerra Team</p>
        `;
        break;

      case 'build_inquiry':
        adminSubject = '🔨 New Build With Us Inquiry';
        adminHtml = `
          <h2>New Build With Us Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Areas of Expertise:</strong> ${data.expertise || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `;
        userSubject = 'Thank you for your interest in building with us - Ankerra';
        userHtml = `
          <h2>Thank you for reaching out, ${data.name}!</h2>
          <p>We've received your inquiry about building with us and are excited to learn more about your background and interests.</p>
          <p>We'll review your submission and get back to you soon.</p>
          <br>
          <p>Best regards,<br>The Ankerra Team</p>
        `;
        break;

      case 'contact':
        adminSubject = '💬 New Contact Message';
        adminHtml = `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `;
        userSubject = 'We received your message - Ankerra';
        userHtml = `
          <h2>Thank you for contacting us, ${data.name}!</h2>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <br>
          <p>Best regards,<br>The Ankerra Team</p>
        `;
        break;

      default:
        return res.status(400).json({ error: 'Invalid email type' });
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: adminSubject,
      html: adminHtml,
    });

    // Send confirmation email to user
    let userEmailResult = null;
    if (userEmail) {
      userEmailResult = await resend.emails.send({
        from: FROM_EMAIL,
        to: userEmail,
        subject: userSubject,
        html: userHtml,
      });
    }

    return res.status(200).json({
      success: true,
      adminEmailId: adminEmailResult.data?.id,
      userEmailId: userEmailResult?.data?.id,
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
}
