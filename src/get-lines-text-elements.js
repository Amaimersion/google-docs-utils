import {kixLineText} from './selectors';
import {querySelector} from './query-selector';
import getLinesElements from './get-lines-elements';


/**
 * @returns {HTMLElement[]}
 * Text elements of each line.
 */
export default function getLinesTextElements() {
    const lines = getLinesElements();
    const result = [];

    for (const line of lines) {
        const textElement = querySelector(kixLineText, line);

        result.push(textElement);
    }

    return result;
}
