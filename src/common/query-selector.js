/**
 * Gets HTML element using `querySelector`.
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
 *
 * @throws
 * Throws an error if `root == null`.
 */
export function querySelector(
    selectors,
    root = document
) {
    if (root == null) {
        throw new Error('Passed root element does not exists');
    }

    let value = null;

    for (const selector of selectors) {
        value = root.querySelector(selector);

        if (value) {
            break;
        }
    }

    return value;
}


/**
 * Gets all HTML elements using `querySelectorAll`.
 *
 * @param {string[]} selectors
 * Array of possible selectors.
 * If selector results to some elements,
 * then these elements will be returned,
 * otherwise next selector will be used.
 * @param {document | HTMLElement} root
 * A root in which elements will be searched.
 * Defaults to `document`.
 *
 * @returns {HTMLElement[]}
 * HTML elements if finded, otherwise empty array.
 *
 * @throws
 * Throws an error if `root == null`.
 */
export function querySelectorAll(
    selectors,
    root = document
) {
    if (root == null) {
        throw new Error('Passed root element does not exists');
    }

    let value = null;

    for (const selector of selectors) {
        value = root.querySelectorAll(selector);

        if (value.length > 0) {
            break;
        }
    }

    if (value) {
        return Array.from(value);
    }

    return [];
}
