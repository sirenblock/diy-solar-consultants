#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script optimizes images in the public/images directory by:
 * - Converting to modern formats (WebP, AVIF)
 * - Resizing to appropriate dimensions
 * - Compressing for optimal quality/size balance
 *
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/optimize-images.js
 *
 * Or add to package.json:
 *   "scripts": {
 *     "optimize:images": "node scripts/optimize-images.js"
 *   }
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: './public/images',
  outputDir: './public/images/optimized',
  maxWidth: 1920,
  quality: {
    webp: 80,
    avif: 75,
    jpeg: 85,
    png: 90,
  },
  formats: ['webp', 'avif'], // Generate these formats in addition to original
};

// Ensure output directory exists
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(\`✓ Created directory: \${dir}\`);
  }
}

// Get all image files from directory recursively
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Optimize a single image
async function optimizeImage(inputPath, outputDir) {
  const fileName = path.basename(inputPath);
  const fileNameWithoutExt = path.parse(fileName).name;
  const ext = path.parse(fileName).ext.toLowerCase();

  console.log(\`\\nOptimizing: \${fileName}\`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(\`  Original: \${metadata.width}x\${metadata.height}, \${(metadata.size / 1024).toFixed(2)}KB\`);

    // Resize if needed
    if (metadata.width > CONFIG.maxWidth) {
      image.resize(CONFIG.maxWidth, null, { withoutEnlargement: true });
    }

    // Generate WebP version
    if (CONFIG.formats.includes('webp')) {
      const webpPath = path.join(outputDir, \`\${fileNameWithoutExt}.webp\`);
      await image
        .clone()
        .webp({ quality: CONFIG.quality.webp })
        .toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      console.log(\`  ✓ WebP: \${(webpSize / 1024).toFixed(2)}KB\`);
    }

    // Generate AVIF version (better compression than WebP)
    if (CONFIG.formats.includes('avif')) {
      const avifPath = path.join(outputDir, \`\${fileNameWithoutExt}.avif\`);
      await image
        .clone()
        .avif({ quality: CONFIG.quality.avif })
        .toFile(avifPath);

      const avifSize = fs.statSync(avifPath).size;
      console.log(\`  ✓ AVIF: \${(avifSize / 1024).toFixed(2)}KB\`);
    }

    // Optimize original format
    let optimizedPath;
    if (ext === '.jpg' || ext === '.jpeg') {
      optimizedPath = path.join(outputDir, fileName);
      await image
        .clone()
        .jpeg({ quality: CONFIG.quality.jpeg, progressive: true })
        .toFile(optimizedPath);
    } else if (ext === '.png') {
      optimizedPath = path.join(outputDir, fileName);
      await image
        .clone()
        .png({ quality: CONFIG.quality.png, compressionLevel: 9 })
        .toFile(optimizedPath);
    }

    if (optimizedPath) {
      const optimizedSize = fs.statSync(optimizedPath).size;
      const savings = ((metadata.size - optimizedSize) / metadata.size * 100).toFixed(1);
      console.log(\`  ✓ Optimized \${ext.toUpperCase()}: \${(optimizedSize / 1024).toFixed(2)}KB (\${savings}% smaller)\`);
    }

  } catch (error) {
    console.error(\`  ✗ Error optimizing \${fileName}:\`, error.message);
  }
}

// Main function
async function main() {
  console.log('🚀 Image Optimization Script Starting...\\n');
  console.log(\`Input directory: \${CONFIG.inputDir}\`);
  console.log(\`Output directory: \${CONFIG.outputDir}\`);
  console.log(\`Max width: \${CONFIG.maxWidth}px\`);
  console.log(\`Generating formats: \${CONFIG.formats.join(', ')}\\n\`);

  // Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch (e) {
    console.error('❌ Error: sharp is not installed.');
    console.error('   Install it with: npm install sharp --save-dev');
    process.exit(1);
  }

  // Check if input directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(\`❌ Error: Input directory not found: \${CONFIG.inputDir}\`);
    process.exit(1);
  }

  // Create output directory
  ensureDirectoryExists(CONFIG.outputDir);

  // Get all image files
  const imageFiles = getImageFiles(CONFIG.inputDir);
  console.log(\`Found \${imageFiles.length} images to optimize\\n\`);

  if (imageFiles.length === 0) {
    console.log('No images found. Place images in public/images/ directory.');
    return;
  }

  // Optimize each image
  const startTime = Date.now();
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath, CONFIG.outputDir);
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(\`\\n✅ Optimization complete!\`);
  console.log(\`   Processed \${imageFiles.length} images in \${duration}s\`);
  console.log(\`   Optimized images saved to: \${CONFIG.outputDir}\`);
  console.log('\\n💡 Next steps:');
  console.log('   1. Review optimized images in the output directory');
  console.log('   2. Replace original images with optimized versions if satisfied');
  console.log('   3. Use Next.js Image component with appropriate formats');
}

// Run the script
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
