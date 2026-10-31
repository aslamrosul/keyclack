const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const soundpacks = require('./data/soundpacks');
const themes = require('./data/themes');
const { guides, blogPosts } = require('./data/content');

const renderLayout = require('./views/layout');
const renderHome = require('./views/home');
const renderDownload = require('./views/download');
const renderSoundpacks = require('./views/soundpacks');
const renderSoundpackDetail = require('./views/soundpack-detail');
const renderThemes = require('./views/themes');
const { renderGuidesList, renderGuideDetail } = require('./views/guides');
const { renderBlogList, renderBlogPost } = require('./views/blog');
const { renderLegal, renderAuth } = require('./views/auth');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// REST API ENDPOINTS
// ==========================================

// GET /api/sound-packs - Filter and search soundpacks
app.get('/api/sound-packs', (req, res) => {
  const { q, category, tag } = req.query;
  let results = [...soundpacks];

  if (category && category !== 'all') {
    results = results.filter(sp => sp.category.toLowerCase() === category.toLowerCase());
  }
  if (tag && tag !== 'all') {
    results = results.filter(sp => (sp.tags || []).some(t => t.toLowerCase() === tag.toLowerCase()));
  }
  if (q) {
    const term = q.toLowerCase();
    results = results.filter(sp => 
      sp.title.toLowerCase().includes(term) ||
      sp.author.toLowerCase().includes(term) ||
      sp.description.toLowerCase().includes(term)
    );
  }

  res.json({
    success: true,
    count: results.length,
    data: results
  });
});

// GET /api/sound-packs/:slug - Single soundpack detail
app.get('/api/sound-packs/:slug', (req, res) => {
  const sp = soundpacks.find(s => s.slug === req.params.slug || s.id === req.params.slug);
  if (!sp) {
    return res.status(404).json({ success: false, error: 'Sound pack not found' });
  }
  res.json({ success: true, data: sp });
});

// GET /api/themes - Preset themes
app.get('/api/themes', (req, res) => {
  res.json({ success: true, count: themes.length, data: themes });
});

// POST /api/themes - Create custom theme
app.post('/api/themes', (req, res) => {
  const { name, colors, author } = req.body;
  if (!name || !colors) {
    return res.status(400).json({ success: false, error: 'Name and colors required' });
  }
  const newTheme = {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    author: author || 'Community',
    description: 'Custom community created theme',
    downloads: '1',
    colors
  };
  themes.push(newTheme);
  res.status(201).json({ success: true, data: newTheme });
});

// GET /api/releases/latest - Official update checker API used by desktop app
app.get('/api/releases/latest', (req, res) => {
  res.json({
    version: '3.3.0',
    tag_name: 'v3.3.0',
    name: 'Mechvibes v3.3.0',
    published_at: '2026-10-31T04:42:05Z',
    body: 'Mechvibes 3.3.0 brings full Linux evdev support, lower audio latency via Symphonia, new Topre and Oreo sound packs, and live theme customization.',
    assets: [
      {
        name: 'mechvibes-3.3.0-x86_64.AppImage',
        browser_download_url: 'https://github.com/hainguyents13/mechvibes/releases/download/v3.3.0/mechvibes-3.3.0-x86_64.AppImage',
        size: 52333048
      },
      {
        name: 'Mechvibes-3.3.0-Setup-x64.exe',
        browser_download_url: 'https://github.com/hainguyents13/mechvibes/releases/download/v3.3.0/Mechvibes-3.3.0-Setup-x64.exe',
        size: 23150200
      },
      {
        name: 'mechvibes-3.3.0-macos-arm64.dmg',
        browser_download_url: 'https://github.com/hainguyents13/mechvibes/releases/download/v3.3.0/mechvibes-3.3.0-macos-arm64.dmg',
        size: 34500120
      }
    ]
  });
});

// POST /api/telemetry - Telemetry receiver
app.post('/api/telemetry', (req, res) => {
  // Telemetry dummy endpoint matching Mechvibes app telemetry
  res.status(200).json({ status: 'ok', received: true });
});

