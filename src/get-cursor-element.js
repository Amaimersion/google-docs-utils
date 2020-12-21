import {querySelector} from './query-selector';
import {kixCursor} from './selectors';
import getEditorElement from './get-editor-element';


/**
 * @returns {HTMLElement}
 * User cursor.
 */
export default function getCursorElement() {
    const editor = getEditorElement();

    return querySelector(kixCursor, editor);
}
