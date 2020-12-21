/**
 * Joins text using separator.
 */
export function joinText(separator) {
    return Array.from(arguments).join(separator);
}


/**
 * @param {HTMLElement} element
 */
export function isIframe(element) {
    return (element.nodeName.toLowerCase() === 'iframe');
}


/**
 * NOTE: during execution temp element will be added
 * in DOM. That element will be invisible to user,
 * and that element will be removed in the end of execution.
 *
 * @param {string} char
 * Single character is expected.
 * You can pass more than one character,
 * but result will be not so accurate, because,
 * for example, different characters may have different width.
 * @param {string} css
 * Using that CSS `char` was rendered.
 * It is important to provide exactly CSS
 * that was used for rendering, because
 * different CSS may lead to different rect.
 *
 * @returns {DOMRectReadOnly}
 * Rect of rendered character.
 */
export function getCharRect(char, css) {
    const element = document.createElement('span');

    element.textContent = char;
    element.style.cssText = css;

    // sequences of white spaces should be preserved
    element.style.whiteSpace = 'pre';

    // don't display this element this element
    element.style.position = 'absolute';
    element.style.top = '-100px';

    // need to render this element in order to get valid rect
    document.body.appendChild(element);

    const rect = element.getBoundingClientRect();

    element.remove();

    return rect;
}


/**
 * @param {DOMRectReadOnly} a
 * @param {DOMRectReadOnly} b
 *
 * @returns {boolean}
 * Two rects overlaps each other.
 *
 * @see https://stackoverflow.com/a/306332/8445442
 */
export function isRectsOverlap(a, b) {
    return (
        (a.left <= b.right) &&
        (a.right >= b.left) &&
        (a.top <= b.bottom) &&
        (a.bottom >= b.top)
    );
}
