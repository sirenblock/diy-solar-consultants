# Email Integration Setup Guide

This guide explains how to set up email notifications for the contact form.

## Current Status

The contact form is **fully functional** with:
- ✅ Form validation
- ✅ Spam prevention (honeypot)
- ✅ Success/error handling
- ✅ API endpoint (`/api/contact`)
- ✅ Email templates (ready to use)

**Email sending is currently in LOG MODE** - submissions are logged to console instead of sending actual emails.

## Setting Up Email Notifications

Choose one of the following email service providers:

---

## Option 1: SendGrid (Recommended for Most)

**Pros:** Reliable, generous free tier (100 emails/day), easy to set up
**Pricing:** Free tier available, then pay-as-you-go

### Setup Steps:

1. **Sign up for SendGrid**
   - Visit https://sendgrid.com
   - Create a free account
   - Verify your email

2. **Create API Key**
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Give it full "Mail Send" permissions
   - Copy the API key (you won't see it again!)

3. **Verify Sender Identity**
   - Go to Settings → Sender Authentication
   - Verify a single sender email (e.g., noreply@diysolar.com)
   - OR set up domain authentication (recommended for production)

4. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

5. **Add Environment Variable**

   Create `.env.local` in project root:
   ```env
   SENDGRID_API_KEY=your_api_key_here
   COMPANY_EMAIL=info@diysolar.com
   FROM_EMAIL=noreply@diysolar.com
   ```

6. **Update API Route**

   In `src/pages/api/contact.js`, replace the `sendEmailNotifications` function:

   ```javascript
   const sgMail = require('@sendgrid/mail')
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)

   async function sendEmailNotifications(data) {
     // Send to company
     await sgMail.send({
       to: process.env.COMPANY_EMAIL,
       from: process.env.FROM_EMAIL,
       subject: `New Contact Form Submission - ${data.projectType}`,
       html: companyEmailTemplate(data),
     })

     // Send confirmation to user
     await sgMail.send({
       to: data.email,
       from: process.env.COMPANY_EMAIL, // Use company email for replies
       replyTo: process.env.COMPANY_EMAIL,
       subject: 'We received your message - DIY Solar Consultants',
       html: userConfirmationTemplate(data),
     })

     return true
   }
   ```

---

## Option 2: Resend (Modern, Developer-Friendly)

**Pros:** Modern API, great DX, generous free tier
**Pricing:** 100 emails/day free, then $20/month for 50k emails

### Setup Steps:

1. **Sign up for Resend**
   - Visit https://resend.com
   - Create account

2. **Get API Key**
   - Go to API Keys
   - Create new API key
   - Copy the key

3. **Verify Domain** (optional but recommended)
   - Add your domain
   - Add DNS records
   - Verify

4. **Install Resend**
   ```bash
   npm install resend
   ```

5. **Add Environment Variable**
   ```env
   RESEND_API_KEY=your_api_key_here
   COMPANY_EMAIL=info@diysolar.com
   ```

6. **Update API Route**
   ```javascript
   const { Resend } = require('resend')
   const resend = new Resend(process.env.RESEND_API_KEY)

   async function sendEmailNotifications(data) {
     // Send to company
     await resend.emails.send({
       from: 'DIY Solar Consultants <noreply@diysolar.com>',
       to: process.env.COMPANY_EMAIL,
       subject: `New Contact Form Submission - ${data.projectType}`,
       html: companyEmailTemplate(data),
     })

     // Send to user
     await resend.emails.send({
       from: 'DIY Solar Consultants <info@diysolar.com>',
       to: data.email,
       subject: 'We received your message - DIY Solar Consultants',
       html: userConfirmationTemplate(data),
     })

     return true
   }
   ```

---

## Option 3: AWS SES (Best for Scale)

**Pros:** Very affordable at scale, highly reliable
**Pricing:** $0.10 per 1,000 emails

### Setup Steps:

1. **AWS Account Setup**
   - Create AWS account
   - Go to SES (Simple Email Service)
   - Request production access (starts in sandbox mode)

2. **Verify Domain/Email**
   - Verify sending email addresses
   - OR verify entire domain (better)

3. **Get AWS Credentials**
   - Create IAM user with SES permissions
   - Get Access Key ID and Secret Access Key

4. **Install AWS SDK**
   ```bash
   npm install @aws-sdk/client-ses
   ```

5. **Add Environment Variables**
   ```env
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   COMPANY_EMAIL=info@diysolar.com
   FROM_EMAIL=noreply@diysolar.com
   ```

6. **Update API Route**
   ```javascript
   const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses')

   const sesClient = new SESClient({
     region: process.env.AWS_REGION,
     credentials: {
       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
     }
   })

   async function sendEmailNotifications(data) {
     // Send to company
     await sesClient.send(new SendEmailCommand({
       Source: process.env.FROM_EMAIL,
       Destination: { ToAddresses: [process.env.COMPANY_EMAIL] },
       Message: {
         Subject: { Data: `New Contact Form Submission - ${data.projectType}` },
         Body: { Html: { Data: companyEmailTemplate(data) } }
       }
     }))

     // Send to user
     await sesClient.send(new SendEmailCommand({
       Source: process.env.COMPANY_EMAIL,
       Destination: { ToAddresses: [data.email] },
       Message: {
         Subject: { Data: 'We received your message - DIY Solar Consultants' },
         Body: { Html: { Data: userConfirmationTemplate(data) } }
       }
     }))

     return true
   }
   ```

---

## Option 4: Nodemailer (For Gmail/Office365)

**Pros:** Free if you have existing email service
**Cons:** May have sending limits, requires app passwords

### Setup Steps:

1. **Enable App Password** (for Gmail)
   - Go to Google Account settings
   - Security → 2-Step Verification
   - App passwords → Create new app password
   - Copy the password

2. **Install Nodemailer**
   ```bash
   npm install nodemailer
   ```

3. **Add Environment Variables**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your_app_password
   COMPANY_EMAIL=info@diysolar.com
   ```

4. **Update API Route**
   ```javascript
   const nodemailer = require('nodemailer')

   const transporter = nodemailer.createTransport({
     host: process.env.EMAIL_HOST,
     port: process.env.EMAIL_PORT,
     secure: false, // true for 465, false for other ports
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   })

   async function sendEmailNotifications(data) {
     // Send to company
     await transporter.sendMail({
       from: `"DIY Solar Consultants" <${process.env.EMAIL_USER}>`,
       to: process.env.COMPANY_EMAIL,
       subject: `New Contact Form Submission - ${data.projectType}`,
       html: companyEmailTemplate(data),
     })

     // Send to user
     await transporter.sendMail({
       from: `"DIY Solar Consultants" <${process.env.EMAIL_USER}>`,
       to: data.email,
       replyTo: process.env.COMPANY_EMAIL,
       subject: 'We received your message - DIY Solar Consultants',
       html: userConfirmationTemplate(data),
     })

     return true
   }
   ```

---

## Testing Email Integration

### 1. Test Locally

```bash
npm run dev
```

Navigate to `http://localhost:3000/contact` and submit the form.

### 2. Check Logs

Monitor the console for:
- ✅ Email sent successfully
- ❌ Email errors (check API keys, permissions)

### 3. Test in Production

Before going live:
- [ ] Test with your own email
- [ ] Verify both emails are received (company + user confirmation)
- [ ] Check spam folders
- [ ] Verify links work in emails
- [ ] Test on mobile email clients

---

## Security Checklist

- [ ] **Never commit `.env.local` to git** (already in `.gitignore`)
- [ ] Use environment variables for all sensitive data
- [ ] Enable rate limiting on API route (prevent spam)
- [ ] Verify sender domain (improves deliverability)
- [ ] Use HTTPS in production
- [ ] Consider adding reCAPTCHA for additional spam protection

---

## Rate Limiting (Optional but Recommended)

To prevent spam/abuse, add rate limiting:

```bash
npm install next-rate-limit
```

In `src/pages/api/contact.js`:

```javascript
import rateLimit from 'next-rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

export default async function handler(req, res) {
  try {
    await limiter.check(res, 5, 'CONTACT_FORM') // 5 requests per minute
  } catch {
    return res.status(429).json({ error: 'Rate limit exceeded' })
  }

  // ... rest of handler
}
```

---

## Adding to Newsletter (Optional)

If users opt in to newsletter, you can:

1. **Store in database**
   - Add to your CRM
   - Create subscribers table

2. **Use email marketing service**
   - Mailchimp
   - ConvertKit
   - SendGrid Marketing Campaigns

Example with Mailchimp:

```javascript
// After successful form submission
if (sanitizedData.newsletter) {
  await addToMailchimp(sanitizedData.email, sanitizedData.name)
}

async function addToMailchimp(email, name) {
  const response = await fetch(
    `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.split(' ')[0],
          LNAME: name.split(' ').slice(1).join(' '),
        },
      }),
    }
  )

  return response.json()
}
```

---

## Troubleshooting

### Emails not sending
1. Check API keys are correct
2. Verify sender email/domain
3. Check environment variables loaded (restart dev server)
4. Look for errors in console/logs

### Emails going to spam
1. Verify sender domain (SPF, DKIM, DMARC records)
2. Use company email as "from" address
3. Avoid spam trigger words
4. Add unsubscribe link (for newsletters)

### SendGrid sandbox mode
- You can only send to verified emails in sandbox
- Request production access to send to anyone

---

## Next Steps

1. Choose an email provider (recommend: SendGrid or Resend)
2. Follow setup steps above
3. Test thoroughly
4. Monitor email deliverability
5. Set up email analytics (open rates, etc.)

---

## Support

For issues or questions:
- Check provider documentation
- Test with curl/Postman to isolate issues
- Verify environment variables
- Check email service status pages
