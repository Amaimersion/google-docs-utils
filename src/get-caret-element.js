import {querySelector} from './common/query-selector';
import {kixCursorCaret} from './common/selectors';
import getCursorElement from './get-cursor-element';


/**
 * @returns {HTMLElement | null}
 * Caret of user active cursor.
 */
export default function getCaretElement() {
    const activeCursor = getCursorElement();

    if (!activeCursor) {
        return null;
    }

    return querySelector(kixCursorCaret, activeCursor);
}
