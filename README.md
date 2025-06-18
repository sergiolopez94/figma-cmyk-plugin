# Figma CMYK Plugin

A Figma plugin that converts colors to CMYK color space and exports selected files with customizable settings.

## Features

- **CMYK Color Conversion**: Accurately converts RGB/HSL colors to CMYK color space
- **Flexible Export Options**:
  - DPI selection (72, 150, 300, 600 DPI + custom)
  - Size options (original, custom dimensions, scale percentage)
  - Multiple formats (PNG, JPG, PDF)
- **User-Friendly Interface**:
  - Minimal design with shadcn components
  - File path selector with browse functionality
  - Settings persistence (remember last location or always ask)
- **Professional Output**: CMYK-accurate exports for print-ready designs

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the plugin:
   ```bash
   npm run build
   ```
4. In Figma, go to Plugins → Development → Import plugin from manifest
5. Select the `manifest.json` file from this project

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Figma desktop app

### Setup
```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
```

### Project Structure
```
├── manifest.json      # Plugin configuration
├── src/
│   ├── code.ts       # Main plugin logic
│   ├── ui.html       # Plugin UI template
│   └── ui.ts         # UI logic
├── dist/             # Built files (generated)
│   ├── code.js       # Compiled plugin code
│   └── ui.html       # UI with inlined JS
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript config
└── webpack.config.js # Webpack bundler config
```

## Usage

1. Select the frames or elements you want to export
2. Run the plugin from Plugins menu
3. Configure export settings:
   - Choose DPI (resolution)
   - Set size (original, custom, or scale)
   - Select output format
   - Pick save location
4. Click Export to save with CMYK colors

## Design System

The plugin uses a minimal design approach with:
- **Primary colors**: White backgrounds, light gray text
- **Accent colors**: Purple and blue gradients
- **Components**: Built with shadcn/ui for consistency

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.