/**
 * Selectors to find element on the page.
 *
 * Use array of strings, not just single string value.
 * It is means there can be multiple selectors for that
 * element, in descending order of priority.
 * For example, if selector № 1 return some result, then
 * that value will be used, otherwise selector № 2 will
 * be used to get element, etc.
 * If there only one value, then use array with one element.
 */


export const docsEditor = [
    '#docs-editor',
    '#docs-editor-container'
];
