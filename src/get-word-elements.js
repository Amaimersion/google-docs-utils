import {kixWordNone} from './common/selectors';
import {querySelectorAll} from './common/query-selector';
import getLinesElements from './get-lines-elements';


/**
 * @returns {Array<HTMLElement[]>}
 * Each element is a line, each of elements
 * of that line is a word node of that line.
 * These word nodes contains actual text of line.
 *
 * NOTE:
 * if text of line contains various formatting (font, bold, etc.),
 * then it will be splitted into several word nodes.
 * For example, "some [Arial font] text [Roboto font]" will be
 * splitted into two nodes, "some text [Arial font]" will be
 * represented as one node and "another [Arial font, normal]
 * text [Arial font, bold]" will be splitted into two nodes.
 */
export default function getWordElements() {
    const lines = getLinesElements();
    const result = [];

    for (const line of lines) {
        const nodes = querySelectorAll(kixWordNone, line);
        result.push(nodes);
    }

    return result;
}
