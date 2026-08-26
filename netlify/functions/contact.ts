import type { Handler, HandlerEvent } from "@netlify/functions";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  _honey?: string;
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
};

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  // Get client IP for rate limiting
  const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
  
  // Check rate limit
  if (!checkRateLimit(clientIP)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    const data: ContactFormData = JSON.parse(event.body || '{}');
    
    // Honeypot check
    if (data._honey && data._honey.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Form submitted successfully' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Validate email
    if (!validateEmail(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name).substring(0, 100),
      email: sanitizeInput(data.email).substring(0, 100),
      message: sanitizeInput(data.message).substring(0, 5000),
    };

    // Validate lengths
    if (sanitizedData.name.length < 2) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name must be at least 2 characters' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    if (sanitizedData.message.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message must be at least 10 characters' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // In production, send email here using your preferred service
    // Example with SendGrid, Mailgun, or similar:
    /*
    await sendEmail({
      to: 'info@queva.tech',
      subject: `New Contact Form: ${sanitizedData.name}`,
      text: `
        Name: ${sanitizedData.name}
        Email: ${sanitizedData.email}
        Message: ${sanitizedData.message}
      `,
    });
    */

    // For now, log to console (replace with actual email sending)
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ip: clientIP,
      ...sanitizedData,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
      }),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};

export { handler };