// GET /api/ambient - Ambient mood audio files
app.get('/api/ambient', (req, res) => {
  const sounds = [
    { id: 'forest', name: 'Pine Forest Birds', file: '/mood/forest.mp3' },
    { id: 'rain', name: 'Gentle Rain', file: '/mood/rain.mp3' },
    { id: 'thunderstorm', name: 'Thunderstorm', file: '/mood/thunderstorm.mp3' },
    { id: 'fire', name: 'Crackling Campfire', file: '/mood/fire.mp3' },
    { id: 'stream', name: 'Mountain Stream', file: '/mood/stream.mp3' },
    { id: 'river', name: 'Flowing River', file: '/mood/river.mp3' },
    { id: 'ocean', name: 'Ocean Waves', file: '/mood/ocean.mp3' },
    { id: 'wind', name: 'Breezy Wind', file: '/mood/wind.mp3' },
    { id: 'cricket', name: 'Night Crickets', file: '/mood/cricket.mp3' },
    { id: 'chatter', name: 'Cozy Coffee Shop', file: '/mood/chatter.mp3' }
  ];
  res.json({ success: true, count: sounds.length, data: sounds });
});

// GET /api/health - Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', version: '3.3.0', timestamp: new Date() });
});

// ==========================================
// FRONTEND PAGE ROUTES
// ==========================================

// Home Page
app.get('/', (req, res) => {
  res.send(renderLayout({
    title: 'Mechvibes - Personalize your typing experience with custom sounds',
    description: 'Make every keystroke unique with Mechvibes. Add any sound you want to your typing - mechanical keyboards, typewriters, custom effects. Free sound customization tool.',
    activeNav: 'home',
    body: renderHome()
  }));
});

// Download Page
app.get('/download', (req, res) => {
  res.send(renderLayout({
    title: 'Download Mechvibes for Windows, Mac & Linux',
    description: 'Download Mechvibes 3.3.0. Universal packages for 64-bit Windows, Apple Silicon macOS, and Linux AppImage/.deb.',
    activeNav: 'download',
    body: renderDownload()
  }));
});

// Sound Packs Library Page
app.get('/sound-packs', (req, res) => {
  const { q, category, tag } = req.query;
  let results = [...soundpacks];

  if (category && category !== 'all') {
    results = results.filter(sp => sp.category.toLowerCase() === category.toLowerCase());
  }
  if (tag && tag !== 'all') {
    results = results.filter(sp => (sp.tags || []).some(t => t.toLowerCase() === tag.toLowerCase()));
  }
  if (q) {
    const term = q.toLowerCase();
    results = results.filter(sp => 
      sp.title.toLowerCase().includes(term) ||
      sp.author.toLowerCase().includes(term) ||
      sp.description.toLowerCase().includes(term)
    );
  }

  res.send(renderLayout({
    title: 'Sound Packs Library - Mechvibes',
    description: 'Browse, preview, and download mechanical switch sound packs for Mechvibes.',
    activeNav: 'sound-packs',
    body: renderSoundpacks(results, req.query)
  }));
});

// Single Sound Pack Detail Page
app.get('/sound-packs/:slug', (req, res) => {
  const sp = soundpacks.find(s => s.slug === req.params.slug || s.id === req.params.slug);
  if (!sp) {
    return res.status(404).send(renderLayout({
      title: 'Sound Pack Not Found - Mechvibes',
      body: '<div class="py-24 text-center"><h1 class="text-3xl font-bold">Sound Pack Not Found</h1><a href="/sound-packs" class="btn btn-primary mt-4">Browse Library</a></div>'
    }));
  }
  res.send(renderLayout({
    title: `${sp.title} - Mechvibes Sound Packs`,
    description: sp.description,
    activeNav: 'sound-packs',
    body: renderSoundpackDetail(sp)
  }));
});

