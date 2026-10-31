function renderHome() {
  return `
  <!-- HERO SECTION -->
  <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Interactive App Mockup Showcase -->
        <div class="lg:col-span-6 relative flex justify-center items-center min-h-[440px] sm:min-h-[520px]">
          <div class="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
          <div class="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-40"></div>
          
          <div class="relative origin-center scale-[0.85] sm:scale-100 flex justify-center">
            <!-- Screen 3: Ambient Mood / Settings -->
            <div id="mockScreen3" onclick="bringToFront(3)" class="cursor-pointer absolute top-6 left-28 w-56 h-[420px] bg-black rounded-[1.8rem] shadow-xl border-4 border-gray-900/60 z-10 overflow-hidden transition-all duration-300 hover:scale-105">
              <img alt="Mechvibes Mood Screen" class="w-full h-full object-cover" src="/screens/ss3.png"/>
            </div>

            <!-- Screen 2: Customize Theme -->
            <div id="mockScreen2" onclick="bringToFront(2)" class="cursor-pointer absolute top-3 left-14 w-60 h-[450px] bg-black rounded-[1.8rem] shadow-2xl border-4 border-gray-900/70 z-20 overflow-hidden transition-all duration-300 hover:scale-105">
              <img alt="Mechvibes Customize Screen" class="w-full h-full object-cover" src="/screens/ss2.png"/>
            </div>

            <!-- Screen 1: Main Home Screen -->
            <div id="mockScreen1" onclick="bringToFront(1)" class="cursor-pointer relative w-64 h-[480px] bg-black rounded-[1.8rem] shadow-2xl border-4 border-gray-900/80 z-30 overflow-hidden transition-all duration-300 hover:scale-105">
              <img alt="Mechvibes Main Screen" class="w-full h-full object-cover" src="/screens/ss1.png"/>
            </div>
          </div>
        </div>

        <!-- Right: Hero Copy & CTA -->
        <div class="lg:col-span-6 text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
            <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Mechvibes v3.3.0 Release
          </div>

          <h1 class="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-base-content">
            Transform your typing into a <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">satisfying</span> experience
          </h1>

          <p class="text-base-content/70 text-base sm:text-lg leading-relaxed">
            Mechvibes brings rich, ultra low-latency mechanical keyboard and mouse sounds to every keystroke and click. From creamy custom tactile switches to classic clicky blues, make your keyboard uniquely yours.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <a class="btn btn-primary rounded-box shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all gap-2" href="/download">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Download Free
            </a>

            <a class="btn btn-outline border-base-content/20 hover:border-base-content/40 rounded-box gap-2" href="/sound-packs">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              Browse Sound Packs
            </a>
          </div>

          <div class="flex items-center gap-4 text-xs text-base-content/50 pt-2">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Windows 10/11
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              macOS Silicon & Intel
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Linux AppImage / .deb
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- INTERACTIVE WEB TYPING TESTER PLAYGROUND -->
  <section class="py-12 px-4 sm:px-6 lg:px-8 bg-base-200/50 border-y border-base-300/60">
    <div class="max-w-4xl mx-auto">
      <div class="bg-base-100 rounded-3xl border border-base-300 shadow-xl p-6 sm:p-8 space-y-6">
        
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-base-300/80 pb-5">
          <div>
            <div class="flex items-center gap-2">
              <span class="badge badge-success badge-sm">Interactive Preview</span>
              <h3 class="text-xl font-bold">Try Typing Real Switches</h3>
            </div>
            <p class="text-xs text-base-content/60 mt-1">Select a switch and type in the box below to test Mechvibes acoustics live!</p>
          </div>

          <!-- Soundpack selector for typing preview -->
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-base-content/70">Sound Profile:</span>
            <select id="switchSelector" class="select select-sm select-bordered rounded-lg bg-base-200 font-medium text-xs">
              <option value="/soundpacks/keyboard/eg-oreo/oreo.ogg" selected>EG Oreo (Tactile Thock)</option>
              <option value="/soundpacks/keyboard/cherrymx-blue-abs/sound.ogg">Cherry MX Blue (Crisp Clicky)</option>
              <option value="/soundpacks/keyboard/cherrymx-black-abs/sound.ogg">Cherry MX Black (Heavy Linear)</option>
              <option value="/soundpacks/keyboard/cherrymx-red-abs/sound.ogg">Cherry MX Red (Smooth Linear)</option>
              <option value="/soundpacks/keyboard/topre-purple-hybrid-pbt/sound.ogg">Topre Purple Hybrid (Deep Thock)</option>
              <option value="/soundpacks/keyboard/eg-crystal-purple/purple.ogg">EG Crystal Purple (Sharp Clack)</option>
            </select>
          </div>
        </div>

        <!-- Typing input box -->
        <div class="space-y-3">
          <textarea id="liveTypingInput" rows="3" class="textarea textarea-bordered w-full text-lg leading-relaxed focus:textarea-primary rounded-2xl bg-base-200/60 font-mono transition-all" placeholder="Click here and start typing to hear the mechanical switch sound..."></textarea>
          
          <div class="flex flex-wrap justify-between items-center text-xs text-base-content/50 gap-2">
            <div class="flex gap-4">
              <span>Keystrokes: <strong id="strokeCount" class="text-primary font-mono">0</strong></span>
              <span>WPM: <strong id="wpmCount" class="text-secondary font-mono">0</strong></span>
            </div>
            <span class="italic">Sound renders via local Web Audio with sub-10ms latency</span>
          </div>
        </div>

        <!-- Virtual Keyboard Keys Visualizer -->
        <div class="grid grid-cols-10 gap-1.5 pt-2 hidden sm:grid">
          ${['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L',';','Z','X','C','V','B','N','M',',','.','Space'].map(k => `
            <button type="button" class="keyboard-key py-2.5 rounded-lg bg-base-200 border border-base-300 text-xs font-mono font-bold text-center hover:bg-primary/20 transition-all ${k === 'Space' ? 'col-span-10 py-3 bg-base-300/80' : ''}" onclick="window.mechvibes.playKey(); animateKey(this)">
              ${k}
            </button>
          `).join('')}
        </div>

      </div>
    </div>
  </section>

  <!-- FEATURES BENTO GRID -->
  <section id="features" class="py-24 px-4 sm:px-6 lg:px-8 bg-base-200/30">
    <div class="max-w-5xl mx-auto space-y-16">
      
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-black text-base-content tracking-tight">
          Make every keystroke count toward your goals
        </h2>
        <p class="text-base text-base-content/70">
          Deep customization meets modern audio technology.<br/>Your keyboard, your rules, your sounds.
        </p>
      </div>

      <div class="grid grid-cols-12 gap-5">
        
        <!-- Feature 1: Powerful Editor (col-span-8) -->
        <div class="col-span-12 md:col-span-8 group relative bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div class="space-y-4 relative z-10 max-w-md">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold">Powerful editor</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">
              Create and calibrate personalized soundpacks with your favorite mechanical switches or custom audio samples in the dedicated web editor.
            </p>
            <div class="pt-2">
              <a href="https://editor.mechvibes.com" target="_blank" class="btn btn-sm btn-neutral rounded-box gap-1">
                Go to Editor
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
          <img src="/screens/ss1.png" alt="Editor Preview" class="absolute right-0 -bottom-10 w-72 rounded-tl-2xl shadow-2xl opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 hidden sm:block pointer-events-none"/>
        </div>

        <!-- Feature 2: Universal Sound Triggers (col-span-4) -->
        <div class="col-span-12 md:col-span-4 group bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </div>
            <h3 class="text-xl font-bold">Universal sound triggers</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">
              Experience tactile auditory feedback across every single app on your system without lag or frame drops.
            </p>
          </div>
        </div>

        <!-- Feature 3: Rich Sound Library (col-span-4) -->
        <div class="col-span-12 md:col-span-4 group bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            </div>
            <h3 class="text-xl font-bold">Rich sound library</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">
              Explore hundreds of curated community and official sound packs with audio previews and 1-click install.
            </p>
            <div class="pt-2">
              <a href="/sound-packs" class="btn btn-sm btn-neutral rounded-box">Explore Library</a>
            </div>
          </div>
        </div>

        <!-- Feature 4: Deep Customization (col-span-8) -->
        <div class="col-span-12 md:col-span-8 group relative bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div class="space-y-4 relative z-10 max-w-md">
            <div class="w-12 h-12 rounded-2xl bg-info/10 text-info flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold">Deep customization</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">
              Personalize every single aspect of your typing experience with customizable themes, background wallpapers, opacity, and sound layers.
            </p>
            <div class="pt-2">
              <a href="/themes" class="btn btn-sm btn-neutral rounded-box">Browse Themes</a>
            </div>
          </div>
          <img src="/screens/ss2.png" alt="Customize Preview" class="absolute right-0 -bottom-10 w-72 rounded-tl-2xl shadow-2xl opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 hidden sm:block pointer-events-none"/>
        </div>

        <!-- Feature 5: System Integration (col-span-8) -->
        <div class="col-span-12 md:col-span-8 group relative bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div class="space-y-4 relative z-10 max-w-md">
            <div class="w-12 h-12 rounded-2xl bg-warning/10 text-warning flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect x="14" y="2" width="8" height="8" rx="1"></rect></svg>
            </div>
            <h3 class="text-2xl font-bold">System integration</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">
              Seamless background tray execution, automatic startup options, and custom global hotkeys for toggling sound instantly while playing or working.
            </p>
          </div>
          <img src="/screens/ss3.png" alt="System Preview" class="absolute right-0 -bottom-10 w-72 rounded-tl-2xl shadow-2xl opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 hidden sm:block pointer-events-none"/>
        </div>

        <!-- Feature 6: Built with Modern Technology (col-span-4) -->
        <div class="col-span-12 md:col-span-4 group bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-300">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-error/10 text-error flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            </div>
            <h3 class="text-xl font-bold">Built with Rust & Dioxus</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">
              Rewritten from ground up with Rust memory safety and Dioxus GUI for feather-light memory usage and blazing speed.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- TESTIMONIALS SECTION -->
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-base-100">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div class="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
          <h2 class="text-3xl sm:text-4xl font-black text-base-content tracking-tight">
            What users<br/>are saying
          </h2>
          <p class="text-sm text-base-content/70">
            Join hundreds of thousands of typists, developers, and writers who transformed their desks with Mechvibes.
          </p>
          <div>
            <a href="https://discord.gg/ydZqwvrvYS" target="_blank" class="btn btn-neutral rounded-box gap-2 shadow-lg">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z"/></svg>
              Join Our Discord
            </a>
          </div>
        </div>

        <div class="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          ${[
            { name: 'bobhurd', tag: '@bobhurd', text: 'Excellent program that makes keyboard sounds as you type thus informing you audibly that you haven’t missed a keystroke. Kudos to the developers for developing this free program!' },
            { name: 'sanyog45', tag: '@sanyog45', text: 'I’ve never come across such great and simple software. Thank you for such simple and great app. Mechvibes makes typing so much more enjoyable!' },
            { name: 'autisticphd', tag: '@autisticphd', text: 'Brings me back to the times I had to write my reports on a typewriter. The nostalgic feeling is incredible and really enhances my writing experience.' },
            { name: 'seann-69', tag: '@seann69', text: 'Great variety of keyboard switch sounds! I love the different options available. The Oreo and Topre packs are absolute perfection.' },
            { name: 'maximka', tag: '@maximka', text: 'Best wishes to author, interesting! This software is really creative and adds so much character to typing. Love the innovation behind it.' },
            { name: 'mak3r', tag: '@mak3r', text: 'niiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiice! This is exactly what I was looking for. Simple, effective, and adds that satisfying mechanical feel to any keyboard.' }
          ].map(r => `
            <div class="p-6 rounded-2xl bg-base-200/50 border border-base-300 space-y-3 hover:border-primary/30 transition-all">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center font-bold text-sm uppercase">
                  ${r.name[0]}
                </div>
                <div>
                  <h4 class="font-bold text-sm leading-none">${r.name}</h4>
                  <span class="text-xs text-base-content/50">${r.tag}</span>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-base-content/80 leading-relaxed">${r.text}</p>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  </section>

  <!-- FAQ SECTION ACCORDION -->
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-base-200/40 border-t border-base-300/60">
    <div class="max-w-2xl mx-auto space-y-12">
      <div class="text-center space-y-3">
        <h2 class="text-3xl font-black">Frequently Asked Questions</h2>
        <p class="text-sm text-base-content/70">Everything you need to know about Mechvibes features and safety.</p>
      </div>

      <div class="space-y-3">
        ${[
          { q: 'What is Mechvibes?', a: 'Mechvibes is a free, open-source mechanical keyboard sound simulator that plays realistic key and mouse switch sounds whenever you type or click anywhere on your computer.' },
          { q: 'Is Mechvibes safe to use?', a: 'Yes! Mechvibes is completely safe and 100% open source under the MIT license. It only reads key event codes to trigger corresponding audio slices locally. It does not record, log, or transmit any keystrokes or sensitive input data.' },
          { q: 'What platforms does Mechvibes support?', a: 'Mechvibes 3.3.0 natively supports 64-bit Windows (10 and 11), macOS (Apple Silicon M-series & Intel), and Linux (via AppImage and .deb packages).' },
          { q: 'Can I create custom sound packs?', a: 'Yes! You can craft your own custom packs using our web-based editor at editor.mechvibes.com and share them with the community or load them locally into the app.' },
          { q: 'How do I install sound packs?', a: 'Simply visit the Library page on our website and click "Install in Mechvibes" to install with one click, or download the sound pack folder and drop it into your custom soundpacks directory.' },
          { q: 'Does Mechvibes affect system performance or gaming latency?', a: 'No. Written natively in Rust with lightweight audio streaming, Mechvibes consumes less than 1% CPU and approximately 40MB of RAM, making it perfectly safe for high-framerate competitive gaming.' }
        ].map((faq, i) => `
          <div class="collapse collapse-plus bg-base-100 rounded-2xl border border-base-300">
            <input type="radio" name="faq-accordion" ${i === 0 ? 'checked' : ''} /> 
            <div class="collapse-title text-base font-semibold text-base-content">
              ${faq.q}
            </div>
            <div class="collapse-content text-sm text-base-content/70 leading-relaxed"> 
              <p>${faq.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Interactive script for Home page -->
  <script>
    // Bring screens to front on click
    function bringToFront(num) {
      const s1 = document.getElementById('mockScreen1');
      const s2 = document.getElementById('mockScreen2');
      const s3 = document.getElementById('mockScreen3');
      if (num === 1) {
        s1.style.zIndex = '30'; s2.style.zIndex = '20'; s3.style.zIndex = '10';
      } else if (num === 2) {
        s2.style.zIndex = '30'; s1.style.zIndex = '20'; s3.style.zIndex = '10';
      } else if (num === 3) {
        s3.style.zIndex = '30'; s1.style.zIndex = '10'; s2.style.zIndex = '20';
      }
    }

    // Typing tester logic
    let strokeCount = 0;
    let startTime = null;
    const input = document.getElementById('liveTypingInput');
    const strokeEl = document.getElementById('strokeCount');
    const wpmEl = document.getElementById('wpmCount');
    const switchSel = document.getElementById('switchSelector');

    if (switchSel) {
      switchSel.addEventListener('change', (e) => {
        window.mechvibes.setSoundpack(e.target.value);
      });
    }

    if (input) {
      input.addEventListener('keydown', () => {
        strokeCount++;
        if (!startTime) startTime = Date.now();
        if (strokeEl) strokeEl.textContent = strokeCount;

        const minutes = (Date.now() - startTime) / 60000;
        if (minutes > 0.05 && wpmEl) {
          const words = input.value.trim().split(/\\s+/).length;
          wpmEl.textContent = Math.round(words / minutes);
        }
        window.mechvibes.playKey();
      });
    }

    function animateKey(btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 120);
    }
  </script>
  `;
}

module.exports = renderHome;
