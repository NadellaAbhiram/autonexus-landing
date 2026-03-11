export async function createCustomer(data: {
  store_name: string;
  owner_email: string;
  niche: string;
  plan: string;
}) {
  const response = await fetch(
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
              'Store Name': data.store_name,
              'Owner Email': data.owner_email,
              'Niche': data.niche,
              'Plan': data.plan,
            },
          },
        ],
      }),
    }
  );
  return response.json();
}
