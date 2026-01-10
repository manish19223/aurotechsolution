#!/usr/bin/env node

/**
 * Image Optimization Script
 * This script optimizes images by converting them to WebP format
 * and compressing them for better performance
 */

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Directories to scan for images
const imageDirs = ["src/assets/images", "public"];

// Supported image formats to convert
const supportedFormats = [".jpg", ".jpeg", ".png"];

// Check if ImageMagick or similar tools are available
function checkImageTools() {
  return new Promise((resolve) => {
    exec("which convert", (error) => {
      if (error) {
        console.log("⚠️  ImageMagick not found. Using fallback optimization.");
        resolve(false);
      } else {
        console.log("✅ ImageMagick found. Using advanced optimization.");
        resolve(true);
      }
    });
  });
}

// Convert image to WebP using ImageMagick
function convertToWebP(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const command = `convert "${inputPath}" -quality 85 -define webp:lossless=false "${outputPath}"`;
    exec(command, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Simple file copy as fallback
function copyFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    fs.copyFile(inputPath, outputPath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// Get file size in human readable format
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// Process images in a directory
async function processDirectory(dirPath, hasImageMagick) {
  const fullDirPath = path.join(__dirname, "..", dirPath);

  if (!fs.existsSync(fullDirPath)) {
    console.log(`Directory not found: ${fullDirPath}`);
    return;
  }

  const files = fs.readdirSync(fullDirPath);
  const imageFiles = files.filter((file) =>
    supportedFormats.includes(path.extname(file).toLowerCase())
  );

  console.log(`\n📁 Processing ${imageFiles.length} images in ${dirPath}`);

  for (const file of imageFiles) {
    const inputPath = path.join(fullDirPath, file);
    const webpPath = path.join(
      fullDirPath,
      file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    );

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = stats.size;

      if (hasImageMagick) {
        await convertToWebP(inputPath, webpPath);
        const webpStats = fs.statSync(webpPath);
        const webpSize = webpStats.size;

        const savings = (
          ((originalSize - webpSize) / originalSize) *
          100
        ).toFixed(1);
        console.log(
          `  ✅ ${file} → ${formatBytes(originalSize)} → ${formatBytes(
            webpSize
          )} (${savings}% smaller)`
        );
      } else {
        // Fallback: just copy the file
        await copyFile(inputPath, webpPath);
        console.log(`  📋 ${file} copied (no optimization available)`);
      }
    } catch (error) {
      console.log(`  ❌ Failed to process ${file}: ${error.message}`);
    }
  }
}

// Main function
async function main() {
  console.log("🚀 Starting image optimization...\n");

  const hasImageMagick = await checkImageTools();

  if (!hasImageMagick) {
    console.log("💡 To enable image optimization, install ImageMagick:");
    console.log("   macOS: brew install imagemagick");
    console.log("   Ubuntu: sudo apt-get install imagemagick");
    console.log("   Windows: Download from https://imagemagick.org/\n");
  }

  for (const dir of imageDirs) {
    await processDirectory(dir, hasImageMagick);
  }

  console.log("\n✅ Image optimization completed!");
  console.log(
    "💡 Update your components to use .webp versions for better performance"
  );
  console.log(
    '   Example: import banner1 from "../../assets/images/banner1.webp";'
  );
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };
