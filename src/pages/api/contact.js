// API route for handling contact form submissions
// This handles validation, spam prevention, and email notifications

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      message: 'This endpoint only accepts POST requests'
    })
  }

  try {
    const {
      name,
      email,
      phone,
      projectType,
      systemSize,
      timeline,
      message,
      newsletter,
      website // Honeypot field
    } = req.body

    // Spam prevention: Check honeypot field
    if (website) {
      // If honeypot is filled, it's likely a bot
      // Return success to avoid alerting the bot
      return res.status(200).json({
        success: true,
        message: 'Thank you for your submission'
      })
    }

    // Validate required fields
    const errors = []

    if (!name || name.trim().length < 2) {
      errors.push({ field: 'name', message: 'Name is required and must be at least 2 characters' })
    }

    if (!email || !isValidEmail(email)) {
      errors.push({ field: 'email', message: 'Valid email address is required' })
    }

    if (!projectType) {
      errors.push({ field: 'projectType', message: 'Project type is required' })
    }

    if (!message || message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message is required and must be at least 10 characters' })
    }

    // Validate optional phone if provided
    if (phone && !isValidPhone(phone)) {
      errors.push({ field: 'phone', message: 'Invalid phone number format' })
    }

    // Return validation errors if any
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors,
        message: 'Please fix the validation errors'
      })
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeString(name),
      email: sanitizeString(email),
      phone: phone ? sanitizeString(phone) : '',
      projectType: sanitizeString(projectType),
      systemSize: systemSize ? sanitizeString(systemSize) : '',
      timeline: timeline ? sanitizeString(timeline) : '',
      message: sanitizeString(message),
      newsletter: Boolean(newsletter),
      submittedAt: new Date().toISOString()
    }

    // Send email notifications
    try {
      await sendEmailNotifications(sanitizedData)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Log error but don't fail the request
      // You can implement retry logic or queue system here
    }

    // Store in database (optional - implement based on your needs)
    // await storeContactSubmission(sanitizedData)

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will respond within 24 hours.',
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email
      }
    })

  } catch (error) {
    console.error('Contact form submission error:', error)

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Sorry, something went wrong. Please try again or contact us directly.'
    })
  }
}

// Helper function: Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Helper function: Phone validation (basic US format)
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\(\)]+$/
  const digitsOnly = phone.replace(/\D/g, '')
  return phoneRegex.test(phone) && digitsOnly.length >= 10 && digitsOnly.length <= 15
}

// Helper function: Sanitize string inputs
function sanitizeString(str) {
  if (typeof str !== 'string') return ''

  // Remove potentially dangerous characters
  return str
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets to prevent XSS
    .substring(0, 5000) // Limit length
}

// Helper function: Send email notifications
async function sendEmailNotifications(data) {
  /*
   * EMAIL INTEGRATION INSTRUCTIONS:
   *
   * This function should send two emails:
   * 1. Notification to company (info@diysolar.com)
   * 2. Confirmation to user
   *
   * Integration options:
   *
   * Option 1: SendGrid
   * ---------------
   * npm install @sendgrid/mail
   *
   * const sgMail = require('@sendgrid/mail')
   * sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   *
   * await sgMail.send({
   *   to: 'info@diysolar.com',
   *   from: 'noreply@diysolar.com',
   *   subject: `New Contact Form Submission - ${data.projectType}`,
   *   html: companyEmailTemplate(data)
   * })
   *
   * await sgMail.send({
   *   to: data.email,
   *   from: 'info@diysolar.com',
   *   subject: 'We received your message - DIY Solar Consultants',
   *   html: userConfirmationTemplate(data)
   * })
   *
   *
   * Option 2: AWS SES
   * ---------------
   * npm install @aws-sdk/client-ses
   *
   * const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses')
   * const sesClient = new SESClient({ region: 'us-east-1' })
   *
   * // Send company notification
   * await sesClient.send(new SendEmailCommand({
   *   Source: 'noreply@diysolar.com',
   *   Destination: { ToAddresses: ['info@diysolar.com'] },
   *   Message: {
   *     Subject: { Data: `New Contact Form Submission - ${data.projectType}` },
   *     Body: { Html: { Data: companyEmailTemplate(data) } }
   *   }
   * }))
   *
   *
   * Option 3: Nodemailer (for Gmail, Office365, etc.)
   * ---------------
   * npm install nodemailer
   *
   * const nodemailer = require('nodemailer')
   * const transporter = nodemailer.createTransport({
   *   service: 'gmail',
   *   auth: {
   *     user: process.env.EMAIL_USER,
   *     pass: process.env.EMAIL_PASSWORD
   *   }
   * })
   *
   * await transporter.sendMail({
   *   from: 'noreply@diysolar.com',
   *   to: 'info@diysolar.com',
   *   subject: `New Contact Form Submission - ${data.projectType}`,
   *   html: companyEmailTemplate(data)
   * })
   *
   *
   * Option 4: Resend (Modern alternative)
   * ---------------
   * npm install resend
   *
   * const { Resend } = require('resend')
   * const resend = new Resend(process.env.RESEND_API_KEY)
   *
   * await resend.emails.send({
   *   from: 'DIY Solar Consultants <noreply@diysolar.com>',
   *   to: 'info@diysolar.com',
   *   subject: `New Contact Form Submission - ${data.projectType}`,
   *   html: companyEmailTemplate(data)
   * })
   */

  // For now, log the email data
  // Replace this with actual email sending implementation
  console.log('=== EMAIL NOTIFICATION ===')
  console.log('To: info@diysolar.com')
  console.log('Subject: New Contact Form Submission -', data.projectType)
  console.log('Data:', data)
  console.log('========================')

  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 100))

  return true
}

