const fs = require('fs');
const path = require('path');
const renderLayout = require('./views/layout');
const renderHome = require('./views/home');
const renderDownload = require('./views/download');
const renderSoundpacks = require('./views/soundpacks');
const renderThemes = require('./views/themes');
const { renderGuidesList, renderGuideDetail } = require('./views/guides');
const { renderBlogList, renderBlogPost } = require('./views/blog');
const { renderLegal } = require('./views/auth');
const soundpacks = require('./data/soundpacks');
const themes = require('./data/themes');
const { guides, blogPosts } = require('./data/content');

const REPO_NAME = 'mechvibes';
const BASE_PATH = '/' + REPO_NAME;

function buildPages(isGhPages = false) {
  const prefix = isGhPages ? BASE_PATH : '';

  const pages = [
    { dir: '.', html: renderHome(), title: 'Mechvibes - Personalize your typing experience with custom sounds', nav: 'home' },
    { dir: 'download', html: renderDownload(), title: 'Download Mechvibes for Windows, Mac & Linux', nav: 'download' },
    { dir: 'sound-packs', html: renderSoundpacks(soundpacks), title: 'Sound Packs Library - Mechvibes', nav: 'sound-packs' },
    { dir: 'themes', html: renderThemes(themes), title: 'Themes Gallery & Customizer - Mechvibes', nav: 'themes' },
    { dir: 'guides', html: renderGuidesList(guides), title: 'Guides & Documentation - Mechvibes', nav: 'guides' },
    { dir: 'blog', html: renderBlogList(blogPosts), title: 'Mechvibes Blog & News', nav: 'blog' },
    { dir: 'privacy', html: renderLegal({ title: 'Privacy Policy', content: '<p>Mechvibes respects your privacy with an offline-first architecture.</p>' }), title: 'Privacy Policy - Mechvibes', nav: '' },
    { dir: 'terms', html: renderLegal({ title: 'Terms of Service', content: '<p>Mechvibes is free software licensed under the MIT License.</p>' }), title: 'Terms of Service - Mechvibes', nav: '' }
  ];

  // Subguides
  for (const g of guides) {
    pages.push({
      dir: `guides/${g.slug}`,
      html: renderGuideDetail(g),
      title: `${g.title} - Mechvibes Guides`,
      nav: 'guides'
    });
  }

  // Blog posts
  for (const p of blogPosts) {
    pages.push({
      dir: `blog/${p.slug}`,
      html: renderBlogPost(p),
      title: `${p.title} - Mechvibes Blog`,
      nav: 'blog'
    });
  }

  const outBase = path.join(__dirname, 'public');

  for (const p of pages) {
    const targetDir = path.join(outBase, p.dir);
    fs.mkdirSync(targetDir, { recursive: true });

    let fullHtml = renderLayout({
      title: p.title,
      activeNav: p.nav,
      body: p.html
    });

    if (isGhPages) {
      // Fix links and asset paths for GitHub Pages subpath /mechvibes/
      fullHtml = fullHtml.replace(/href="\/(download|sound-packs|themes|guides|blog|privacy|terms|login|favicon|logo)/g, `href="${prefix}/$1`);
      fullHtml = fullHtml.replace(/href="\/(css)/g, `href="${prefix}/$1`);
      fullHtml = fullHtml.replace(/src="\/(css|media|screens|logo|icon|apple-icon|soundpacks|mood|blog)/g, `src="${prefix}/$1`);
      fullHtml = fullHtml.replace(/'\/(soundpacks|screens|mood)\//g, `'${prefix}/$1/`);
    }

    fs.writeFileSync(path.join(targetDir, 'index.html'), fullHtml);
  }

  // Create .nojekyll in public
  fs.writeFileSync(path.join(outBase, '.nojekyll'), '');
  // Create 404.html for GitHub Pages SPA routing fallback
  const notFoundHtml = renderLayout({
    title: 'Page Not Found - Mechvibes',
    body: `<div class="py-28 text-center space-y-4 max-w-md mx-auto">
      <h1 class="text-5xl font-black text-primary">404</h1>
      <h2 class="text-2xl font-bold">Page Not Found</h2>
      <p class="text-sm opacity-70">The page you were looking for doesn't exist.</p>
      <a href="${prefix}/" class="btn btn-primary rounded-xl">Return to Home</a>
    </div>`
  });
  fs.writeFileSync(path.join(outBase, '404.html'), notFoundHtml);

  console.log(`✅ Built ${pages.length} pages (isGhPages: ${isGhPages}) into public/`);
}

module.exports = buildPages;

if (require.main === module) {
  const isGh = process.argv.includes('--gh-pages');
  buildPages(isGh);
}
