/**
 * Clears a text extracted from element
 * using `textContent` property.
 *
 * - you may want to use this function because
 * Google Docs adds special symbols (ZWNJ, NBSP, etc.)
 * to display text correctly across all browsers.
 * - no sense to use this function for `innertText`.
 *
 * @param {string} textContent
 */
export default function clearTextContent(textContent) {
    textContent = removeZWNJ(textContent);
    textContent = removeNBSP(textContent);

    return textContent;
}


/**
 * Removes all ZWNJ characters.
 *
 * - https://en.wikipedia.org/wiki/Zero-width_non-joiner
 *
 * @param {string} value
 */
function removeZWNJ(value) {
    return value.replace(/\u200C/g, '');
}


/**
 * Removes all NBSP characters.
 *
 * - https://en.wikipedia.org/wiki/Non-breaking_space
 *
 * @param {string} value
 */
function removeNBSP(value) {
    return value.replace(/\u00A0/g, '');
}
