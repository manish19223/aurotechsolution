# 🚀 Contact Form Backend Server

**✅ THIS IS THE CORRECT FOLDER TO USE**

Express.js server for handling contact form submissions from Auro Tech Solutions website.

## ⚠️ **Important Notice**

- **✅ USE THIS**: `backend/` folder (where you are now)
- **❌ DELETE THIS**: `../server/` folder (old/duplicate - can be removed)

**Correct Project Structure:**

```
aurotech 3/
├── backend/          # ← You are here ✅
│   ├── server.js     # ← This file
│   └── package.json  # ← Dependencies
└── client/           # ← Frontend folder
    └── src/pages/Contact/Contact.jsx
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env` file in the backend folder:

```bash
# Required: Your Gmail credentials
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password

# Optional: Custom settings
RECIPIENT_EMAIL=aurotechsolutionspvtltd@gmail.com
FRONTEND_URL=http://localhost:5173
PORT=3001
```

### 3. Get Gmail App Password

1. Go to Google Account settings
2. Enable 2-factor authentication
3. Generate App Password for "Mail"
4. Use this password in `EMAIL_APP_PASSWORD`

### 4. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📧 Features

- ✅ **Email Delivery** - Sends HTML formatted emails
- ✅ **Input Validation** - Server-side validation
- ✅ **Rate Limiting** - Prevents spam (5 contact/3 career submissions per hour per IP)
- ✅ **File Upload Support** - Resume uploads for career applications (5MB max)
- ✅ **Security Headers** - Helmet.js protection
- ✅ **CORS Support** - Configurable frontend URLs
- ✅ **Error Handling** - Comprehensive error responses
- ✅ **Health Check** - `/api/health` endpoint

## 🔧 API Endpoints

### POST `/api/contact`

Handles contact form submissions.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "subject": "Website Inquiry",
  "message": "Hello, I need a website..."
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

### POST `/api/career`

Handles career application submissions with file upload.

**Request Body (FormData):**

```
name: "John Doe"
email: "john@example.com"
mobile: "9876543210"
position: "Mobile Application Developer"
about: "Tell us about yourself..."
resume: [File] (PDF, DOC, DOCX, TXT - max 5MB)
```

**Success Response:**

```json
{
  "success": true,
  "message": "Thank you for your application! We will review it and get back to you soon."
}
```

### GET `/api/health`

Health check endpoint.

## 📧 Email Template

Emails are sent in beautiful HTML format with:

- Professional styling
- Clickable email/phone links
- Company branding
- Responsive design

## 🔒 Security Features

- **Rate Limiting**: 5 contact/3 career submissions per hour per IP
- **Input Validation**: Email, phone, message, and file type validation
- **File Upload Security**: Restricted to PDF, DOC, DOCX, TXT files (5MB max)
- **CORS Protection**: Configurable allowed origins
- **Helmet Security**: Security headers
- **No SQL Injection**: Proper input sanitization

## 🛠️ Troubleshooting

### "Authentication failed" Error

- Make sure you're using Gmail App Password, not regular password
- Enable 2-factor authentication on Gmail account
- App Password should be for "Mail" application

### "CORS error" in browser

- Check `FRONTEND_URL` in `.env` matches your frontend URL
- For development: `http://localhost:5173`
- For production: your actual domain

### Emails not being received

- Check spam/junk folder
- Verify `EMAIL_USER` and `EMAIL_APP_PASSWORD` are correct
- Check server logs for detailed error messages

## 📝 Environment Variables

| Variable             | Required | Default                           | Description           |
| -------------------- | -------- | --------------------------------- | --------------------- |
| `EMAIL_USER`         | ✅       | -                                 | Your Gmail address    |
| `EMAIL_APP_PASSWORD` | ✅       | -                                 | Gmail App Password    |
| `RECIPIENT_EMAIL`    | ❌       | aurotechsolutionspvtltd@gmail.com | Where to send emails  |
| `FRONTEND_URL`       | ❌       | http://localhost:5173             | Frontend URL for CORS |
| `PORT`               | ❌       | 3001                              | Server port           |

## 🚀 Deployment

### For Production:

1. Set environment variables
2. Run `npm start`
3. Use a process manager like PM2
4. Set up reverse proxy (nginx)
5. Enable SSL certificate

### Environment Setup:

```bash
export EMAIL_USER=your-email@gmail.com
export EMAIL_APP_PASSWORD=your-app-password
export NODE_ENV=production
```

## 📞 Support

If you encounter issues:

1. Check server logs for error messages
2. Verify all environment variables are set
3. Test Gmail credentials manually
4. Check network connectivity

---

**Built for Auro Tech Solutions - Professional Contact Form Handling**
