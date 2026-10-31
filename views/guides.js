function renderGuidesList(guidesList) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto space-y-12">
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h1 class="text-3xl sm:text-4xl font-black text-base-content tracking-tight">Guides & Documentation</h1>
        <p class="text-sm sm:text-base text-base-content/70">
          Everything you need to set up, calibrate, and customize Mechvibes like a pro.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        ${guidesList.map(g => `
          <a href="/guides/${g.slug}" class="bg-base-100 rounded-3xl border border-base-300 p-8 flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
            <div class="space-y-4">
              <div class="flex items-center justify-between text-xs text-base-content/50">
                <span class="badge badge-primary badge-outline">${g.category}</span>
                <span>${g.readTime}</span>
              </div>
              <h2 class="text-2xl font-bold group-hover:text-primary transition-colors">${g.title}</h2>
              <p class="text-sm text-base-content/70 leading-relaxed">${g.description}</p>
            </div>
            <div class="pt-6 border-t border-base-300/80 flex items-center text-sm font-semibold text-primary gap-1 group-hover:translate-x-1 transition-transform">
              Read Guide →
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  </section>
  `;
}

function renderGuideDetail(g) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-8">
      <div class="text-xs breadcrumbs text-base-content/60">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/guides">Guides</a></li>
          <li class="text-base-content font-medium">${g.title}</li>
        </ul>
      </div>

      <div class="space-y-4">
        <div class="badge badge-primary badge-outline text-xs">${g.category}</div>
        <h1 class="text-3xl sm:text-4xl font-black text-base-content leading-tight">${g.title}</h1>
        <div class="text-xs text-base-content/50">Estimated: ${g.readTime}</div>
      </div>

      <div class="prose prose-invert max-w-none text-base-content/80 leading-relaxed space-y-6 pt-4 border-t border-base-300">
        ${g.content}
      </div>

      <div class="pt-8 border-t border-base-300 flex justify-between items-center">
        <a href="/guides" class="btn btn-sm btn-ghost gap-2">← Back to Guides</a>
        <a href="/download" class="btn btn-sm btn-primary rounded-xl">Download Mechvibes</a>
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderGuidesList, renderGuideDetail };
