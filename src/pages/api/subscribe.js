// API route for newsletter/lead subscription
// Handles email signups from exit intent popup and other lead forms

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests'
    });
  }

  try {
    const { email, source = 'unknown', name = '', leadMagnet = 'roi-report' } = req.body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email',
        message: 'Please enter a valid email address'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeString(email),
      source: sanitizeString(source),
      name: name ? sanitizeString(name) : '',
      leadMagnet: sanitizeString(leadMagnet),
      subscribedAt: new Date().toISOString()
    };

    // Send welcome email with ROI report
    try {
      await sendWelcomeEmail(sanitizedData);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log error but don't fail the request
    }

    // Add to email list/CRM (optional)
    // await addToEmailList(sanitizedData)

    // Notify company of new subscriber
    try {
      await notifyNewSubscriber(sanitizedData);
    } catch (notifyError) {
      console.error('Notification failed:', notifyError);
    }

    // Get success message based on lead magnet type
    const successMessages = {
      'diy-solar-guide': 'Success! Check your email for your FREE DIY Solar Guide.',
      'calculator-spreadsheet': 'Success! Check your email for your FREE Solar Calculator.',
      'roi-report': 'Success! Check your email for your FREE Solar ROI Report.',
      'equipment-guide': 'Success! Check your email for your FREE Equipment Guide.',
      'default': 'Success! Check your email for your free download.'
    };

    return res.status(200).json({
      success: true,
      message: successMessages[sanitizedData.leadMagnet] || successMessages.default,
      data: {
        email: sanitizedData.email,
        leadMagnet: sanitizedData.leadMagnet
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Sorry, something went wrong. Please try again.'
    });
  }
}

// Helper function: Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function: Sanitize string inputs
function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/[<>]/g, '').substring(0, 500);
}

// Helper function: Send welcome email with ROI report
async function sendWelcomeEmail(data) {
  /*
   * EMAIL INTEGRATION INSTRUCTIONS:
   *
   * This function sends a welcome email with a Solar ROI Report PDF.
   * The email should include:
   * 1. Welcome message
   * 2. Link to download or view ROI report
   * 3. Brief solar tips
   * 4. CTA to request custom design
   *
   * See /api/contact.js for integration examples
   */

  const leadMagnetTitles = {
    'diy-solar-guide': 'Your FREE DIY Solar Guide',
    'calculator-spreadsheet': 'Your FREE Solar Calculator',
    'roi-report': 'Your FREE Solar ROI Report',
    'equipment-guide': 'Your FREE Equipment Guide'
  };

  const subject = leadMagnetTitles[data.leadMagnet] || 'Your FREE Solar Resource';

  console.log('=== WELCOME EMAIL ===');
  console.log('To:', data.email);
  console.log('Subject:', subject + ' + Welcome Gift');
  console.log('Source:', data.source);
  console.log('Lead Magnet:', data.leadMagnet);
  console.log('==================');

  await new Promise(resolve => setTimeout(resolve, 100));

  return true;
}

// Helper function: Notify company of new subscriber
async function notifyNewSubscriber(data) {
  console.log('=== NEW SUBSCRIBER NOTIFICATION ===');
  console.log('To: info@diysolar.com');
  console.log('Subject: New Email Subscriber');
  console.log('Email:', data.email);
  console.log('Source:', data.source);
  console.log('=================================');

  await new Promise(resolve => setTimeout(resolve, 50));

  return true;
}

// Email template for welcome message
function welcomeEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%); color: white; padding: 40px 20px; text-align: center; }
        .content { background: white; padding: 30px 20px; }
        .button { display: inline-block; padding: 15px 30px; background: #ea580c; color: white; text-decoration: none; border-radius: 5px; margin: 15px 0; font-weight: bold; }
        .tip-box { background: #fff7ed; border-left: 4px solid #ea580c; padding: 15px 20px; margin: 15px 0; }
        .footer { background: #f3f4f6; padding: 30px 20px; text-align: center; font-size: 14px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 32px;">Welcome to DIY Solar!</h1>
          <p style="margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">Your solar journey starts here</p>
        </div>

        <div class="content">
          <p>Hi${data.name ? ' ' + data.name : ''},</p>

          <p>Thank you for your interest in solar energy! We're excited to help you save money and reduce your carbon footprint.</p>

          <div style="text-align: center; background: #ecfdf5; padding: 30px 20px; border-radius: 8px; margin: 25px 0;">
            <h2 style="color: #059669; margin: 0 0 10px 0;">Your FREE Solar ROI Report is Ready!</h2>
            <p style="margin: 10px 0;">Download your personalized report to learn:</p>
            <ul style="text-align: left; display: inline-block; margin: 15px 0;">
              <li>How much you can save with solar</li>
              <li>Recommended system size for your home</li>
              <li>Payback period and ROI calculations</li>
              <li>Available incentives and tax credits</li>
            </ul>
            <a href="https://diysolar.com/roi-report" class="button" style="background: #059669;">
              Download Your Report
            </a>
          </div>

          <h3 style="color: #c2410c;">Quick Solar Tips to Get Started:</h3>

          <div class="tip-box">
            <strong>Tip #1: Understand Your Energy Usage</strong>
            <p style="margin: 10px 0 0 0;">Check your last 12 months of electric bills to calculate your average monthly usage. This helps determine the right system size.</p>
          </div>

          <div class="tip-box">
            <strong>Tip #2: Assess Your Roof</strong>
            <p style="margin: 10px 0 0 0;">South-facing roofs with minimal shading work best. Don't worry if yours isn't perfect - we can design around it!</p>
          </div>

          <div class="tip-box">
            <strong>Tip #3: DIY = Big Savings</strong>
            <p style="margin: 10px 0 0 0;">Installing solar yourself can save 40-60% compared to full-service installers. Our designs make it possible!</p>
          </div>

          <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
            <h3 style="margin: 0 0 10px 0; color: #92400e;">Ready for a Custom Design?</h3>
            <p style="margin: 0 0 15px 0; color: #92400e;">Get your professional solar system design in 5-7 days</p>
            <a href="https://diysolar.com/design-request" class="button">
              Request Custom Design
            </a>
          </div>

          <p><strong>What you'll receive in future emails:</strong></p>
          <ul>
            <li>Solar installation guides and tutorials</li>
            <li>Equipment recommendations and reviews</li>
            <li>Success stories from DIY solar homeowners</li>
            <li>Exclusive discounts and offers</li>
            <li>Industry news and incentive updates</li>
          </ul>

          <p>Have questions? Just reply to this email or call us at <a href="tel:+15555551234">(555) 555-1234</a>.</p>

          <p>To your solar success,<br>
          <strong>The DIY Solar Consultants Team</strong></p>
        </div>

        <div class="footer">
          <p style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold; color: #374151;">
            DIY Solar Consultants
          </p>
          <p style="margin: 0 0 10px 0;">
            Licensed Professional Engineers | NABCEP Certified | 98% Permit Approval Rate
          </p>
          <p style="margin: 15px 0 10px 0;">
            <a href="mailto:info@diysolar.com" style="color: #ea580c; text-decoration: none;">info@diysolar.com</a> |
            <a href="tel:+15555551234" style="color: #ea580c; text-decoration: none;">(555) 555-1234</a>
          </p>
          <p style="margin: 20px 0 0 0; font-size: 12px; color: #9ca3af;">
            <a href="https://diysolar.com/unsubscribe?email=${data.email}" style="color: #9ca3af;">Unsubscribe</a> |
            <a href="https://diysolar.com/privacy" style="color: #9ca3af;">Privacy Policy</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
