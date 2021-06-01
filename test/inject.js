/* eslint-disable no-unused-vars */


/**
 * Call this function in developer console of page to
 * inject local package into Google Docs page.
 *
 * - requires HTTP server to be executed.
 * - if you want to refresh script content,
 * just call this function again.
 *
 * If you will see error message about invalid certificate,
 * then open script URL in new tab, click on "Proceed to unsafe"
 * (or something like that), after that you should see loaded
 * script content, and now back to Google Docs and call this
 * method again.
 */
function inject() {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://127.0.0.1:8080/dist/iife/index.js';

    document.head.appendChild(script);
}
