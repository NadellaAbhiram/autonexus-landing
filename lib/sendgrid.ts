export async function sendWelcomeEmail(
  email: string,
  storeName: string,
  templateId: string
) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email }],
          dynamic_template_data: {
            customer_name: storeName,
          },
        },
      ],
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
      },
      template_id: templateId,
    }),
  });
  return response.json();
}
