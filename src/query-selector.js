/**
 * Get HTML element using query selector.
 *
 * @param {string[]} selectors
 * Array of possible selectors.
 * If selector results to some element,
 * then that element will be returned,
 * otherwise next selector will be used.
 * @param {document | HTMLElement} root
 * A root in which the element will be searched.
 * Defaults to `document`.
 *
 * @returns {HTMLElement | null}
 * HTML element if finded, `null` otherwise.
 */
export function querySelector(
    selectors,
    root = document
) {
    let value = null;

    for (const selector of selectors) {
        value = root.querySelector(selector);

        if (value) {
            break;
        }
    }

    return value;
}
