function renderBlogList(posts) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-12">
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-black text-base-content tracking-tight">KeyClack Blog & News</h1>
        <p class="text-sm sm:text-base text-base-content/70">
          Engineering insights, security breakdowns, audio tutorials, and platform updates.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        ${posts.map(p => `
          <a href="/blog/${p.slug}" class="bg-base-100 rounded-3xl border border-base-300 overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between">
            <div class="h-52 bg-base-300 overflow-hidden relative">
              <img src="${p.image || '/screens/ss1.png'}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute top-3 left-3 badge badge-primary text-xs font-semibold">${p.category}</div>
            </div>

            <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div class="space-y-2">
                <div class="text-xs text-base-content/50 flex gap-2">
                  <span>${p.date}</span>
                  <span>•</span>
                  <span>${p.readTime}</span>
                </div>
                <h2 class="text-xl font-bold group-hover:text-primary transition-colors leading-snug">${p.title}</h2>
                <p class="text-xs sm:text-sm text-base-content/70 leading-relaxed">${p.summary}</p>
              </div>

              <div class="pt-4 border-t border-base-300/60 flex items-center text-xs font-bold text-primary gap-1 group-hover:translate-x-1 transition-transform">
                Read Article →
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  </section>
  `;
}

function renderBlogPost(p) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-8">
      <div class="text-xs breadcrumbs text-base-content/60">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li class="text-base-content font-medium">${p.title}</li>
        </ul>
      </div>

      <div class="space-y-4">
        <div class="badge badge-primary badge-outline text-xs">${p.category}</div>
        <h1 class="text-3xl sm:text-5xl font-black text-base-content leading-tight tracking-tight">${p.title}</h1>
        <div class="flex items-center gap-3 text-xs text-base-content/50">
          <span>By ${p.author}</span>
          <span>•</span>
          <span>${p.date}</span>
          <span>•</span>
          <span>${p.readTime}</span>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden border border-base-300 shadow-xl max-h-96">
        <img src="${p.image || '/screens/ss1.png'}" alt="${p.title}" class="w-full h-full object-cover"/>
      </div>

      <div class="prose prose-invert max-w-none text-base-content/80 leading-relaxed space-y-6 pt-4 border-t border-base-300 text-sm sm:text-base">
        ${p.content}
      </div>

      <div class="pt-8 border-t border-base-300 flex justify-between items-center">
        <a href="/blog" class="btn btn-sm btn-ghost gap-2">← Back to Blog</a>
        <a href="/download" class="btn btn-sm btn-primary rounded-xl">Try KeyClack</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderBlogList, renderBlogPost };
