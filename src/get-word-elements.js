import {kixWordNone} from './selectors';
import {querySelector} from './query-selector';
import getLinesElements from './get-lines-elements';


/**
 * @returns {HTMLElement[]}
 * Word nodes of each line.
 * These nodes contains actual text of line.
 */
export default function getWordElements() {
    const lines = getLinesElements();
    const result = [];

    for (const line of lines) {
        const node = querySelector(kixWordNone, line);
        result.push(node);
    }

    return result;
}