// Email template for company notification
function companyEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ea580c; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #c2410c; }
        .value { margin-top: 5px; }
        .footer { margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 0 0 5px 5px; font-size: 12px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>

          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ` : ''}

          <div class="field">
            <div class="label">Project Type:</div>
            <div class="value">${data.projectType}</div>
          </div>

          ${data.systemSize ? `
          <div class="field">
            <div class="label">System Size:</div>
            <div class="value">${data.systemSize}</div>
          </div>
          ` : ''}

          ${data.timeline ? `
          <div class="field">
            <div class="label">Timeline:</div>
            <div class="value">${data.timeline}</div>
          </div>
          ` : ''}

          <div class="field">
            <div class="label">Message:</div>
            <div class="value" style="white-space: pre-wrap;">${data.message}</div>
          </div>

          <div class="field">
            <div class="label">Newsletter:</div>
            <div class="value">${data.newsletter ? 'Yes' : 'No'}</div>
          </div>
        </div>
        <div class="footer">
          Submitted: ${new Date(data.submittedAt).toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'long'
          })}
        </div>
      </div>
    </body>
    </html>
  `
}

// Email template for user confirmation
function userConfirmationTemplate(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ea580c; color: white; padding: 30px 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background: white; padding: 30px 20px; border: 1px solid #e5e7eb; }
        .button { display: inline-block; padding: 12px 24px; background: #ea580c; color: white; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
        .resources { background: #f9fafb; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .footer { margin-top: 20px; padding: 20px; background: #f3f4f6; border-radius: 0 0 5px 5px; font-size: 12px; color: #6b7280; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We received your message</p>
        </div>
        <div class="content">
          <p>Hi ${data.name},</p>

          <p>Thanks for reaching out to DIY Solar Consultants! We've received your message about <strong>${data.projectType}</strong> and will respond within 24 hours.</p>

          <p>In the meantime, you might find these resources helpful:</p>

          <div class="resources">
            <p style="margin: 0 0 10px 0; font-weight: bold;">Helpful Resources:</p>
            <a href="https://diysolar.com/calculator" class="button">Solar Calculator</a>
            <a href="https://diysolar.com/faq" class="button">FAQ</a>
            <a href="https://diysolar.com/equipment" class="button">Equipment Guide</a>
          </div>

          <p><strong>What happens next?</strong></p>
          <ol>
            <li>Our team will review your inquiry</li>
            <li>We'll respond within 24 hours (usually same business day)</li>
            <li>If needed, we'll schedule a free consultation</li>
            <li>We'll provide a custom proposal for your project</li>
          </ol>

          <p>If you have any urgent questions, feel free to call us at <a href="tel:+18885551234">(888) 555-1234</a>.</p>

          <p>Best regards,<br>
          <strong>DIY Solar Consultants Team</strong></p>
        </div>
        <div class="footer">
          <p>DIY Solar Consultants<br>
          Email: <a href="mailto:info@diysolarconsultants.com">info@diysolarconsultants.com</a> | Phone: (888) 555-1234<br>
          Licensed Professional Engineers | NABCEP Certified</p>

          ${data.newsletter ? '<p style="margin-top: 10px;">You\'re subscribed to our solar tips newsletter.</p>' : ''}
        </div>
      </div>
    </body>
    </html>
  `
}
