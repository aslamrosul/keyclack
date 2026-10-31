function renderThemes(themesList) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-12">
      
      <!-- Page Header -->
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <div class="badge badge-secondary badge-outline text-xs uppercase tracking-wider font-semibold">Custom Styling</div>
        <h1 class="text-3xl sm:text-4xl font-black text-base-content tracking-tight">Themes Gallery</h1>
        <p class="text-sm sm:text-base text-base-content/70">
          Personalize the look and feel of KeyClack. Preview themes in real time, customize color hexes, and export custom theme files.
        </p>
      </div>

      <!-- Real-Time Theme Previewer & Creator Studio -->
      <div class="bg-base-200/50 rounded-3xl border border-base-300 p-6 sm:p-10 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
        
        <!-- Controls Column -->
        <div class="lg:col-span-5 space-y-6">
          <div class="space-y-1">
            <h3 class="text-xl font-bold">Theme Studio</h3>
            <p class="text-xs text-base-content/60">Select a theme or customize colors live.</p>
          </div>

          <!-- Presets Dropdown -->
          <div class="space-y-2">
            <label class="text-xs font-semibold text-base-content/70">Theme Preset</label>
            <select id="themeSelect" onchange="applyThemePreset(this.value)" class="select select-bordered select-sm w-full rounded-xl bg-base-100">
              ${themesList.map(t => `<option value="${t.id}">${t.name} (${t.author})</option>`).join('')}
            </select>
          </div>

          <!-- Color Pickers -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-[11px] font-medium text-base-content/60 block mb-1">Primary Color</label>
              <input type="color" id="primaryColor" value="#ff7ac6" onchange="updateThemeCustomColor()" class="w-full h-8 rounded-lg cursor-pointer bg-base-100 p-0.5 border border-base-300"/>
            </div>
            <div>
              <label class="text-[11px] font-medium text-base-content/60 block mb-1">Secondary Color</label>
              <input type="color" id="secondaryColor" value="#bd93f9" onchange="updateThemeCustomColor()" class="w-full h-8 rounded-lg cursor-pointer bg-base-100 p-0.5 border border-base-300"/>
            </div>
            <div>
              <label class="text-[11px] font-medium text-base-content/60 block mb-1">Background Base</label>
              <input type="color" id="baseColor" value="#191a21" onchange="updateThemeCustomColor()" class="w-full h-8 rounded-lg cursor-pointer bg-base-100 p-0.5 border border-base-300"/>
            </div>
            <div>
              <label class="text-[11px] font-medium text-base-content/60 block mb-1">Text Color</label>
              <input type="color" id="textColor" value="#f8f8f2" onchange="updateThemeCustomColor()" class="w-full h-8 rounded-lg cursor-pointer bg-base-100 p-0.5 border border-base-300"/>
            </div>
          </div>

          <!-- Action buttons -->
          <div class="pt-2 flex gap-3">
            <button onclick="downloadActiveTheme()" class="btn btn-sm btn-primary flex-1 rounded-xl gap-2 shadow-lg shadow-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Export .mvtheme
            </button>
            <button onclick="copyThemeJSON()" class="btn btn-sm btn-neutral rounded-xl">
              Copy JSON
            </button>
          </div>
        </div>

        <!-- Live Visual Mockup Window -->
        <div class="lg:col-span-7">
          <div id="mockupWindow" class="w-full max-w-md mx-auto rounded-[2rem] border-4 border-gray-950 p-6 shadow-2xl transition-all duration-300 space-y-6" style="background-color: #191a21; color: #f8f8f2;">
            
            <!-- Window header -->
            <div class="flex items-center justify-between pb-3 border-b border-white/10">
              <div class="flex items-center gap-2">
                <img src="/logo.svg" alt="logo" class="w-5 h-5"/>
                <span class="font-bold text-xs tracking-tight">KeyClack Preview</span>
              </div>
              <div class="flex gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
            </div>

            <!-- Active Pack Selector preview -->
            <div class="p-3.5 rounded-xl border border-white/10 space-y-1.5" style="background-color: rgba(255,255,255,0.04)">
              <div class="text-[10px] opacity-60 uppercase font-semibold">Active Keyboard Switch</div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-bold">EG Oreo (Tactile 67g)</span>
                <span id="previewTag" class="badge badge-sm font-semibold" style="background-color: #ff7ac6; color: #191a21;">Active</span>
              </div>
            </div>

            <!-- Volume Slider Mockup -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs opacity-75 font-medium">
                <span>Output Volume</span>
                <span>80%</span>
              </div>
              <input type="range" min="0" max="100" value="80" class="range range-xs" style="accent-color: #ff7ac6;"/>
            </div>

            <!-- Mock Bottom Dock -->
            <div class="p-2.5 rounded-2xl flex justify-around items-center border border-white/10" style="background-color: rgba(255,255,255,0.06)">
              <button class="p-2 rounded-xl" style="background-color: #ff7ac6; color: #191a21;">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </button>
              <button class="p-2 rounded-xl opacity-60">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
              </button>
              <button class="p-2 rounded-xl opacity-60">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
              </button>
            </div>

          </div>
        </div>

      </div>

      <!-- Presets Showcase Grid -->
      <div class="space-y-6 pt-6">
        <h2 class="text-2xl font-bold">Featured Theme Packs</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${themesList.map(t => `
            <div class="bg-base-100 rounded-3xl border border-base-300 p-6 space-y-4 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div class="flex items-center justify-between">
                <h3 class="font-bold text-lg">${t.name}</h3>
                <span class="text-xs text-base-content/50">${t.downloads} DL</span>
              </div>
              <p class="text-xs text-base-content/70 leading-relaxed">${t.description}</p>
              
              <!-- Color swatches preview -->
              <div class="flex gap-2">
                <span class="w-6 h-6 rounded-full border border-black/20 shadow-sm" style="background-color: ${t.colors.primary}" title="Primary"></span>
                <span class="w-6 h-6 rounded-full border border-black/20 shadow-sm" style="background-color: ${t.colors.secondary}" title="Secondary"></span>
                <span class="w-6 h-6 rounded-full border border-black/20 shadow-sm" style="background-color: ${t.colors.base100}" title="Background"></span>
                <span class="w-6 h-6 rounded-full border border-black/20 shadow-sm" style="background-color: ${t.colors.baseContent}" title="Text"></span>
              </div>

              <div class="pt-3 border-t border-base-300/60 flex items-center justify-between">
                <span class="text-xs text-base-content/50">by ${t.author}</span>
                <button onclick="applyThemeById('${t.id}')" class="btn btn-xs btn-outline btn-primary rounded-lg">Apply Preview</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  </section>

  <script>
    const themesData = ${JSON.stringify(themesList)};
    let currentTheme = themesData[0];

    function applyThemeById(id) {
      const found = themesData.find(t => t.id === id);
      if (found) {
        currentTheme = found;
        const sel = document.getElementById('themeSelect');
        if (sel) sel.value = id;
        renderMockup();
      }
    }

    function applyThemePreset(id) {
      applyThemeById(id);
    }

    function updateThemeCustomColor() {
      currentTheme = {
        id: 'custom-theme',
        name: 'Custom Theme',
        author: 'User',
        colors: {
          primary: document.getElementById('primaryColor').value,
          secondary: document.getElementById('secondaryColor').value,
          base100: document.getElementById('baseColor').value,
          baseContent: document.getElementById('textColor').value
        }
      };
      renderMockup();
    }

    function renderMockup() {
      const mock = document.getElementById('mockupWindow');
      const tag = document.getElementById('previewTag');
      if (mock && currentTheme) {
        mock.style.backgroundColor = currentTheme.colors.base100;
        mock.style.color = currentTheme.colors.baseContent;
        if (tag) {
          tag.style.backgroundColor = currentTheme.colors.primary;
          tag.style.color = currentTheme.colors.base100;
        }
      }
    }

    function downloadActiveTheme() {
      const blob = new Blob([JSON.stringify(currentTheme, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (currentTheme.id || 'custom-theme') + '.mvtheme';
      a.click();
    }

    function copyThemeJSON() {
      navigator.clipboard.writeText(JSON.stringify(currentTheme, null, 2));
      alert('Theme configuration copied to clipboard!');
    }
  </script>
  `;
}

module.exports = renderThemes;
