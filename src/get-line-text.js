import getLinesText from './get-lines-text';


/**
 * @param {number} lineIndex
 * @param {number} startIndex
 * @param {number} endIndex
 *
 * @returns
 * Text of specific line.
 */
export default function getLineText(
    lineIndex,
    startIndex = undefined,
    endIndex = undefined
) {
    const linesText = getLinesText();

    if (lineIndex >= linesText.length) {
        return null;
    }

    const text = linesText[lineIndex];

    if (startIndex == null) {
        startIndex = 0;
    }

    if (endIndex == null) {
        endIndex = text.length;
    }

    return text.substring(startIndex, endIndex);
}
