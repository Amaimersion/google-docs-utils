import {kixWordNone} from './common/selectors';
import {querySelectorAll} from './common/query-selector';
import getLinesElements from './get-lines-elements';


/**
 * @returns {HTMLElement[]}
 * Word nodes of each line.
 * These nodes contains actual text of line.
 *
 * NOTE:
 * if text of single line contains various formatting
 * (font, etc.), then it will be splitted into several nodes.
 * For example, "some [Arial font] text [Roboto font]" will be
 * splitted into two nodes, and "some text [Arial font]" will be
 * represented as one node. So, length of `getLinesElements()`
 * not always equals to length of `getWordElements()`.
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
