function renderLegal({ title, date, content }) {
  return `
  <section class="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl sm:text-4xl font-black text-base-content">${title}</h1>
        <div class="text-xs text-base-content/50">Last updated: ${date || 'October 2026'}</div>
      </div>

      <div class="prose prose-invert max-w-none text-base-content/80 text-sm leading-relaxed space-y-6 pt-6 border-t border-base-300">
        ${content}
      </div>
    </div>
  </section>
  `;
}

function renderAuth({ isLogin = true }) {
  return `
  <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
    <div class="w-full max-w-md bg-base-100 rounded-3xl border border-base-300 p-8 shadow-2xl space-y-6">
      <div class="text-center space-y-2">
        <img src="/logo.svg" alt="KeyClack" class="w-10 h-10 mx-auto"/>
        <h2 class="text-2xl font-bold">${isLogin ? 'Sign in to KeyClack' : 'Create an Account'}</h2>
        <p class="text-xs text-base-content/60">${isLogin ? 'Access your uploaded sound packs and cloud sync.' : 'Join the community and publish your own sound packs.'}</p>
      </div>

      <form action="/login" method="POST" class="space-y-4">
        <div class="space-y-1">
          <label class="text-xs font-semibold text-base-content/70">Email Address</label>
          <input type="email" required placeholder="you@example.com" class="input input-bordered w-full rounded-xl bg-base-200 text-sm"/>
        </div>

        <div class="space-y-1">
          <label class="text-xs font-semibold text-base-content/70">Password</label>
          <input type="password" required placeholder="••••••••" class="input input-bordered w-full rounded-xl bg-base-200 text-sm"/>
        </div>

        <button type="submit" class="btn btn-primary w-full rounded-xl shadow-lg shadow-primary/20">
          ${isLogin ? 'Sign In' : 'Register Account'}
        </button>
      </form>

      <div class="divider text-xs text-base-content/40">OR</div>

      <div class="text-center text-xs text-base-content/60">
        ${isLogin 
          ? `Don't have an account yet? <a href="/register" class="text-primary font-semibold hover:underline">Sign up</a>`
          : `Already have an account? <a href="/login" class="text-primary font-semibold hover:underline">Sign in</a>`
        }
      </div>
    </div>
  </section>
  `;
}

module.exports = { renderLegal, renderAuth };
