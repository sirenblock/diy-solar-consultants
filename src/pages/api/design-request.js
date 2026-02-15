/**
 * API endpoint for handling solar design request form submissions
 *
 * This endpoint:
 * 1. Validates the incoming form data
 * 2. Stores the submission (in a database or sends via email)
 * 3. Sends confirmation emails to both the customer and the company
 *
 * Note: This is a basic implementation. In production, you would:
 * - Store data in a database (PostgreSQL, MongoDB, etc.)
 * - Use a proper email service (SendGrid, AWS SES, Mailgun, etc.)
 * - Add rate limiting and CSRF protection
 * - Add file upload handling to cloud storage (AWS S3, Cloudinary, etc.)
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Basic server-side validation
    if (!formData.systemSize || !formData.energyOffset || !formData.inverterType) {
      return res.status(400).json({ error: 'Missing required system details' });
    }

    if (!formData.street || !formData.city || !formData.state || !formData.zip) {
      return res.status(400).json({ error: 'Missing required address information' });
    }

    if (!formData.name || !formData.email || !formData.phone) {
      return res.status(400).json({ error: 'Missing required contact information' });
    }

    if (!formData.agreeTerms || !formData.agreeContact) {
      return res.status(400).json({ error: 'Required agreements not accepted' });
    }

    // Generate request ID if not provided
    const requestId =
      formData.requestId ||
      `REQ-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // In production, you would:
    // 1. Store in database
    // 2. Upload files to cloud storage
    // 3. Send emails via email service

    // For now, we'll log the data (in production, remove this)
    console.log('Design Request Received:', {
      requestId,
      timestamp: new Date().toISOString(),
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      systemDetails: {
        size: formData.systemSize,
        offset: formData.energyOffset,
        inverter: formData.inverterType,
        battery: formData.batteryStorage,
      },
      location: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
      },
    });

    // TODO: Send email notifications
    // await sendCustomerConfirmation(formData);
    // await sendCompanyNotification(formData);

    // Simulate successful submission
    return res.status(200).json({
      success: true,
      requestId,
      message: 'Design request submitted successfully',
    });
  } catch (error) {
    console.error('Error processing design request:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process your request. Please try again.',
    });
  }
}

/**
 * Example function for sending customer confirmation email
 * In production, integrate with an email service like SendGrid
 */
async function sendCustomerConfirmation(formData) {
  // Email content
  const emailContent = `
Hi ${formData.name},

Thanks for requesting a solar design from DIY Solar Consultants! We've received your information and our engineers are excited to create a custom design for your property.

Your Request Number: ${formData.requestId}

What You Can Expect:
✓ Engineer review: 1-2 business days
✓ Custom design delivered: 5-7 business days
✓ Detailed quote and consultation call

Your Request Summary:
- System Size: ${formData.systemSize}
- Location: ${formData.city}, ${formData.state}
- Package: ${formData.servicePackage}

We'll email your custom design to ${formData.email} within 5-7 business days.

Questions in the meantime? Reply to this email or call us at (888) 555-1234.

Best regards,
DIY Solar Consultants Team

P.S. While you wait, check out our Solar Calculator to see estimated savings: https://diysolarconsultants.com/calculator
`;

  // TODO: Implement actual email sending
  console.log('Customer Confirmation Email:', emailContent);
}

/**
 * Example function for sending company notification email
 * In production, integrate with an email service
 */
async function sendCompanyNotification(formData) {
  // Email content for company
  const emailContent = `
New Solar Design Request - ${formData.name}

Design Request ${formData.requestId}

SYSTEM DETAILS:
- Size: ${formData.systemSize}
- Offset: ${formData.energyOffset}
- Panel: ${formData.panelPreference || 'Not specified'}
- Inverter: ${formData.inverterType} - ${formData.inverterBrand || 'Not specified'}
- Battery: ${formData.batteryStorage}
${formData.batteryPreference ? `- Battery Type: ${formData.batteryPreference}` : ''}
- Services: ${(formData.additionalServices || []).join(', ') || 'None'}

ROOF & PROPERTY:
- Address: ${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}
- Roof Type: ${formData.roofType}
- Age: ${formData.roofAge}
- Pitch: ${formData.roofPitch}
- Orientation: ${formData.roofOrientation}
- Shading: ${formData.shading}
- Panel: ${formData.panelAmperage} amp service

CONTACT:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Best time: ${(formData.bestTime || []).join(', ') || 'Not specified'}
- Timeline: ${formData.timeline}
- Budget: ${formData.budget || 'Not specified'}
- How found us: ${formData.referralSource || 'Not specified'}

Package Interest: ${formData.servicePackage}

Additional Notes:
${formData.additionalInfo || 'None'}

Files Attached: ${formData.files ? formData.files.length : 0}

---
Submitted: ${new Date().toLocaleString()}
`;

  // TODO: Implement actual email sending
  console.log('Company Notification Email:', emailContent);
}
