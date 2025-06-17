// This is a simple worker script that serves your static site
// It handles SPA routing by directing all requests to index.html 
// except for static assets

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Check if the request is for a static file
    if (
      pathname.startsWith('/assets/') ||
      pathname.startsWith('/images/') ||
      pathname.endsWith('.js') ||
      pathname.endsWith('.css') ||
      pathname.endsWith('.jpg') ||
      pathname.endsWith('.jpeg') ||
      pathname.endsWith('.png') ||
      pathname.endsWith('.svg') ||
      pathname.endsWith('.ico')
    ) {
      // Serve the requested asset from the static site
      return env.ASSETS.fetch(request);
    }

    // For all other routes, serve the index.html and let React Router handle it
    return env.ASSETS.fetch(`${url.origin}/index.html`);
  }
}
