import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { store_name, owner_email, niche, package: plan } = await req.json();

    // 1. Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_CUSTOMERS_BASE_ID}/Customers`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Store Name': store_name,
                'Owner Email': owner_email,
                'Niche': niche,
                'Plan': plan,
                'Status': 'Lead',
                'Signup Date': new Date().toISOString(),
              },
            },
          ],
        }),
      }
    );

    if (!airtableResponse.ok) {
      throw new Error('Airtable error');
    }

    // 2. Send welcome email via Sendgrid
    const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: owner_email }],
            dynamic_template_data: {
              customer_name: store_name.split('.')[0],
              store_name: store_name,
              airtable_link: 'https://airtable.com/appM6hWou1lyRZ4M1',
            },
          },
        ],
        from: {
          email: process.env.SENDGRID_FROM_EMAIL,
          name: 'AutoNexus',
        },
        template_id: process.env.SENDGRID_WELCOME_TEMPLATE_ID,
      }),
    });

    if (!sendgridResponse.ok) {
      throw new Error('Sendgrid error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Form submission failed' },
      { status: 500 }
    );
  }
}
