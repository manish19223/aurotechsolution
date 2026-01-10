#!/usr/bin/env node

/**
 * Setup Verification Script for Auro Tech Solutions
 * This script checks if your project structure is correct
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Auro Tech Solutions - Setup Verification\n");

// Check if we're in the right directory
const currentDir = process.cwd();
const expectedDir = "aurotech 3";

if (!currentDir.includes(expectedDir)) {
  console.log('❌ Please run this script from the "aurotech 3" folder');
  process.exit(1);
}

console.log("📁 Current Directory:", currentDir);
console.log("📁 Expected Structure:\n");

// Check backend folder
const backendPath = path.join(currentDir, "backend");
const backendExists = fs.existsSync(backendPath);
const backendPackage = fs.existsSync(path.join(backendPath, "package.json"));
const backendServer = fs.existsSync(path.join(backendPath, "server.js"));

console.log("Backend Folder (backend/):");
console.log("  ├── package.json:", backendPackage ? "✅ Found" : "❌ Missing");
console.log("  └── server.js:   ", backendServer ? "✅ Found" : "❌ Missing");

// Check client folder
const clientPath = path.join(currentDir, "client");
const clientExists = fs.existsSync(clientPath);
const clientPackage = fs.existsSync(path.join(clientPath, "package.json"));
const contactForm = fs.existsSync(
  path.join(clientPath, "src", "pages", "Contact", "Contact.jsx")
);

console.log("\nFrontend Folder (client/):");
console.log(
  "  ├── package.json:           ",
  clientPackage ? "✅ Found" : "❌ Missing"
);
console.log(
  "  └── src/pages/Contact/Contact.jsx:",
  contactForm ? "✅ Found" : "❌ Missing"
);

// Check for duplicate server folder
const serverPath = path.join(currentDir, "server");
const serverExists = fs.existsSync(serverPath);

console.log("\nDuplicate Check:");
console.log(
  "  ❌ server/ folder (should be deleted):",
  serverExists ? "⚠️  EXISTS - Please delete!" : "✅ Not found (good)"
);

// Overall status
console.log("\n" + "=".repeat(50));
console.log("📊 OVERALL STATUS:");

let allGood = true;

if (!backendExists || !backendPackage || !backendServer) {
  console.log("❌ Backend setup incomplete");
  allGood = false;
}

if (!clientExists || !clientPackage || !contactForm) {
  console.log("❌ Frontend setup incomplete");
  allGood = false;
}

if (serverExists) {
  console.log("⚠️  Duplicate server/ folder found - please delete it");
}

if (allGood && !serverExists) {
  console.log("✅ Everything looks perfect!");
  console.log("\n🚀 Next Steps:");
  console.log("1. Choose your email method (Formspree recommended)");
  console.log("2. Follow setup instructions in client/CONTACT_FORM_SETUP.md");
  console.log("3. Test your contact form!");
} else {
  console.log("❌ Some issues found - please fix them first");
}

console.log("\n📞 Need help? Check FOLDER_STRUCTURE.md for detailed guide.");
console.log("=".repeat(50));
