function renderDownload() {
  return `
  <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <!-- Header -->
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <div class="badge badge-primary badge-outline text-xs uppercase tracking-wider font-semibold">Latest Release v3.3.0</div>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-base-content">
          Download <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">KeyClack</span>
        </h1>
        <p class="text-base text-base-content/70">
          Get the standalone release for your operating system. Free, open source, and lightweight.
        </p>
      </div>

      <!-- OS Cards Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        
        <!-- Linux Card (Featured / Highlighted) -->
        <div class="bg-base-100 rounded-3xl border-2 border-primary/40 p-8 flex flex-col justify-between hover:border-primary hover:shadow-2xl transition-all duration-300 relative group order-first md:order-none">
          <div class="absolute -top-3 right-6 badge badge-primary text-[10px] font-bold">Recommended on Linux</div>
          <div class="space-y-6">
            <div class="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a4 4 0 0 0-4 4v5.38A5.99 5.99 0 0 0 5 17c0 2.21 3.13 4 7 4s7-1.79 7-4a5.99 5.99 0 0 0-3-5.62V6a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/></svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold">Linux</h3>
              <p class="text-xs text-base-content/60 mt-1">Ubuntu, Mint, Debian, Arch, Fedora</p>
            </div>
            <ul class="text-xs text-base-content/70 space-y-2">
              <li class="flex items-center gap-2">✓ Standalone universal AppImage</li>
              <li class="flex items-center gap-2">✓ Debian / Ubuntu .deb package</li>
              <li class="flex items-center gap-2">✓ Wayland & X11 evdev low latency</li>
            </ul>
          </div>

          <div class="space-y-3 pt-6 border-t border-base-300/80">
            <a href="https://github.com/aslamrosul/keyclack/releases" class="btn btn-primary w-full rounded-box gap-2 shadow-lg shadow-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download AppImage (x86_64)
            </a>
            <a href="https://github.com/aslamrosul/keyclack/releases" class="btn btn-ghost btn-sm w-full rounded-box text-xs">
              Download .deb package
            </a>
          </div>
        </div>

        <!-- Windows Card -->
        <div class="bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
          <div class="space-y-6">
            <div class="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold">Windows</h3>
              <p class="text-xs text-base-content/60 mt-1">Windows 10 / 11 (64-bit)</p>
            </div>
            <ul class="text-xs text-base-content/70 space-y-2">
              <li class="flex items-center gap-2">✓ Automatic setup installer</li>
              <li class="flex items-center gap-2">✓ System tray minimization</li>
              <li class="flex items-center gap-2">✓ Low-level keyboard hook</li>
            </ul>
          </div>

          <div class="space-y-3 pt-6 border-t border-base-300/80">
            <a href="https://github.com/aslamrosul/keyclack/releases" class="btn btn-neutral w-full rounded-box gap-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download Setup (.exe)
            </a>
            <div class="text-[10px] text-center text-base-content/40">File size: ~22 MB</div>
          </div>
        </div>

        <!-- macOS Card -->
        <div class="bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
          <div class="space-y-6">
            <div class="w-14 h-14 rounded-2xl bg-base-content/10 text-base-content flex items-center justify-center">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.87.94-2.96-.91.04-2.02.61-2.67 1.39-.58.68-1.09 1.79-.95 2.86 1.01.08 2.05-.51 2.68-1.29z"/></svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold">macOS</h3>
              <p class="text-xs text-base-content/60 mt-1">macOS 12.0+ Monterey or later</p>
            </div>
            <ul class="text-xs text-base-content/70 space-y-2">
              <li class="flex items-center gap-2">✓ Apple Silicon native (M1/M2/M3/M4)</li>
              <li class="flex items-center gap-2">✓ Menu bar companion integration</li>
              <li class="flex items-center gap-2">✓ Input monitoring security model</li>
            </ul>
          </div>

          <div class="space-y-3 pt-6 border-t border-base-300/80">
            <a href="https://github.com/aslamrosul/keyclack/releases" class="btn btn-neutral w-full rounded-box gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download .dmg (Apple Silicon)
            </a>
            <div class="text-[10px] text-center text-base-content/40">Requires Input Monitoring permission</div>
          </div>
        </div>

      </div>

      <!-- Verification Checksums Table -->
      <div class="bg-base-200/50 rounded-3xl border border-base-300 p-6 sm:p-8 space-y-4">
        <h3 class="text-lg font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Release Verification Checksums (SHA-256)
        </h3>
        
        <div class="overflow-x-auto">
          <table class="table table-xs font-mono w-full">
            <thead>
              <tr class="text-base-content/60">
                <th>Artifact</th>
                <th>SHA-256 Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-base-content">keyclack-3.3.0-x86_64.AppImage</td>
                <td class="text-base-content/70 select-all">ef655b05ac26feebfd3bc24ec7ccb30389cefc332152862c95e5b3ee28e83120</td>
              </tr>
              <tr>
                <td class="font-bold text-base-content">KeyClack-3.3.0-Setup-x64.exe</td>
                <td class="text-base-content/70 select-all">4a9192e2dc629cbe1ff893d56ef17b44781cae9365287b9cc0d091a134816912</td>
              </tr>
              <tr>
                <td class="font-bold text-base-content">keyclack-3.3.0-macos-arm64.dmg</td>
                <td class="text-base-content/70 select-all">9f310bd87b6495166ac7713dcf52a4f49419b489a72d733b1f9b37c093a89091</td>
              </tr>
              <tr>
                <td class="font-bold text-base-content">keyclack_3.3.0_amd64.deb</td>
                <td class="text-base-content/70 select-all">7b9264c7ad06915f0190a0cb401eecaa5e9664dbb02b553eef671bb6efd79672</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
  `;
}

module.exports = renderDownload;
