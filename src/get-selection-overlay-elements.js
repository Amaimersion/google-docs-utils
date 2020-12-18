import {kixSelectionOverlay} from './selectors';
import {querySelector} from './query-selector';
import getLinesElements from './get-lines-elements';


/**
 * Google Docs creates separate element to display
 * selection. It is no actual selection of text, it is
 * just an element with some style that emulates selection.
 *
 * Because of this, for example, you cannot just remove
 * selection overlay element from DOM in order to remove selection,
 * because Google Docs will restore selection at next user selection.
 *
 * @returns {HTMLElement[]}
 * Selection overlay element for each line.
 * If there are no selection for that line,
 * then `null` will be used.
 */
export default function getSelectionOverlayElements() {
    const lines = getLinesElements();
    const result = [];

    for (const line of lines) {
        const element = querySelector(kixSelectionOverlay, line);
        result.push(element);
    }

    return result;
}
