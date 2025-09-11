const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/optimized');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const compressionSettings = {
  // Large menu images
  'CC_Drinks_page': { width: 800, quality: 75 },
  'CC_Food_page': { width: 800, quality: 75 },
  'CC_Food': { width: 600, quality: 80 },
  
  // Gallery images
  'cafe-interior': { width: 1200, quality: 80 },
  'cafe-interior2': { width: 800, quality: 80 },
  'cafe-interior3': { width: 800, quality: 80 },
  'cafe-interior4': { width: 800, quality: 80 },
  'cafe-interior5': { width: 800, quality: 80 },
  'cafe-interior6': { width: 800, quality: 80 },
  'cafe-interior7': { width: 800, quality: 80 },
  'cafe-interior8': { width: 600, quality: 85 },
  'cafe-interior9': { width: 800, quality: 80 },
  'cafe-interior10': { width: 600, quality: 85 },
  'cafe-interior11': { width: 600, quality: 85 },
  'cafe-interior12': { width: 600, quality: 85 },
  'cafe-interior13': { width: 600, quality: 85 },
  'cafe-interior15': { width: 400, quality: 85 },
  
  // Drinks
  'drink1': { width: 400, quality: 85 },
  'drink2': { width: 400, quality: 85 },
  
  // Default settings
  'default': { width: 800, quality: 80 }
};

async function compressImage(inputPath, outputPath, settings) {
  try {
    const { width, quality } = settings;
    
    await sharp(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const reduction = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(inputStats.size / 1024 / 1024).toFixed(1)}MB → ${(outputStats.size / 1024).toFixed(0)}KB (${reduction}% reduction)`);
  } catch (error) {
    console.error(`❌ Error compressing ${inputPath}:`, error.message);
  }
}

async function compressAllImages() {
  console.log('🚀 Starting image compression...\n');
  
  const files = fs.readdirSync(ASSETS_DIR);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  
  for (const file of imageFiles) {
    const inputPath = path.join(ASSETS_DIR, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.jpg`);
    
    // Find matching compression settings
    let settings = compressionSettings.default;
    for (const [key, config] of Object.entries(compressionSettings)) {
      if (baseName.includes(key) && key !== 'default') {
        settings = config;
        break;
      }
    }
    
    await compressImage(inputPath, outputPath, settings);
  }
  
  console.log('\n🎉 Image compression complete!');
  console.log('📁 Compressed images saved to: src/assets/optimized/');
  console.log('\n💡 Next steps:');
  console.log('1. Review the compressed images');
  console.log('2. Replace original images with compressed versions');
  console.log('3. Update import paths in your components');
}

// Run compression
compressAllImages().catch(console.error);