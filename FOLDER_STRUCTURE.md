# 📁 Auro Tech Solutions - Project Folder Structure

## 🎯 **Current Status (What You Have Now)**

```
/Users/manishsingh/aurotech 3/
├── FOLDER_STRUCTURE.md        # ← This guide file
├── backend/                   # ✅ USE THIS FOLDER
│   ├── package.json          # Server dependencies
│   ├── server.js            # Express.js server
│   └── README.md            # Setup instructions
├── client/                    # ✅ Frontend (React)
│   ├── CONTACT_FORM_SETUP.md # Setup guide
│   ├── package.json          # Frontend dependencies
│   └── src/pages/Contact/Contact.jsx  # Contact form
└── server/                    # ❌ IGNORE/DELETE THIS
    ├── package.json          # Duplicate (old)
    └── server.js            # Duplicate (old)
```

## ⚠️ **CRITICAL: Which Folder to Use?**

### ✅ **ALWAYS USE**: `backend/` folder

### ❌ **NEVER USE**: `server/` folder (it's duplicate/old)

**If both folders exist, DELETE the `server/` folder manually.**

---

## 🚀 **Quick Setup Guide**

### **Step 1: Clean Up (Optional but Recommended)**

```bash
# Delete the duplicate server folder
rm -rf server/
```

### **Step 2: Backend Setup**

```bash
# Go to backend folder (the correct one)
cd backend

# Install server dependencies
npm install

# Create environment file
touch .env
```

**Add to `.env` file:**

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
RECIPIENT_EMAIL=aurotechsolutionspvtltd@gmail.com
FRONTEND_URL=http://localhost:5173
PORT=3001
```

### **Step 3: Frontend Setup**

```bash
# Go to client folder
cd ../client

# Install frontend dependencies
npm install
```

### **Step 4: For Formspree (Easiest)**

1. Go to [formspree.io](https://formspree.io/)
2. Create free account
3. Create a form, copy the Form ID
4. Update `client/src/pages/Contact/Contact.jsx`:

```javascript
// Line ~75: Replace YOUR_FORM_ID with actual ID
const formspreeEndpoint = "https://formspree.io/f/YOUR_ACTUAL_FORM_ID";
```

### **Step 5: Test Everything**

```bash
# Terminal 1: Start backend (if using custom server)
cd backend && npm start

# Terminal 2: Start frontend
cd client && npm run dev

# Open browser: http://localhost:5173
# Test contact form
```

---

## 📂 **File Summary**

| What You Need  | Location                               | Status   |
| -------------- | -------------------------------------- | -------- |
| Backend Server | `backend/server.js`                    | ✅ Ready |
| Backend Config | `backend/package.json`                 | ✅ Ready |
| Frontend App   | `client/src/`                          | ✅ Ready |
| Contact Form   | `client/src/pages/Contact/Contact.jsx` | ✅ Ready |
| Setup Guide    | `client/CONTACT_FORM_SETUP.md`         | ✅ Ready |

## 🎯 **Final Answer**

**Use `backend/` folder for all server-related files!**

The `server/` folder is old and duplicate - you can safely delete it.

## ⚠️ **Important: Which Folder to Use?**

### ✅ **USE**: `backend/` folder

### ❌ **DELETE**: `server/` folder (it's old and duplicate)

## 🚀 **Step-by-Step Setup**

### **Step 1: Clean Up Duplicate Folders**

```bash
# Delete the old server folder (if it exists)
rm -rf server/

# Keep only the backend/ folder
```

### **Step 2: Verify Your Structure**

Your final structure should look like this:

```
aurotech 3/
├── backend/          # ✅ Backend server files here
│   ├── package.json
│   ├── server.js
│   └── README.md
└── client/           # ✅ Frontend files here
    ├── package.json
    ├── src/
    └── ...
```

### **Step 3: Backend Setup**

```bash
# Go to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

### **Step 4: Frontend Setup**

```bash
# Go to client folder
cd ../client

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📂 **File Locations Summary**

| File                      | Location                               | Purpose             |
| ------------------------- | -------------------------------------- | ------------------- |
| `server.js`               | `backend/server.js`                    | Express server code |
| `package.json` (backend)  | `backend/package.json`                 | Server dependencies |
| `Contact.jsx`             | `client/src/pages/Contact/Contact.jsx` | Contact form        |
| `package.json` (frontend) | `client/package.json`                  | React dependencies  |

## 🎯 **For Contact Form (Formspree)**

**Only change needed**: Update `client/src/pages/Contact/Contact.jsx`

```javascript
// Line ~75 in Contact.jsx
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID_HERE";
```

## 🚀 **Quick Test**

1. **Backend**: `cd backend && npm start` (if using custom server)
2. **Frontend**: `cd client && npm run dev`
3. **Test form**: Fill contact form on `http://localhost:5173`

## 📞 **Need Help?**

If you're still confused:

1. **Delete** the `server/` folder completely
2. **Use only** the `backend/` folder
3. **Follow** the CONTACT_FORM_SETUP.md guide

**Final Answer**: Use `backend/` folder for server files! 🎯
