# ⌨️ KeyClack

> **Authentic Mechanical Keyboard Acoustics for Every Keystroke.**  
> High performance, feather-light, and ultra low-latency audio companion for typists, developers, and writers.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-v3.3.0-indigo.svg)](https://github.com/aslamrosul/keyclack/releases)
[![Platform: Linux | Windows | macOS](https://img.shields.io/badge/Platform-Linux%20%7C%20Windows%20%7C%20macOS-emerald.svg)](#platform-support)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-violet.svg)](https://aslamrosul.github.io/keyclack/)

---

## 🌐 Live Web Experience & Sound Library

Experience **KeyClack** directly in your browser with real-time Web Audio switch playback:

👉 **[https://aslamrosul.github.io/keyclack/](https://aslamrosul.github.io/keyclack/)**

---

## ✨ Features

- **⚡ Sub-10ms Latency:** Local audio buffer triggering ensures instant auditory feedback matching your exact finger stroke.
- **🎧 Curated Switch Profiles:**
  - **Cherry MX Blue (Clicky):** Crisp tactile click with a solid, dampened mechanical PBT spacebar (*zero hollow rattle*).
  - **EG Oreo:** Deep tactile thock with creamy bottom-out acoustics.
  - **Topre Purple Hybrid:** Distinct electrostatic capacitive silence and satisfying thock.
  - **Cherry MX Black / Red:** Smooth heavy and lightweight linear actuation profiles.
- **🔒 100% Offline-First & Privacy Resilient:** No keylogging, no keystroke storage, no remote network telemetry. Key codes are read in-memory solely to trigger audio slices and are discarded immediately.
- **🎨 Custom Theming Engine:** Custom color schemes, transparency levels, and background styling.
- **🖥️ Cross-Platform Native Support:**
  - **Linux:** Native `evdev` global event capture on X11 & Wayland (AppImage / binary).
  - **Windows:** 64-bit installer with system tray background minimization.
  - **macOS:** Apple Silicon & Intel Universal binary with macOS Accessibility hooks.
- **🌐 In-Browser Simulator:** Type freely on the web version to test any switch before downloading.

---

## 🚀 Quick Start (Web & API Server)

Clone the repository and run the local Express server:

```bash
# Clone repository
git clone https://github.com/aslamrosul/keyclack.git
cd keyclack

# Install dependencies
npm install

# Start development server
npm start
# -> Running at http://localhost:3333
```

### Static Build for GitHub Pages
```bash
npm run build:gh-pages
```

---

## 💻 Running Desktop App on Linux

The desktop application includes real-time global keyboard input listening, acoustic inverse volume locking, and automatic community soundpack management:

```bash
# Launch unified KeyClack desktop app
keyclack

# Open Soundpack Hub & Volume Lock settings directly
keyclack-manager

# Manage real-time auto-volume lock daemon
keyclack-autovol status
keyclack-autovol set 50
```

### 🔊 Inverse Auto-Volume Calibration
Locks the keyboard click sound level constant regardless of laptop master volume adjustments. When you turn master volume up (e.g. for a quiet video), KeyClack instantly scales down its playback volume so typing acoustics never burst your eardrums.

### 🌐 Integrated Soundpack Downloader & Creator
- **Download**: 1-click installation of community packs (Keychron Q3, Apex Pro, ASMR Programming, Holy Panda, etc.).
- **Create**: Turn any audio file (`.wav`, `.mp3`, `.ogg`, `.flac`) into a full 75-key switch soundpack with natural random pitch variation.

---

## 📡 REST API Endpoints

The KeyClack server exposes a clean REST API:

- `GET /api/sound-packs` — List all curated switch sound packs with search and filter parameters.
- `GET /api/themes` — Retrieve built-in and community themes.
- `GET /api/releases/latest` — Native auto-updater update feed.
- `GET /api/ambient` — Ambient background mood audio tracks.
- `POST /api/telemetry` — Safe local telemetry dummy receiver (returns HTTP 200).

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute for personal and commercial projects.

Crafted with ❤️ by **[aslamrosul](https://github.com/aslamrosul)**.
