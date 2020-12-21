import getCaretElement from './get-caret-element';
import getWordElements from './get-word-elements';
import {isRectsOverlap, getCharRect} from './utils';


/**
 * @returns
 * Information about caret.
 * `null` if unable to get information.
 */
export default function getCaret() {
    const caretElement = getCaretElement();

    if (!caretElement) {
        return null;
    }

    const wordElements = getWordElements();

    if (!wordElements.length) {
        return null;
    }

    const caretRect = caretElement.getBoundingClientRect();
    const result = {
        element: null,
        wordElement: null,
        lineIndex: null,
        positionIndex: null
    };

    for (let i = 0; i !== wordElements.length; i++) {
        const wordElement = wordElements[i];
        const wordRect = wordElement.getBoundingClientRect();
        const isOverlap = isRectsOverlap(caretRect, wordRect);

        if (!isOverlap) {
            continue;
        }

        result.element = caretElement;
        result.wordElement = wordElement;
        result.lineIndex = i;
        result.positionIndex = calculatePositionIndex(
            wordRect,
            caretRect,
            wordElement.textContent,
            wordElement.style.cssText
        );

        break;
    }

    return result;
}


/**
 * @param {DOMRectReadOnly} wordRect
 * @param {DOMRectReadOnly} caretRect
 * @param {string} text
 * "Dirty" `textContent` is expected.
 * In case of "Dirty" empty spaces will be
 * handled correctly.
 * @param {string} textCSS
 *
 * @returns
 * On what position caret is placed on a line.
 * For example, `1` means caret is placed before
 * second character of line text.
 */
function calculatePositionIndex(wordRect, caretRect, text, textCSS) {
    let virtualCaretLeft = wordRect.left - caretRect.width;
    let localIndex = 0;

    for (const char of text) {
        const charRect = getCharRect(char, textCSS);

        // we should ignore special invisible
        // characters like ZWNJ or NBSP
        if (charRect.width === 0) {
            continue;
        }

        virtualCaretLeft += charRect.width;

        if (virtualCaretLeft >= caretRect.left) {
            break;
        }

        localIndex += 1;
    }

    return localIndex;
}
