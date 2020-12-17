import getLinesTextElements from './get-lines-text-elements';
import clearTextContent from './clear-text-content';


/**
 * @returns
 * Text of every editor line.
 * If line is empty, then zero length string
 * will be returned for that line.
 */
export default function getLinesText() {
    const lines = getLinesTextElements();
    const result = [];

    for (const line of lines) {
        // difference between `textContent` and `innerText` is matters!
        let value = line.textContent;

        value = clearTextContent(value);
        value = clearLineText(value);

        result.push(value);
    }

    return result;
}


/**
 * @param {string} value
 */
function clearLineText(value) {
    return value.trim();
}
