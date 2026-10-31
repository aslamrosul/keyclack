const guides = [
  {
    slug: 'getting-started',
    title: 'Getting Started with KeyClack',
    category: 'Installation & Setup',
    readTime: '3 min read',
    description: 'Learn how to install KeyClack, configure your audio devices, and start typing with authentic mechanical switch acoustics.',
    content: `
      <h2>1. Introduction</h2>
      <p>KeyClack is a high-performance keyboard and switch sound simulator. Whether you miss the tactile click of vintage IBM Model M keyboards or love modern lubed tactile thocks, KeyClack delivers real-time audio with near-zero latency.</p>
      
      <h2>2. Platform Installation</h2>
      <h3>Linux</h3>
      <p>On Linux, KeyClack uses <code>evdev</code> for global low-level keystroke capture. Ensure your user belongs to the <code>input</code> group:</p>
      <pre><code>sudo usermod -a -G input $USER</code></pre>
      <p>Then mark the AppImage executable with <code>chmod +x keyclack-*.AppImage</code> and run it.</p>
      <h3>Windows</h3>
      <p>Download the <code>.exe</code> installer from the Download page. Run the installer and grant accessibility permissions if prompted.</p>
      <h3>macOS</h3>
      <p>Open the <code>.dmg</code> disk image and drag KeyClack to your Applications folder. In System Settings &gt; Privacy & Security, grant <strong>Input Monitoring</strong> permissions.</p>

      <h2>3. Choosing Your First Sound Pack</h2>
      <p>On the main screen, click the sound pack selector dropdown. You can choose between built-in classics like Cherry MX Black, EG Oreo, Topre Purple Hybrid, and clicky Blue switches.</p>
    `
  },
  {
    slug: 'sound-packs',
    title: 'Managing and Installing Sound Packs',
    category: 'Customization',
    readTime: '4 min read',
    description: 'How to download community sound packs, add custom audio files, and structure config.json.',
    content: `
      <h2>1. Manual Folder Installation</h2>
      <p>You can drop custom sound pack folders directly into your user data directory:</p>
      <ul>
        <li><strong>Linux:</strong> <code>~/.local/share/mechvibes/soundpacks/custom/</code> (or <code>~/.local/share/keyclack/soundpacks/custom/</code>)</li>
        <li><strong>Windows:</strong> <code>%APPDATA%\\KeyClack\\soundpacks\\custom\\</code></li>
        <li><strong>macOS:</strong> <code>~/Library/Application Support/KeyClack/soundpacks/custom/</code></li>
      </ul>

      <h2>2. Sound Pack Directory Structure</h2>
      <pre><code>my-custom-pack/
├── config.json
├── sound.ogg
└── icon.jpg</code></pre>
    `
  },
  {
    slug: 'themes',
    title: 'Customizing Themes and Interface',
    category: 'Theming',
    readTime: '3 min read',
    description: 'Personalize colors, background wallpapers, opacity, and window style.',
    content: `
      <h2>1. The Theme Engine</h2>
      <p>KeyClack features a dynamic styling system that lets you choose preset themes or craft your own color palette with custom hex colors.</p>
      <h2>2. Sharing Themes</h2>
      <p>Click "Export Theme" to generate a <code>.kctheme</code> JSON file that can be shared with friends and the community.</p>
    `
  },
  {
    slug: 'advanced',
    title: 'Low Latency Audio & Performance Tuning',
    category: 'Performance',
    readTime: '4 min read',
    description: 'Optimize audio buffer sizes, sample rates, and device prioritization for zero perceptual delay.',
    content: `
      <h2>1. Buffer Sizing</h2>
      <p>By default, KeyClack uses native low-latency device constraints (typically 128 to 256 samples buffer).</p>
      <h2>2. Sample Rate Matching</h2>
      <p>For the best latency, match your operating system sound output sample rate (48000 Hz or 44100 Hz) to the sound pack's native frequency.</p>
    `
  }
];

const blogPosts = [
  {
    slug: 'is-mechvibes-safe',
    title: 'Is KeyClack Safe to Use? A Technical Deep-Dive',
    date: 'Oct 28, 2026',
    author: 'KeyClack Core Team',
    category: 'Security',
    readTime: '5 min read',
    summary: 'Everything you need to know about how KeyClack captures keystrokes without storing or transmitting personal data.',
    image: '/blog/klack-alternative.webp',
    content: `
      <h2>Open Source and Transparent</h2>
      <p>One of the most frequent questions from new users is whether KeyClack is a keylogger. The short answer is <strong>absolutely not</strong>.</p>
      <p>KeyClack is 100% open source under the MIT License. The code is publicly auditable on GitHub, and community contributors regularly review pull requests.</p>
      <h2>How Keystroke Capture Works</h2>
      <p>To play sounds in real time while you type in other apps (like Chrome, Word, or games), KeyClack registers a low-level global OS hook (evdev on Linux, LowLevelKeyboardProc on Windows, and CGEventTap on macOS).</p>
      <p>When an event arrives:</p>
      <ol>
        <li>The hook detects a physical key code (e.g. <code>VK_SPACE</code>).</li>
        <li>It sends a message to the internal audio player thread to trigger the corresponding audio slice.</li>
        <li>The event is immediately discarded. No text, passwords, or keystroke logs are written to disk or sent anywhere.</li>
      </ol>
    `
  },
  {
    slug: 'mechvibes-no-sound',
    title: 'KeyClack No Sound? Here is How to Fix It',
    date: 'Oct 24, 2026',
    author: 'KeyClack Support',
    category: 'Troubleshooting',
    readTime: '4 min read',
    summary: 'Common reasons why keystroke audio stops playing and how to resolve device conflicts quickly.',
    image: '/screens/ss2.png',
    content: `
      <h2>1. Check Volume Sliders</h2>
      <p>Ensure that both the in-app volume slider (located in the bottom dock) and your system master volume are turned up.</p>
      <h2>2. Audio Output Device Selection</h2>
      <p>Open Settings in KeyClack and verify the selected Audio Output Device. If set to an inactive Bluetooth headphone or unplugged monitor, switch to Default or your active speakers.</p>
    `
  },
  {
    slug: 'mechvibes-not-working-linux',
    title: 'Running KeyClack on Linux: Evdev and Wayland Guide',
    date: 'Oct 19, 2026',
    author: 'Linux Team',
    category: 'Linux',
    readTime: '4 min read',
    summary: 'Permissions setup and evdev configuration for Ubuntu, Fedora, Arch, and Debian.',
    image: '/screens/ss3.png',
    content: `
      <h2>The Input Group Requirement</h2>
      <p>Modern Linux desktop environments running Wayland restrict background apps from reading key events for security. KeyClack uses <code>/dev/input/event*</code> directly through <code>evdev</code>.</p>
      <p>Add your user to the input group:</p>
      <pre><code>sudo usermod -a -G input $USER</code></pre>
      <p>Log out and log back in for changes to take effect.</p>
    `
  }
];

module.exports = { guides, blogPosts };
