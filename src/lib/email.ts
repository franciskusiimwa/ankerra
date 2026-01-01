type EmailType = 'partner' | 'newsletter' | 'build_inquiry' | 'contact';

interface SendEmailParams {
  type: EmailType;
  data: any;
}

export async function sendEmail({ type, data }: SendEmailParams): Promise<boolean> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, data }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Error sending email:', result.error);
      return false;
    }

    return result?.success || false;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
