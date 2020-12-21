import getCaret from './get-caret';
import clearTextContent from './clear-text-content';


/**
 * @returns
 * A word on which caret is currently located.
 */
export default function getCaretWord() {
    const caret = getCaret();

    if (!caret) {
        return null;
    }

    const caretText = clearTextContent(caret.wordElement.textContent);
    const result = {
        word: '',
        text: caretText,
        indexStart: caret.positionIndex,
        indexEnd: caret.positionIndex
    };

    // not strict `>=`, because we may shift
    // by one to the left in further
    if (caret.positionIndex > caretText.length) {
        return result;
    }

    const indexStart = getBoundaryIndex(caret.positionIndex, caretText, true);
    const indexEnd = getBoundaryIndex(caret.positionIndex, caretText, false);

    result.indexStart = indexStart;
    result.indexEnd = indexEnd;
    result.word = caretText.substring(indexStart, indexEnd);

    return result;
}


/**
 * @param {number} startIndex
 * From where to start search a word boundary.
 * @param {string} text
 * Full text.
 * @param {bool} toLeft
 * `true` for left direction,
 * `false` for right direction.
 *
 * @returns {number}
 * Index of word boundary that can be used for `substring()`.
 *
 * @example
 * ```
 * const text = 'one two three';
 * const start = getBoundaryIndex(5, text, true) // => 4;
 * const end = getBoundaryIndex(5, text, false) // => 7;
 *
 * text.substring(start, end); // => 'two'
 * ```
 *
 * @example
 * ```
 * const text = 'one two three';
 * const start = getBoundaryIndex(3, text, true) // => 0;
 * const end = getBoundaryIndex(3, text, false) // => 3;
 *
 * text.substring(start, end); // => 'one'
 * ```
 *
 * @example
 * ```
 * const text = 'one  two three'; // notice extra space
 * const start = getBoundaryIndex(4, text, true) // => 4;
 * const end = getBoundaryIndex(4, text, false) // => 4;
 *
 * text.substring(start, end); // => ''
 * ```
 *
 * @example
 * ```
 * const text = '  one two three'; // notice extra spaces
 * const start = getBoundaryIndex(1, text, true) // => 1;
 * const end = getBoundaryIndex(1, text, false) // => 1;
 *
 * text.substring(start, end); // => 'one'
 * ```
 */
function getBoundaryIndex(startIndex, text, toLeft) {
    let isEnd = undefined;
    let move = undefined;
    let undoMove = undefined;

    if (toLeft) {
        isEnd = (index) => (index <= 0);
        move = (index) => (index - 1);
        undoMove = (index) => (index + 1);
    } else {
        isEnd = (index) => (index >= text.length);
        move = (index) => (index + 1);
        undoMove = (index) => (index - 1);
    }

    let boundaryIndex = startIndex;
    let character = text[boundaryIndex];

    // in case if we at the end of word,
    // let's shift to the left by one in order
    // next `while` algorithm handle that case correctly
    if (
        toLeft &&
        charIsOutOfWord(character) &&
        !isEnd(boundaryIndex)
    ) {
        boundaryIndex = move(boundaryIndex)
        character = text[boundaryIndex];

        // there is no word boundary after shift by one,
        // we should initial start index without move
        if (charIsOutOfWord(character)) {
            return startIndex;
        }
    }

    while (
        !charIsOutOfWord(character) &&
        !isEnd(boundaryIndex)
    ) {
        boundaryIndex = move(boundaryIndex)
        character = text[boundaryIndex];
    }

    // if previous `while` ended because of `charIsOutOfWord`,
    // then now we have boundary index for invalid character.
    // It is expected result for `toLeft = false` because in that
    // case we want exclude such character from `substring()`,
    // but in case of `toLeft = true` we don't want include invalid
    // word boundary character in `substring()`.
    if (
        toLeft &&
        !isEnd(boundaryIndex)
    ) {
        boundaryIndex = undoMove(boundaryIndex);
    }

    return boundaryIndex;
}


/**
 * @param {string} character
 *
 * @returns
 * Character is outside of word boundary.
 */
function charIsOutOfWord(character) {
    if (character == null) {
        return true;
    }

    return (character.match(/[\w]/) == null);
}
