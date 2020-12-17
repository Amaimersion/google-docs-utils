import {kixLine} from './selectors';
import {querySelectorAll} from './query-selector';
import getPagesElements from './get-pages-elements';


/**
 * @returns {HTMLElement[]}
 * All rendered pages of editor.
 */
export default function getLinesElements() {
    const pages = getPagesElements();
    let result = [];

    for (const page of pages) {
        const lines = querySelectorAll(kixLine, page);
        result = [
            ...result,
            ...lines
        ];
    }

    return result;
}
