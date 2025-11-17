#!/usr/bin/env node

/**
 * Image Optimization Script for DIY Solar Consultants
 *
 * This script optimizes images for web performance by:
 * - Converting to WebP and AVIF formats
 * - Creating multiple responsive sizes
 * - Compressing images without significant quality loss
 * - Generating blur placeholders for Next.js Image
 *
 * Usage:
 *   npm run optimize-images
 *   or
 *   node scripts/optimize-images.js
 *
 * Requirements:
 *   npm install --save-dev sharp
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: './public/images',
  outputDir: './public/images/optimized',

  // Responsive image widths
  sizes: [640, 768, 1024, 1280, 1920],

  // Quality settings
  quality: {
    webp: 85,
    avif: 80,
    jpeg: 85,
    png: 90
  },

  // Blur placeholder settings
  blurSize: 10,
  blurQuality: 20,

  // File patterns to process
  patterns: /\.(jpg|jpeg|png)$/i,

  // Subdirectories to process
  subdirs: ['portfolio', 'video-thumbnails']
};

// Check if Sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: Sharp is not installed.');
  console.error('Please run: npm install --save-dev sharp');
  process.exit(1);
}

/**
 * Create output directory if it doesn't exist
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✓ Created directory: ${dir}`);
  }
}

/**
 * Generate blur placeholder data URL
 */
async function generateBlurPlaceholder(inputPath) {
  try {
    const buffer = await sharp(inputPath)
      .resize(CONFIG.blurSize, CONFIG.blurSize, { fit: 'inside' })
      .webp({ quality: CONFIG.blurQuality })
      .toBuffer();

    return `data:image/webp;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.error(`   ⚠️  Could not generate blur placeholder: ${error.message}`);
    return null;
  }
}

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath, outputDir, filename) {
  const baseName = path.basename(filename, path.extname(filename));
  const ext = path.extname(filename).toLowerCase();

  console.log(`\n📸 Processing: ${filename}`);

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original: ${metadata.width}x${metadata.height}, ${(metadata.size / 1024).toFixed(2)}KB`);

    // Generate blur placeholder
    const blurDataURL = await generateBlurPlaceholder(inputPath);
    if (blurDataURL) {
      console.log(`   ✓ Generated blur placeholder`);
    }

    // Create optimized WebP version (original size)
    await sharp(inputPath)
      .webp({ quality: CONFIG.quality.webp })
      .toFile(path.join(outputDir, `${baseName}.webp`));
    console.log(`   ✓ Created WebP (original size)`);

    // Create optimized AVIF version (original size)
    await sharp(inputPath)
      .avif({ quality: CONFIG.quality.avif })
      .toFile(path.join(outputDir, `${baseName}.avif`));
    console.log(`   ✓ Created AVIF (original size)`);

    // Create optimized original format
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: CONFIG.quality.jpeg, progressive: true })
        .toFile(path.join(outputDir, `${baseName}.jpg`));
      console.log(`   ✓ Created optimized JPEG`);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: CONFIG.quality.png, compressionLevel: 9 })
        .toFile(path.join(outputDir, `${baseName}.png`));
      console.log(`   ✓ Created optimized PNG`);
    }

    // Create responsive sizes for larger images
    if (metadata.width > 640) {
      console.log(`   Creating responsive sizes:`);

      for (const size of CONFIG.sizes) {
        // Only create sizes smaller than original
        if (size < metadata.width) {
          // WebP version
          await sharp(inputPath)
            .resize(size, null, { withoutEnlargement: true })
            .webp({ quality: CONFIG.quality.webp })
            .toFile(path.join(outputDir, `${baseName}-${size}w.webp`));

          // AVIF version
          await sharp(inputPath)
            .resize(size, null, { withoutEnlargement: true })
            .avif({ quality: CONFIG.quality.avif })
            .toFile(path.join(outputDir, `${baseName}-${size}w.avif`));

          console.log(`      ✓ ${size}w (WebP & AVIF)`);
        }
      }
    }

    // Get final file sizes
    const webpStats = fs.statSync(path.join(outputDir, `${baseName}.webp`));
    const reduction = ((1 - (webpStats.size / metadata.size)) * 100).toFixed(1);
    console.log(`   📊 WebP size: ${(webpStats.size / 1024).toFixed(2)}KB (${reduction}% reduction)`);

    return {
      filename,
      originalSize: metadata.size,
      optimizedSize: webpStats.size,
      reduction: parseFloat(reduction),
      blurDataURL
    };

  } catch (error) {
    console.error(`   ❌ Error processing ${filename}: ${error.message}`);
    return null;
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(inputDir, outputDir) {
  ensureDir(outputDir);

  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => CONFIG.patterns.test(file));

  if (imageFiles.length === 0) {
    console.log(`No images found in ${inputDir}`);
    return [];
  }

  console.log(`\n📁 Processing ${imageFiles.length} images in ${inputDir}`);

  const results = [];

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const result = await optimizeImage(inputPath, outputDir, file);
    if (result) {
      results.push(result);
    }
  }

  return results;
}

/**
 * Generate summary report
 */
function generateReport(allResults) {
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));

  const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = allResults.reduce((sum, r) => sum + r.optimizedSize, 0);
  const avgReduction = allResults.reduce((sum, r) => sum + r.reduction, 0) / allResults.length;

  console.log(`\nTotal images processed: ${allResults.length}`);
  console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Average reduction: ${avgReduction.toFixed(1)}%`);

  console.log('\n' + '='.repeat(60));
  console.log('\n✅ Optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Review optimized images in ./public/images/optimized/');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update image paths in your code if needed');
  console.log('4. Test image loading on your website\n');
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  DIY Solar Consultants - Image Optimization Script');
  console.log('='.repeat(60));

  const allResults = [];

  // Check if main images directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.log(`\n⚠️  Images directory not found: ${CONFIG.inputDir}`);
    console.log('Creating directory structure...\n');
    ensureDir(CONFIG.inputDir);

    // Create subdirectories
    CONFIG.subdirs.forEach(subdir => {
      ensureDir(path.join(CONFIG.inputDir, subdir));
    });

    console.log('\n✓ Directory structure created!');
    console.log('\nPlease add images to the following directories:');
    console.log(`  - ${CONFIG.inputDir}/`);
    CONFIG.subdirs.forEach(subdir => {
      console.log(`  - ${CONFIG.inputDir}/${subdir}/`);
    });
    console.log('\nThen run this script again.\n');
    return;
  }

  // Process main directory
  const mainResults = await processDirectory(CONFIG.inputDir, CONFIG.outputDir);
  allResults.push(...mainResults);

  // Process subdirectories
  for (const subdir of CONFIG.subdirs) {
    const inputSubdir = path.join(CONFIG.inputDir, subdir);
    const outputSubdir = path.join(CONFIG.outputDir, subdir);

    if (fs.existsSync(inputSubdir)) {
      const subdirResults = await processDirectory(inputSubdir, outputSubdir);
      allResults.push(...subdirResults);
    }
  }

  // Generate report
  if (allResults.length > 0) {
    generateReport(allResults);
  } else {
    console.log('\n⚠️  No images found to process.');
    console.log(`\nPlease add images to: ${CONFIG.inputDir}/`);
    console.log('Supported formats: JPG, JPEG, PNG\n');
  }
}

// Run the script
main().catch(error => {
  console.error('\n❌ Script failed:', error);
  process.exit(1);
});
