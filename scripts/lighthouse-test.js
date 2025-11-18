#!/usr/bin/env node

/**
 * Lighthouse Performance Testing Script
 *
 * This script runs Lighthouse audits on specified pages to measure:
 * - Performance metrics (FCP, LCP, TBT, CLS, TTI)
 * - SEO
 * - Accessibility
 * - Best Practices
 * - PWA
 *
 * Usage:
 *   npm install lighthouse --save-dev
 *   node scripts/lighthouse-test.js
 *
 * Or add to package.json:
 *   "scripts": {
 *     "test:performance": "node scripts/lighthouse-test.js"
 *   }
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: process.env.LIGHTHOUSE_URL || 'http://localhost:3000',
  outputDir: './lighthouse-reports',
  pages: [
    { path: '/', name: 'homepage' },
    { path: '/about', name: 'about' },
    { path: '/solar-calculator', name: 'calculator' },
    { path: '/pricing', name: 'pricing' },
  ],
  thresholds: {
    performance: 90,
    accessibility: 90,
    'best-practices': 90,
    seo: 90,
  },
  chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
};

// Lighthouse options
const lighthouseOptions = {
  logLevel: 'info',
  output: ['json', 'html'],
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  formFactor: 'desktop',
  throttling: {
    rttMs: 40,
    throughputKbps: 10 * 1024,
    cpuSlowdownMultiplier: 1,
  },
  screenEmulation: {
    mobile: false,
    width: 1350,
    height: 940,
    deviceScaleFactor: 1,
    disabled: false,
  },
};

// Ensure output directory exists
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(\`✓ Created directory: \${dir}\`);
  }
}

// Launch Chrome and run Lighthouse
async function runLighthouse(url, name) {
  console.log(\`\\n🔍 Testing: \${url}\`);

  let chrome;
  try {
    chrome = await chromeLauncher.launch({ chromeFlags: CONFIG.chromeFlags });
    const options = {
      ...lighthouseOptions,
      port: chrome.port,
    };

    const runnerResult = await lighthouse(url, options);

    // Save reports
    const timestamp = new Date().toISOString().split('T')[0];
    const reportName = \`\${name}_\${timestamp}\`;

    // Save HTML report
    const htmlPath = path.join(CONFIG.outputDir, \`\${reportName}.html\`);
    fs.writeFileSync(htmlPath, runnerResult.report[1]);
    console.log(\`  ✓ HTML report saved: \${htmlPath}\`);

    // Save JSON report
    const jsonPath = path.join(CONFIG.outputDir, \`\${reportName}.json\`);
    fs.writeFileSync(jsonPath, runnerResult.report[0]);
    console.log(\`  ✓ JSON report saved: \${jsonPath}\`);

    // Extract scores
    const { categories } = runnerResult.lhr;
    const scores = {
      performance: categories.performance.score * 100,
      accessibility: categories.accessibility.score * 100,
      bestPractices: categories['best-practices'].score * 100,
      seo: categories.seo.score * 100,
    };

    // Extract Core Web Vitals
    const audits = runnerResult.lhr.audits;
    const metrics = {
      fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
      tbt: audits['total-blocking-time']?.displayValue || 'N/A',
      cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
      tti: audits['interactive']?.displayValue || 'N/A',
    };

    await chrome.kill();
    return { scores, metrics };
  } catch (error) {
    if (chrome) {
      await chrome.kill();
    }
    throw error;
  }
}

// Display results
function displayResults(name, scores, metrics) {
  console.log(\`\\n📊 Results for \${name}:\`);
  console.log('  Scores:');
  console.log(\`    Performance:     \${scores.performance.toFixed(0)} \${getScoreEmoji(scores.performance, CONFIG.thresholds.performance)}\`);
  console.log(\`    Accessibility:   \${scores.accessibility.toFixed(0)} \${getScoreEmoji(scores.accessibility, CONFIG.thresholds.accessibility)}\`);
  console.log(\`    Best Practices:  \${scores.bestPractices.toFixed(0)} \${getScoreEmoji(scores.bestPractices, CONFIG.thresholds['best-practices'])}\`);
  console.log(\`    SEO:             \${scores.seo.toFixed(0)} \${getScoreEmoji(scores.seo, CONFIG.thresholds.seo)}\`);
  console.log('\\n  Core Web Vitals:');
  console.log(\`    First Contentful Paint:  \${metrics.fcp}\`);
  console.log(\`    Largest Contentful Paint: \${metrics.lcp}\`);
  console.log(\`    Total Blocking Time:      \${metrics.tbt}\`);
  console.log(\`    Cumulative Layout Shift:  \${metrics.cls}\`);
  console.log(\`    Time to Interactive:      \${metrics.tti}\`);
}

// Get emoji based on score
function getScoreEmoji(score, threshold) {
  if (score >= threshold) return '✅';
  if (score >= threshold - 10) return '⚠️';
  return '❌';
}

// Check if all scores meet thresholds
function checkThresholds(results) {
  const failures = [];

  results.forEach(({ name, scores }) => {
    Object.entries(CONFIG.thresholds).forEach(([category, threshold]) => {
      const categoryKey = category === 'best-practices' ? 'bestPractices' : category;
      if (scores[categoryKey] < threshold) {
        failures.push({
          name,
          category,
          score: scores[categoryKey],
          threshold,
        });
      }
    });
  });

  return failures;
}

// Main function
async function main() {
  console.log('🚀 Lighthouse Performance Testing Starting...\\n');
  console.log(\`Base URL: \${CONFIG.baseUrl}\`);
  console.log(\`Testing \${CONFIG.pages.length} pages\`);
  console.log(\`Output directory: \${CONFIG.outputDir}\\n\`);

  // Check if Lighthouse is installed
  try {
    require.resolve('lighthouse');
    require.resolve('chrome-launcher');
  } catch (e) {
    console.error('❌ Error: lighthouse or chrome-launcher is not installed.');
    console.error('   Install with: npm install lighthouse chrome-launcher --save-dev');
    process.exit(1);
  }

  // Create output directory
  ensureDirectoryExists(CONFIG.outputDir);

  // Run Lighthouse for each page
  const results = [];
  const startTime = Date.now();

  for (const page of CONFIG.pages) {
    try {
      const url = \`\${CONFIG.baseUrl}\${page.path}\`;
      const { scores, metrics } = await runLighthouse(url, page.name);
      displayResults(page.name, scores, metrics);
      results.push({ name: page.name, scores, metrics });
    } catch (error) {
      console.error(\`\\n❌ Error testing \${page.name}:\`, error.message);
      console.error('   Make sure the development server is running on', CONFIG.baseUrl);
    }
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  // Check thresholds
  console.log('\\n' + '='.repeat(60));
  const failures = checkThresholds(results);

  if (failures.length === 0) {
    console.log('\\n✅ All pages meet performance thresholds!');
  } else {
    console.log(\`\\n⚠️  \${failures.length} threshold(s) not met:\\n\`);
    failures.forEach(({ name, category, score, threshold }) => {
      console.log(\`   ❌ \${name} - \${category}: \${score.toFixed(0)} (threshold: \${threshold})\`);
    });
  }

  console.log(\`\\n✅ Testing complete in \${duration}s\`);
  console.log(\`   Reports saved to: \${CONFIG.outputDir}\`);
  console.log('\\n💡 Next steps:');
  console.log('   1. Review HTML reports for detailed recommendations');
  console.log('   2. Address any failing thresholds');
  console.log('   3. Re-run tests after making improvements');

  // Exit with error code if thresholds not met
  if (failures.length > 0) {
    process.exit(1);
  }
}

// Run the script
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
