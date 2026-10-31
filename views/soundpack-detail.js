function renderSoundpackDetail(sp) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-10">
      
      <!-- Breadcrumb -->
      <div class="text-xs breadcrumbs text-base-content/60">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sound-packs">Sound Packs</a></li>
          <li class="text-base-content font-medium">${sp.title}</li>
        </ul>
      </div>

      <!-- Main Showcase Card -->
      <div class="bg-base-100 rounded-3xl border border-base-300 p-6 sm:p-10 shadow-xl grid md:grid-cols-12 gap-8 items-center">
        
        <div class="md:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-base-300 shadow-md">
          <img src="${sp.coverImage || '/screens/ss1.png'}" alt="${sp.title}" class="w-full h-full object-cover"/>
          <button onclick="window.mechvibes.setSoundpack('${sp.soundFile}'); window.mechvibes.playKey();" class="btn btn-circle btn-primary btn-lg absolute inset-0 m-auto shadow-2xl hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>

        <div class="md:col-span-7 space-y-5">
          <div class="flex flex-wrap items-center gap-2">
            ${sp.isOfficial ? '<span class="badge badge-primary font-semibold">Official Release</span>' : '<span class="badge badge-neutral">Community Pack</span>'}
            <span class="badge badge-outline uppercase text-[10px]">${sp.category}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-black text-base-content leading-tight">${sp.title}</h1>

          <div class="flex items-center gap-4 text-xs text-base-content/60">
            <span>Created by <strong class="text-base-content">${sp.author}</strong></span>
            <span>•</span>
            <span class="flex items-center gap-1 text-warning font-semibold">★ ${sp.rating}</span>
            <span>•</span>
            <span>${sp.downloads} downloads</span>
          </div>

          <p class="text-sm text-base-content/75 leading-relaxed">
            ${sp.description}
          </p>

          <div class="pt-4 border-t border-base-300/80 flex flex-wrap items-center gap-3">
            <a href="mechvibes://install/${sp.id}" class="btn btn-primary rounded-2xl gap-2 shadow-lg shadow-primary/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Install in Mechvibes
            </a>

            <a href="${sp.soundFile}" download class="btn btn-neutral rounded-2xl gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              Download Audio
            </a>
          </div>
        </div>

      </div>

      <!-- Live Typing Simulator for this specific pack -->
      <div class="bg-base-200/50 rounded-3xl border border-base-300 p-6 sm:p-8 space-y-4">
        <h3 class="font-bold text-lg flex items-center gap-2">
          <span>🎹</span> Test "${sp.title}" Directly in Browser
        </h3>
        <p class="text-xs text-base-content/60">Type below to experience this exact sound pack before installing.</p>
        <textarea id="detailTypingInput" rows="2" class="textarea textarea-bordered w-full rounded-2xl bg-base-100 font-mono text-base" placeholder="Type anything on your keyboard..."></textarea>
      </div>

      <!-- Technical Specifications Table -->
      <div class="bg-base-100 rounded-3xl border border-base-300 p-6 sm:p-8 space-y-4">
        <h3 class="font-bold text-lg">Sound Profile Specifications</h3>
        <div class="grid sm:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-base-200/50 space-y-1">
            <div class="text-base-content/50 uppercase tracking-wider font-semibold">Switch Mechanism</div>
            <div class="font-semibold text-sm text-base-content">${sp.switchType || 'Mechanical'}</div>
          </div>
          <div class="p-4 rounded-xl bg-base-200/50 space-y-1">
            <div class="text-base-content/50 uppercase tracking-wider font-semibold">Audio Format</div>
            <div class="font-semibold text-sm text-base-content">Ogg Vorbis / High Definition PCM</div>
          </div>
          <div class="p-4 rounded-xl bg-base-200/50 space-y-1">
            <div class="text-base-content/50 uppercase tracking-wider font-semibold">Compatible App Version</div>
            <div class="font-semibold text-sm text-base-content">Mechvibes v2.x / v3.x</div>
          </div>
          <div class="p-4 rounded-xl bg-base-200/50 space-y-1">
            <div class="text-base-content/50 uppercase tracking-wider font-semibold">License</div>
            <div class="font-semibold text-sm text-base-content">MIT / Free Personal & Commercial Use</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      window.mechvibes.setSoundpack('${sp.soundFile}');
      const tInput = document.getElementById('detailTypingInput');
      if (tInput) {
        tInput.addEventListener('keydown', () => {
          window.mechvibes.playKey();
        });
      }
    });
  </script>
  `;
}

module.exports = renderSoundpackDetail;
