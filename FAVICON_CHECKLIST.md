# Favicon Files Checklist for Gilgal Law Firm

## Required Files (based on your favicon script)

### Primary Favicon Files:
- [ ] `favicon-96x96.png` (96x96 pixels)
- [ ] `favicon.svg` (SVG format)
- [ ] `favicon.ico` (ICO format)
- [ ] `apple-touch-icon.png` (180x180 pixels)

### Additional Compatibility Files:
- [ ] `favicon-32x32.png` (32x32 pixels)
- [ ] `favicon-16x16.png` (16x16 pixels)

### Web App Manifest Icons:
- [ ] `web-app-manifest-192x192.png` (192x192 pixels)
- [ ] `web-app-manifest-512x512.png` (512x512 pixels)

## How to Generate These Files

### Option 1: Use the HTML Tool
1. Open `favicon-generator.html` in your browser
2. Download each favicon size
3. Rename files according to the checklist above

### Option 2: Use Online Generator (Recommended)
1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload your `GLF_logo2.svg` file
3. Configure settings:
   - **Favicon design**: Use your logo
   - **Favicon size**: 96x96 (primary)
   - **Apple touch icon**: 180x180
   - **Android Chrome**: 192x192 and 512x512
   - **Windows tiles**: Include if needed
4. Download the package
5. Extract and place all files in your `public/` folder

### Option 3: Manual Creation
If you have image editing software:
1. Open `GLF_logo2.svg` in your editor
2. Export to PNG at each required size
3. Save with the exact filenames listed above

## File Placement
All favicon files must be placed in the `public/` folder at the root of your project.

## Testing
After placing all files:
1. Restart your development server
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Test in different browsers
4. Check both browser tabs and bookmarks

## Common Issues
- **Favicon not showing**: Check file paths and names
- **Different icons in search vs. site**: Clear browser cache and wait for search engines to re-index
- **SVG not working**: Some browsers don't support SVG favicons well - the PNG versions will be used as fallbacks
