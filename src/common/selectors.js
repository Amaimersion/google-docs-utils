/**
 * Selectors to find element in the page.
 *
 * Use array of strings, not just single string value.
 * It is means there can be multiple selectors for single
 * element, in descending order of priority.
 * For example, if selector № 1 returned some result, then
 * that result will be used, otherwise selector № 2 will
 * be used to try to get valid result, etc.
 * If there only one value, then use array with one element.
 */


export const docsEditorContainer = [
    '#docs-editor-container'
];

export const docsEditor = [
    '#docs-editor',
    ...docsEditorContainer
];

export const textEventTarget = [
    'iframe.docs-texteventtarget-iframe',
    '.docs-texteventtarget-iframe'
];

export const kixPage = [
    '.kix-page',
    '.docs-page'
];

export const kixLine = [
    '.kix-lineview',
    '.kix-paragraphrenderer'
];

export const kixLineText = [
    '.kix-lineview-text-block'
];

export const kixWordNone = [
    '.kix-wordhtmlgenerator-word-node'
];

export const kixSelectionOverlay = [
    '.kix-selection-overlay'
];

export const kixCursor = [
    '.kix-cursor'
];

export const kixActiveCursor = [
    '.docs-text-ui-cursor-blink'
];

export const kixCursorCaret = [
    '.kix-cursor-caret'
];
