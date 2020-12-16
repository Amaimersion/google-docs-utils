/**
 * Call this function in developer console of page to
 * inject local package into Google Docs page.
 *
 * - requires HTTP server to be executed.
 * - if you want to refresh script content,
 * just call this function again.
 */
function inject() {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://127.0.0.1:8080/dist/iife/index.js';

    document.head.appendChild(script);
}
