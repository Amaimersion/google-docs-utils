import {kixLineText} from './common/selectors';
import {querySelector} from './common/query-selector';
import getLinesElements from './get-lines-elements';


/**
 * @returns {HTMLElement[]}
 * Text elements of each line.
 * Every text element contains all word elements
 * (there can be multiple word elements for one text element).
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
