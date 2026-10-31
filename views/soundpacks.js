function renderSoundpacks(soundpacksList, query = {}) {
  const activeCategory = query.category || 'all';
  const activeTag = query.tag || 'all';
  const searchQuery = query.q || '';

  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-10">
      
      <!-- Page Header -->
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-black text-base-content tracking-tight">Sound Packs Library</h1>
        <p class="text-sm sm:text-base text-base-content/70">
          Discover hundreds of custom mechanical switch soundpacks. Preview audio in your browser and install directly into KeyClack.
        </p>
      </div>

      <!-- Search & Filters Bar -->
      <div class="bg-base-200/60 p-4 sm:p-6 rounded-3xl border border-base-300 space-y-4">
        
        <form method="GET" action="/sound-packs" class="flex flex-col sm:flex-row gap-3">
          <div class="relative flex-1">
            <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" name="q" value="${searchQuery}" placeholder="Search soundpacks by switch name, creator, or sound profile..." class="input input-sm sm:input-md input-bordered w-full pl-10 rounded-2xl bg-base-100 text-sm"/>
          </div>

          <div class="flex gap-2">
            <select name="category" onchange="this.form.submit()" class="select select-sm sm:select-md select-bordered rounded-2xl bg-base-100 text-xs sm:text-sm">
              <option value="all" ${activeCategory === 'all' ? 'selected' : ''}>All Categories</option>
              <option value="keyboard" ${activeCategory === 'keyboard' ? 'selected' : ''}>Keyboard</option>
              <option value="mouse" ${activeCategory === 'mouse' ? 'selected' : ''}>Mouse</option>
            </select>

            <button type="submit" class="btn btn-sm sm:btn-md btn-primary rounded-2xl px-5">Filter</button>
          </div>
        </form>

        <!-- Quick Tags -->
        <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-base-300/60 text-xs">
          <span class="text-base-content/50 font-medium">Popular Profiles:</span>
          ${['all', 'thocky', 'creamy', 'tactile', 'linear', 'clicky'].map(t => `
            <a href="/sound-packs?tag=${t}${activeCategory !== 'all' ? '&category=' + activeCategory : ''}" class="badge ${activeTag === t ? 'badge-primary' : 'badge-ghost hover:badge-neutral'} cursor-pointer transition-all">
              #${t}
            </a>
          `).join('')}
        </div>

      </div>

      <!-- Soundpacks Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${soundpacksList.map(sp => `
          <div class="bg-base-100 rounded-3xl border border-base-300 overflow-hidden flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
            
            <!-- Card Image & Header -->
            <div class="relative h-44 bg-base-300 overflow-hidden">
              <img src="${sp.coverImage || '/screens/ss1.png'}" alt="${sp.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex gap-1.5">
                ${sp.isOfficial ? '<span class="badge badge-primary badge-sm font-semibold">Official</span>' : '<span class="badge badge-neutral badge-sm">Community</span>'}
                <span class="badge badge-outline badge-sm text-white/90 bg-black/40 backdrop-blur-sm uppercase text-[10px]">${sp.category}</span>
              </div>

              <!-- Quick Play Preview Button Overlay -->
              <button onclick="previewAudio('${sp.soundFile}', '${sp.title}')" class="btn btn-circle btn-primary btn-sm absolute bottom-3 right-3 shadow-lg hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>

              <div class="absolute bottom-3 left-3 text-white">
                <span class="text-xs opacity-75">${sp.switchType || 'Mechanical'}</span>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div class="space-y-1.5">
                <h3 class="font-bold text-base text-base-content hover:text-primary transition-colors">
                  <a href="/sound-packs/${sp.slug}">${sp.title}</a>
                </h3>
                <p class="text-xs text-base-content/60">by <span class="font-medium text-base-content/80">${sp.author}</span></p>
                <p class="text-xs text-base-content/70 line-clamp-2 mt-2 leading-relaxed">${sp.description}</p>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5">
                ${(sp.tags || []).map(tag => `<span class="badge badge-xs badge-ghost text-[10px]">#${tag}</span>`).join('')}
              </div>

              <!-- Card Footer Actions -->
              <div class="pt-4 border-t border-base-300/80 flex items-center justify-between gap-2">
                <div class="flex items-center gap-3 text-xs text-base-content/50">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ${sp.rating || 4.8}
                  </span>
                  <span>${sp.downloads} DL</span>
                </div>

                <div class="flex items-center gap-1.5">
                  <a href="mechvibes://install/${sp.id}" class="btn btn-xs btn-primary rounded-lg gap-1" title="Install directly in KeyClack desktop app">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    Install
                  </a>
                  <a href="${sp.soundFile}" download class="btn btn-xs btn-ghost btn-square" title="Direct download file">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
        `).join('')}
      </div>

    </div>
  </section>

  <!-- Sound Preview Toast -->
  <div id="previewToast" class="fixed bottom-6 right-6 bg-neutral text-neutral-content px-4 py-3 rounded-2xl shadow-2xl border border-neutral-content/20 flex items-center gap-3 z-50 transform translate-y-24 opacity-0 transition-all duration-300">
    <div class="w-3 h-3 rounded-full bg-primary animate-ping"></div>
    <div class="text-xs">
      <div class="font-bold" id="previewTitle">Playing preview</div>
      <div class="opacity-70">Type anywhere on keyboard to test!</div>
    </div>
  </div>

  <script>
    function previewAudio(soundFile, title) {
      window.keyclack.setSoundpack(soundFile);
      window.keyclack.playKey();

      const toast = document.getElementById('previewToast');
      const titleEl = document.getElementById('previewTitle');
      if (toast && titleEl) {
        titleEl.textContent = 'Previewing: ' + title;
        toast.classList.remove('translate-y-24', 'opacity-0');
        setTimeout(() => toast.classList.add('translate-y-24', 'opacity-0'), 3500);
      }
    }
  </script>
  `;
}

module.exports = renderSoundpacks;
