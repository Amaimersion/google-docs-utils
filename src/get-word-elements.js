import {kixWordNone} from './common/selectors';
import {querySelectorAll} from './common/query-selector';
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
        const nodes = querySelectorAll(kixWordNone, line);
        result.push(...nodes);
    }

    return result;
}
