import getSelectionElements from './get-selection-overlay-elements';
import getWordElements from './get-word-elements';
import clearTextContent from './clear-text-content';
import {getCharRect} from './utils';


/**
 * @returns
 *
 * @throws
 * Throws an error if unable to get information
 * about current selection for at least one line.
 */
export default function getSelection() {
    const selectionElements = getSelectionElements();
    const wordElements = getWordElements();

    if (selectionElements.length !== wordElements.length) {
        throw new Error(
            'Unable to map selection elements and word elements'
        );
    }

    const count = Math.min(
        selectionElements.length,
        wordElements.length
    );
    const result = [];
    const emptyValue = null;

    for (let i = 0; i !== count; i++) {
        const selectionElement = selectionElements[i];
        const wordElement = wordElements[i];

        if (!selectionElement || !wordElement) {
            result.push(emptyValue);

            continue;
        }

        const originalText = clearTextContent(wordElement.textContent);
        const textCSS = wordElement.style.cssText;
        const wordRect = wordElement.getBoundingClientRect();
        const selectionRect = selectionElement.getBoundingClientRect();
        const selectionIndexes = calculateSelectionIndexes(
            originalText,
            textCSS,
            wordRect,
            selectionRect
        );
        const notSelected = (!selectionIndexes);

        if (notSelected) {
            result.push(emptyValue);

            continue;
        }

        const selectedText = originalText.substring(
            selectionIndexes.start,
            selectionIndexes.end
        );

        result.push({
            text: originalText,
            selectedText: selectedText,
            selectionStart: selectionIndexes.start,
            selectionEnd: selectionIndexes.end,
            textRect: wordRect,
            selectionRect: selectionRect,
            textElement: wordElement,
            selectionElement: selectionElement
        });
    }

    return result;
}


/**
 * Calculates text selection indexes based on
 * DOM rect of text element and selection element.
 *
 * @param {string} text
 * Original text.
 * @param {string} textCSS
 * CSS of rendered original text.
 * @param {DOMRectReadOnly} textRect
 * DOM rect of text element.
 * @param {DOMRectReadOnly} selectionRect
 * DOM rect of selection element.
 *
 * @returns
 * Indexes of current text selection.
 * They can be used, for example, for `substring()`.
 * `null` will be returned if nothing is selected.
 */
function calculateSelectionIndexes(
    text,
    textCSS,
    textRect,
    selectionRect
) {
    let virtualCaretLeft = textRect.left;
    let selected = false;
    let selectionStart = 0;
    let selectionEnd = text.length;

    for (let i = 0; i !== text.length; i++) {
        const isOverlap = (
            (selectionRect.left <= virtualCaretLeft) &&
            (virtualCaretLeft < selectionRect.right)
        );

        if (isOverlap) {
            if (!selected) {
                selectionStart = i;
                selected = true;
            }
        } else {
            if (selected) {
                selectionEnd = i;
                break;
            }
        }

        const char = text[i];
        const charRect = getCharRect(char, textCSS);
        virtualCaretLeft += charRect.width;
    }

    const selectionIndexes = {
        start: selectionStart,
        end: selectionEnd,
    };

    return (selected ? selectionIndexes : null);
}
