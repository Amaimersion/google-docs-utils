import {getCharRect} from './common/utils';
import getSelectionElements from './get-selection-overlay-elements';
import getWordElements from './get-word-elements';
import clearTextContent from './clear-text-content';


/**
 * @returns {Array<null | Array<object | null>>}
 * Selection data for every rendered line.
 * `[]` - represents line, `[][]` - represents all
 * selected word nodes.
 * `[]` - element will be `null` if that line doesn't
 * contains selection at all, otherwise it will be array.
 * `[][]` - it is all selected word nodes (see `getWordElements()`
 * documentation for more). If word node not selected (i.e., selection
 * don't overlaps that node), then value will be `null`, otherwise
 * it will be an object that describes selection of that word node.
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

        if (!selectionElement) {
            result.push(emptyValue);

            continue;
        }

        const line = wordElements[i];
        const lineSelection = [];

        for (const wordElement of line) {
            if (!wordElement) {
                lineSelection.push(emptyValue);

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
                lineSelection.push(emptyValue);

                continue;
            }

            const selectedText = originalText.substring(
                selectionIndexes.start,
                selectionIndexes.end
            );

            lineSelection.push({
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

        result.push(lineSelection);
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
