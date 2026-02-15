// API route for sending Solar ROI reports
// Handles lead magnet calculator submissions

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests'
    });
  }

  try {
    const { email, monthlyBill, zipCode, estimate } = req.body;

    // Validate required fields
    const errors = [];

    if (!email || !isValidEmail(email)) {
      errors.push({ field: 'email', message: 'Valid email address is required' });
    }

    if (!monthlyBill || monthlyBill < 20) {
      errors.push({ field: 'monthlyBill', message: 'Valid monthly bill amount is required' });
    }

    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      errors.push({ field: 'zipCode', message: 'Valid 5-digit ZIP code is required' });
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors,
        message: 'Please fix the validation errors'
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeString(email),
      monthlyBill: parseFloat(monthlyBill),
      zipCode: sanitizeString(zipCode),
      estimate,
      submittedAt: new Date().toISOString()
    };

    // Send ROI report email
    try {
      await sendROIReport(sanitizedData);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log error but don't fail the request
    }

    // Store lead in database/CRM (optional)
    // await storeLeadData(sanitizedData)

    return res.status(200).json({
      success: true,
      message: 'Your Solar ROI Report has been sent to your email!',
      data: {
        email: sanitizedData.email
      }
    });

  } catch (error) {
    console.error('ROI report submission error:', error);

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

// Helper function: Send ROI report email
async function sendROIReport(data) {
  /*
   * EMAIL INTEGRATION INSTRUCTIONS:
   *
   * This function sends a detailed Solar ROI report to the user.
   * The email should include:
   * 1. Personalized solar savings estimate
   * 2. System size recommendation
   * 3. Cost breakdown
   * 4. Payback period
   * 5. 25-year projections
   * 6. CTA to request custom design
   *
   * See /api/contact.js for integration examples (SendGrid, AWS SES, Resend, etc.)
   */

  console.log('=== SOLAR ROI REPORT EMAIL ===');
  console.log('To:', data.email);
  console.log('Subject: Your FREE Solar ROI Report');
  console.log('Data:', data);
  console.log('==============================');

  // For now, log the report data
  // Replace with actual email sending implementation
  await new Promise(resolve => setTimeout(resolve, 100));

  // Also notify company of new lead
  console.log('=== NEW LEAD NOTIFICATION ===');
  console.log('To: info@diysolarconsultants.com');
  console.log('Subject: New Solar Calculator Lead');
  console.log('Email:', data.email);
  console.log('ZIP:', data.zipCode);
  console.log('Monthly Bill:', data.monthlyBill);
  console.log('============================');

  return true;
}

// Email template for ROI report
function roiReportTemplate(data) {
  const { email, monthlyBill, zipCode, estimate } = data;

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
        .highlight-box { background: #fff7ed; border-left: 4px solid #ea580c; padding: 20px; margin: 20px 0; }
        .stat { text-align: center; padding: 20px; margin: 10px 0; background: #f9fafb; border-radius: 8px; }
        .stat-value { font-size: 36px; font-weight: bold; color: #ea580c; margin: 0; }
        .stat-label { color: #6b7280; margin: 5px 0 0 0; }
        .button { display: inline-block; padding: 15px 30px; background: #ea580c; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
        .breakdown { border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin: 20px 0; }
        .breakdown-row { display: flex; justify-content: space-between; padding: 15px 20px; border-bottom: 1px solid #e5e7eb; }
        .breakdown-row:last-child { border-bottom: none; background: #f9fafb; font-weight: bold; }
        .footer { background: #f3f4f6; padding: 30px 20px; text-align: center; font-size: 14px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 32px;">Your Solar ROI Report</h1>
          <p style="margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">Personalized for ${zipCode}</p>
        </div>

        <div class="content">
          <p>Thank you for using our Solar Savings Calculator! Based on your monthly electric bill of <strong>$${monthlyBill}</strong>, here's what solar can do for you:</p>

          <div class="stat">
            <p class="stat-value">$${estimate.annualSavings.toLocaleString()}</p>
            <p class="stat-label">Estimated Annual Savings</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 20px 0;">
            <div class="stat">
              <p class="stat-value">${estimate.systemSize} kW</p>
              <p class="stat-label">Recommended System Size</p>
            </div>
            <div class="stat">
              <p class="stat-value">${estimate.paybackYears} years</p>
              <p class="stat-label">Payback Period</p>
            </div>
          </div>

          <div class="highlight-box">
            <h3 style="margin-top: 0; color: #c2410c;">Investment Breakdown</h3>
            <div class="breakdown">
              <div class="breakdown-row">
                <span>System Cost (DIY)</span>
                <span>$${estimate.systemCost.toLocaleString()}</span>
              </div>
              <div class="breakdown-row">
                <span>30% Federal Tax Credit</span>
                <span style="color: #059669;">-$${(estimate.systemCost * 0.3).toLocaleString()}</span>
              </div>
              <div class="breakdown-row">
                <span>Net Investment</span>
                <span><strong>$${estimate.systemCostAfterCredit.toLocaleString()}</strong></span>
              </div>
            </div>
          </div>

          <div class="highlight-box" style="background: #ecfdf5; border-left-color: #059669;">
            <h3 style="margin-top: 0; color: #059669;">25-Year Projection</h3>
            <p style="font-size: 24px; font-weight: bold; margin: 10px 0; color: #059669;">
              $${estimate.lifetime25Savings.toLocaleString()} in total savings
            </p>
            <p style="margin: 10px 0 0 0; color: #065f46;">
              That's a net profit of $${(estimate.lifetime25Savings - estimate.systemCostAfterCredit).toLocaleString()} over 25 years!
            </p>
          </div>

          <h3>What's Included in Your Custom Design:</h3>
          <ul style="line-height: 1.8;">
            <li>Detailed system layout for your specific roof</li>
            <li>Professional engineering calculations</li>
            <li>Equipment recommendations (panels, inverters, mounting)</li>
            <li>Permit-ready documentation with PE stamp</li>
            <li>Production estimates based on your location</li>
            <li>Step-by-step installation guidance</li>
          </ul>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://diysolarconsultants.com/design-request" class="button">
              Get Your Custom Solar Design
            </a>
            <p style="color: #6b7280; font-size: 14px;">5-7 day turnaround | 98% permit approval rate</p>
          </div>

          <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;"><strong>Limited Time:</strong> Get 10% off your first design package when you mention this report!</p>
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold; color: #374151;">
            DIY Solar Consultants
          </p>
          <p style="margin: 0 0 10px 0;">
            Licensed Professional Engineers | NABCEP Certified | 98% Permit Approval Rate
          </p>
          <p style="margin: 15px 0 10px 0;">
            <a href="mailto:info@diysolarconsultants.com" style="color: #ea580c; text-decoration: none;">info@diysolarconsultants.com</a> |
            <a href="tel:+18885551234" style="color: #ea580c; text-decoration: none;">(888) 555-1234</a>
          </p>
          <p style="margin: 20px 0 0 0; font-size: 12px; color: #9ca3af;">
            <a href="https://diysolarconsultants.com/unsubscribe" style="color: #9ca3af;">Unsubscribe</a> |
            <a href="https://diysolarconsultants.com/privacy" style="color: #9ca3af;">Privacy Policy</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
