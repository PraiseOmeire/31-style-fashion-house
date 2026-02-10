import { Resend } from 'resend';

interface BespokeSubmission {
  occasion: string;
  style: string;
  timeline: string;
  budget: string;
  name: string;
  contact: string;
  contactType: 'email' | 'phone';
}

interface Env {
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
  EMAIL_TO: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    console.log('[API] Bespoke submit endpoint called');
    console.log('[API] Request method: POST');

    // Check environment variables
    console.log('[API] Checking environment variables...');
    const missingVars: string[] = [];

    if (!context.env.RESEND_API_KEY) missingVars.push('RESEND_API_KEY');
    if (!context.env.EMAIL_FROM) missingVars.push('EMAIL_FROM');
    if (!context.env.EMAIL_TO) missingVars.push('EMAIL_TO');

    if (missingVars.length > 0) {
      console.error('[API] Missing environment variables:', missingVars);
      return Response.json(
        {
          message: 'Server configuration error',
          error: `Missing required environment variables: ${missingVars.join(', ')}`
        },
        { status: 500 }
      );
    }

    console.log('[API] Environment variables OK');
    console.log('[API] EMAIL_FROM:', context.env.EMAIL_FROM);
    console.log('[API] EMAIL_TO:', context.env.EMAIL_TO);

    // Parse request body
    const data: BespokeSubmission = await context.request.json();
    console.log('[API] Request body:', JSON.stringify(data, null, 2));

    // Validate required fields
    const required: (keyof BespokeSubmission)[] = [
      'occasion',
      'style',
      'timeline',
      'budget',
      'name',
      'contact',
      'contactType'
    ];

    for (const field of required) {
      if (!data[field]) {
        console.error('[API] Missing required field:', field);
        return Response.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate contactType
    if (data.contactType !== 'email' && data.contactType !== 'phone') {
      console.error('[API] Invalid contact type:', data.contactType);
      return Response.json(
        { message: 'Invalid contact type' },
        { status: 400 }
      );
    }

    console.log('[API] Validation passed');

    // Format contact label
    const contactLabel = data.contactType === 'email' ? 'Email' : 'Phone Number';

    // Initialize Resend and send email
    console.log('[API] Initializing Resend...');
    const resend = new Resend(context.env.RESEND_API_KEY);

    console.log('[API] Sending email...');
    const emailResult = await resend.emails.send({
      from: context.env.EMAIL_FROM,
      to: context.env.EMAIL_TO,
      subject: 'New Bespoke Design Inquiry',
      text: `
A new custom design inquiry has been submitted:

--- Customer Information ---
Name: ${data.name}
Contact Method: ${data.contactType}
${contactLabel}: ${data.contact}

--- Design Preferences ---
Occasion: ${data.occasion}
Style Direction: ${data.style}
Timeline: ${data.timeline}
Budget Range: ${data.budget}

--- Next Steps ---
Please reach out to the customer via their preferred contact method within 24 hours.

Submitted: ${new Date().toISOString()}
      `.trim(),
    });

    if (emailResult.error) {
      console.error('[API] Resend error:', emailResult.error);
      throw new Error(emailResult.error.message);
    }

    console.log('[API] Email sent successfully! ID:', emailResult.data?.id);
    console.log('[API] Submission successful');

    return Response.json(
      {
        success: true,
        message: 'Inquiry submitted successfully'
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('[API] Caught error:', error);
    console.error('[API] Error stack:', error.stack);

    return Response.json(
      {
        message: 'Failed to process submission',
        error: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}
