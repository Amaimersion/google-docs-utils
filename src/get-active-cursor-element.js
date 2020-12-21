import {querySelector} from './query-selector';
import {kixActiveCursor} from './selectors';
import getEditorElement from './get-editor-element';


/**
 * @returns {HTMLElement}
 * User active blinked cursor.
 */
export default function getActiveCursorElement() {
    const editor = getEditorElement();

    return querySelector(kixActiveCursor, editor);
}
