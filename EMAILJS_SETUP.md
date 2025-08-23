# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form directly to your Gmail.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service (Gmail)

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" from the list
4. Click "Connect Account" and log in with your Gmail account (talktomoiz07@gmail.com)
5. Grant the necessary permissions
6. Copy the **Service ID** (it will look like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template configuration:

**Template Settings:**
- Template Name: `Contact Form Submission`

**Email Template Content:**
```
From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

**Template Variables:**
- `{{name}}` - sender's name
- `{{email}}` - sender's email
- `{{subject}}` - message subject
- `{{message}}` - message content

4. In the template settings:
   - **To Email**: `talktomoiz07@gmail.com`
   - **From Name**: `{{name}}`
   - **From Email**: `{{email}}`
   - **Subject**: `Portfolio Contact: {{subject}}`
   - **Reply To**: `{{email}}`

5. Save the template and copy the **Template ID** (it will look like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** (it will look like `xxxxxxxxxxxxxxxx`)

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual IDs:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form

1. Restart your React development server:
   ```bash
   npm start
   ```

2. Navigate to your contact form
3. Fill out and submit a test message
4. Check your Gmail for the received email

## Step 7: Optional - Customize Email Template

You can customize the email template further:

**Advanced Template Example:**
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><small>Sent from your portfolio website contact form</small></p>
```

## Troubleshooting

### Common Issues:

1. **Emails not sending:**
   - Check that all IDs are correctly copied
   - Ensure environment variables are properly set
   - Check browser console for error messages

2. **Template variables not working:**
   - Make sure form field names match template variables
   - Verify template syntax in EmailJS dashboard

3. **Emails going to spam:**
   - Add your own email to your Gmail contacts
   - Check spam folder initially
   - Consider customizing the "From" field

### EmailJS Limits:

- **Free Plan**: 200 emails per month
- **Paid Plans**: Available for higher volumes

## Security Notes

- Never commit your actual EmailJS credentials to public repositories
- The `.env` file is already added to `.gitignore`
- EmailJS public key is safe to use in frontend applications

## Next Steps

Once set up, your contact form will:
1. Send emails directly to your Gmail
2. Include all form data (name, email, subject, message)
3. Provide success/error feedback to users
4. Work without requiring a backend server
