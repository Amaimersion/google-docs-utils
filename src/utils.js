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
