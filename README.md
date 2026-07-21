# Instagram Reels Hider

Hide Instagram reels from your feed and profile with a simple browser extension.

### Features

- Hides reels in your Instagram feed
- Hides reels in profile grids
- Hides the entire reels page
- Uses black box in dark mode, white box in light mode
- No settings needed - works automatically

### Development

This project uses [npm](https://www.npmjs.com/) and [esbuild](https://esbuild.github.io/) for development.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build for Chrome:
   ```bash
   npm run build:chrome
   ```

3. Build for Firefox:
   ```bash
   npm run build:ff
   ```

### Core Dependencies

- [Preact](https://github.com/preactjs/preact) (Used via preact/compat, [MIT License](https://github.com/preactjs/preact/blob/master/LICENSE))

### Licensing

The source code is licensed under MIT. License is available [here](/LICENSE).