import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface BespokeSubmission {
  occasion: string;
  style: string;
  timeline: string;
  budget: string;
  name: string;
  contact: string;
  contactType: 'email' | 'phone';
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Top-level try-catch to ALWAYS return JSON
  try {
    console.log('[API] Bespoke submit endpoint called');
    console.log('[API] Request method:', req.method);

    // Only allow POST
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    // Step 3: Explicit environment variable checks
    console.log('[API] Checking environment variables...');
    const missingVars: string[] = [];

    if (!process.env.RESEND_API_KEY) missingVars.push('RESEND_API_KEY');
    if (!process.env.EMAIL_FROM) missingVars.push('EMAIL_FROM');
    if (!process.env.EMAIL_TO) missingVars.push('EMAIL_TO');

    if (missingVars.length > 0) {
      console.error('[API] Missing environment variables:', missingVars);
      return res.status(500).json({
        message: 'Server configuration error',
        error: `Missing required environment variables: ${missingVars.join(', ')}`
      });
    }

    console.log('[API] Environment variables OK');
    console.log('[API] EMAIL_FROM:', process.env.EMAIL_FROM);
    console.log('[API] EMAIL_TO:', process.env.EMAIL_TO);

    const data: BespokeSubmission = req.body;
    console.log('[API] Request body:', JSON.stringify(data, null, 2));

    // Validate required fields
    const required = ['occasion', 'style', 'timeline', 'budget', 'name', 'contact', 'contactType'];
    for (const field of required) {
      if (!data[field as keyof BespokeSubmission]) {
        console.error('[API] Missing required field:', field);
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

    // Validate contactType
    if (data.contactType !== 'email' && data.contactType !== 'phone') {
      console.error('[API] Invalid contact type:', data.contactType);
      return res.status(400).json({ message: 'Invalid contact type' });
    }

    console.log('[API] Validation passed');

    // Format contact label
    const contactLabel = data.contactType === 'email' ? 'Email' : 'Phone Number';

    // Step 5: Email sending ENABLED
    console.log('[API] Initializing Resend...');
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('[API] Sending email...');
    const emailResult = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
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
    return res.status(200).json({
      success: true,
      message: 'Inquiry submitted successfully'
    });

  } catch (error: any) {
    // Guaranteed JSON error response
    console.error('[API] Caught error:', error);
    console.error('[API] Error stack:', error.stack);

    return res.status(500).json({
      message: 'Failed to process submission',
      error: error.message || 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