// Themes Page
app.get('/themes', (req, res) => {
  res.send(renderLayout({
    title: 'Themes Gallery & Customizer - Mechvibes',
    description: 'Browse and create custom themes for Mechvibes. Export .mvtheme files with real-time UI previews.',
    activeNav: 'themes',
    body: renderThemes(themes)
  }));
});

// Guides Index
app.get('/guides', (req, res) => {
  res.send(renderLayout({
    title: 'Guides & Documentation - Mechvibes',
    description: 'Learn how to install, set up, and get the most out of Mechvibes keyboard sound simulator.',
    activeNav: 'guides',
    body: renderGuidesList(guides)
  }));
});

// Guides Subpage
app.get('/guides/:slug', (req, res) => {
  const guide = guides.find(g => g.slug === req.params.slug);
  if (!guide) {
    return res.status(404).redirect('/guides');
  }
  res.send(renderLayout({
    title: `${guide.title} - Mechvibes Guides`,
    description: guide.description,
    activeNav: 'guides',
    body: renderGuideDetail(guide)
  }));
});

// Blog Index
app.get('/blog', (req, res) => {
  res.send(renderLayout({
    title: 'Blog - Mechvibes',
    description: 'Articles, updates, troubleshooting guides, and tutorials for Mechvibes.',
    activeNav: 'blog',
    body: renderBlogList(blogPosts)
  }));
});

// Blog Subpage
app.get('/blog/:slug', (req, res) => {
  const post = blogPosts.find(p => p.slug === req.params.slug);
  if (!post) {
    return res.status(404).redirect('/blog');
  }
  res.send(renderLayout({
    title: `${post.title} - Mechvibes Blog`,
    description: post.summary,
    activeNav: 'blog',
    body: renderBlogPost(post)
  }));
});

// Auth Pages
app.get('/login', (req, res) => {
  res.send(renderLayout({
    title: 'Sign In - Mechvibes',
    body: renderAuth({ isLogin: true })
  }));
});

app.post('/login', (req, res) => {
  res.send(renderLayout({
    title: 'Signed In - Mechvibes',
    body: '<div class="py-24 text-center space-y-4"><h2 class="text-2xl font-bold">Welcome Back!</h2><p class="text-sm opacity-70">Successfully signed in to Mechvibes.</p><a href="/" class="btn btn-primary mt-4">Go Home</a></div>'
  }));
});

app.get('/register', (req, res) => {
  res.send(renderLayout({
    title: 'Register - Mechvibes',
    body: renderAuth({ isLogin: false })
  }));
});

// Legal Pages
app.get('/privacy', (req, res) => {
  res.send(renderLayout({
    title: 'Privacy Policy - Mechvibes',
    body: renderLegal({
      title: 'Privacy Policy',
      date: 'October 31, 2026',
      content: `
        <p>Mechvibes respects your privacy. Mechvibes is designed with an anti-telemetry, offline-first architecture.</p>
        <h3>No Keystroke Logging</h3>
        <p>Mechvibes never collects, logs, stores, or transmits your keystrokes, clipboard content, passwords, or typed text. Audio triggers run completely in-memory on your local hardware.</p>
        <h3>Network Requests</h3>
        <p>The only network requests made by Mechvibes are:</p>
        <ul>
          <li>Checking for software updates via GitHub Releases API or <code>/api/releases/latest</code></li>
          <li>Downloading sound packs you explicitly request from the Sound Pack Library</li>
        </ul>
      `
    })
  }));
});

app.get('/terms', (req, res) => {
  res.send(renderLayout({
    title: 'Terms of Service - Mechvibes',
    body: renderLegal({
      title: 'Terms of Service',
      date: 'October 31, 2026',
      content: `
        <p>Mechvibes is free software licensed under the MIT License.</p>
        <p>You are free to use Mechvibes for personal, educational, and commercial purposes.</p>
      `
    })
  }));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Mechvibes Clone Web & API Server running at http://localhost:${PORT}`);
});
