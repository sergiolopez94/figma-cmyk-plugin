# How to Test the Figma CMYK Plugin

## Prerequisites
- Figma Desktop App (required for local plugin development)
- Node.js installed on your system
- This repository cloned locally

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build the Plugin**
   ```bash
   npm run build
   ```
   This will use webpack to bundle TypeScript files and inline JavaScript into HTML.

## Loading the Plugin in Figma

1. **Open Figma Desktop App**
   - The desktop app is required for local plugin development
   - Web version does not support local plugins

2. **Access Plugin Development**
   - In Figma, go to `Plugins` → `Development` → `Import plugin from manifest...`
   - Or use the shortcut: `Cmd/Ctrl + Option/Alt + P` to open plugins menu

3. **Import the Plugin**
   - Navigate to your project directory
   - Select the `manifest.json` file
   - Click "Open"

4. **Run the Plugin**
   - Create or open a Figma file
   - Select some elements (frames, shapes, text, etc.)
   - Go to `Plugins` → `Development` → `CMYK Exporter`
   - The plugin UI should appear

## Testing the Plugin

### Basic Functionality Test
1. **Without Selection**
   - Run the plugin without selecting anything
   - Click "Check Selection"
   - Should show error: "Please select at least one element to export"

2. **With Selection**
   - Select one or more elements in your Figma file
   - Run the plugin
   - Click "Check Selection"
   - Should show: "X element(s) selected and ready for export"

3. **Close Plugin**
   - Click "Close Plugin" button
   - Plugin window should close

## Development Mode

For continuous development:
```bash
npm run dev
```
This will watch for changes and automatically rebuild.

After making changes:
1. Rebuild the plugin (`npm run build` or automatic with `npm run dev`)
2. In Figma, rerun the plugin (Cmd/Ctrl + Option/Alt + P)
3. The plugin will reload with your changes

## Current Features (Phase 1)
- Basic plugin structure
- UI with gradient styling
- Selection detection
- Message system between UI and plugin code
- TypeScript support

## Troubleshooting

**Plugin won't load:**
- Make sure you're using Figma Desktop App
- Check that `code.js` and `ui.js` exist (run `npm run build`)
- Verify `manifest.json` is properly formatted

**Build errors:**
- Run `npm install` to ensure dependencies are installed
- Check TypeScript errors in `code.ts` and `ui.ts`

**UI not showing:**
- Check browser console in Figma (View → Developer → Show/Hide Console)
- Look for JavaScript errors

## Next Steps
Once Phase 1 is verified working:
- Phase 2: Implement CMYK color conversion
- Phase 3: Add shadcn UI components
- Phase 4: Add export settings (DPI, size, format)
- Phase 5: Implement file management
- Phase 6: Add actual export functionality