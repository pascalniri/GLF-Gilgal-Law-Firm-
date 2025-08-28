const fs = require('fs');
const path = require('path');

// This script helps you generate favicon files
// You'll need to install sharp: npm install sharp

console.log('Favicon Generator for Gilgal Law Firm');
console.log('=====================================');
console.log('');
console.log('To generate favicon files, you have several options:');
console.log('');
console.log('Option 1: Use the HTML tool');
console.log('- Open favicon-generator.html in your browser');
console.log('- Click the download buttons for each favicon size');
console.log('- Save the files to your public folder');
console.log('');
console.log('Option 2: Use an online generator (Recommended)');
console.log('- Go to https://realfavicongenerator.net/');
console.log('- Upload your GLF_logo2.svg file');
console.log('- Download the generated package');
console.log('- Extract all files to your public folder');
console.log('');
console.log('Option 3: Use Node.js with Sharp');
console.log('- Install sharp: npm install sharp');
console.log('- Run: node generate-favicons.js');
console.log('');
console.log('Required favicon files:');
console.log('- favicon.ico (32x32)');
console.log('- favicon-16x16.png');
console.log('- favicon-32x32.png');
console.log('- apple-touch-icon.png (180x180)');
console.log('- android-chrome-192x192.png');
console.log('- android-chrome-512x512.png');
console.log('');
console.log('After generating all files:');
console.log('1. Place them in your public folder');
console.log('2. Restart your development server');
console.log('3. Clear browser cache');
console.log('4. Test the favicon in different browsers');
console.log('');

// Check if sharp is available
try {
    const sharp = require('sharp');
    console.log('Sharp is available! You can generate favicons programmatically.');
    console.log('Run the script with: node generate-favicons.js');
} catch (error) {
    console.log('Sharp is not installed. Install it with: npm install sharp');
    console.log('Or use one of the other options above.');
}
