import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { store_name, owner_email, niche, package: plan } = await req.json();

    // Trim env vars to remove accidental newlines/spaces
    const airtableKey = (process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || '').trim();
    const airtableBaseId = (process.env.NEXT_PUBLIC_AIRTABLE_CUSTOMERS_BASE_ID || '').trim();

    // 1. Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/Customers`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Store Name': store_name,
                'Owner Email': owner_email,
                'Notes': `Niche: ${niche}`,
                'Package Tier': plan,
                'Signup Date': new Date().toISOString().split('T')[0],
              },
            },
          ],
        }),
      }
    );

    if (!airtableResponse.ok) {
      const airtableError = await airtableResponse.json();
      console.error('Airtable error:', JSON.stringify(airtableError));
      throw new Error('Airtable error');
    }

    // 2. Send welcome email via Sendgrid (non-blocking - don't fail if email fails)
    try {
      const sendgridKey = (process.env.SENDGRID_API_KEY || '').trim();
      const fromEmail = (process.env.SENDGRID_FROM_EMAIL || '').trim();
      const templateId = (process.env.SENDGRID_WELCOME_TEMPLATE_ID || '').trim();

      const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sendgridKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: owner_email }],
              dynamic_template_data: {
                customer_name: store_name,
                store_name: store_name,
                airtable_link: 'https://airtable.com/appM6hWou1lyRZ4M1',
              },
            },
          ],
          from: {
            email: fromEmail,
            name: 'AutoNexus',
          },
          template_id: templateId,
        }),
      });

      if (!sendgridResponse.ok) {
        const sgError = await sendgridResponse.json();
        console.error('Sendgrid error (non-fatal):', JSON.stringify(sgError));
      }
    } catch (emailError) {
      // Email failure is non-fatal - lead is already saved to Airtable
      console.error('Sendgrid exception (non-fatal):', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Form submission failed' },
      { status: 500 }
    );
  }
}
