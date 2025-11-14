import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real application, you would send this data to your email service
    // For now, we'll just log it and return success
    console.log('Contact form submission:', body);
    
    // Simulate some async work
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return new Response(
      JSON.stringify({ ok: true, message: 'Thanks! We\'ll reach out shortly.' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Something went wrong.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}