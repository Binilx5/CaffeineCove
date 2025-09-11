# Image Compression Script

This script helps compress your large image files automatically.

## Prerequisites
Install image compression tools:

```bash
# Install sharp for Node.js image processing
npm install sharp --save-dev

# Or use imagemin
npm install imagemin imagemin-mozjpeg imagemin-pngquant --save-dev
```

## Usage

Run this script to compress all images in the assets folder:

```bash
node scripts/compress-images.js
```

## What it does:
1. Finds all .jpg and .png files in src/assets/
2. Compresses them to 70% quality
3. Resizes large images to appropriate dimensions
4. Saves compressed versions

## Expected Results:
- CC_Drinks_page-0001.jpg: 5.1MB → ~200KB (96% reduction)
- CC_Food_page-0001.jpg: 4.4MB → ~200KB (95% reduction)
- cafe-interior.jpg: 3.4MB → ~400KB (88% reduction)

## Manual Alternative:
If you prefer manual compression, use these online tools:
- TinyPNG.com (free, excellent results)
- Squoosh.app (Google's tool)
- Compressor.io

Target file sizes:
- Menu images: 100-200KB each
- Gallery images: 150-300KB each
- Hero background: 300-500KB