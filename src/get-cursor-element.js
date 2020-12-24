import {querySelector} from './common/query-selector';
import {kixCursor} from './common/selectors';
import getEditorElement from './get-editor-element';


/**
 * @returns {HTMLElement}
 * User cursor.
 */
export default function getCursorElement() {
    const editor = getEditorElement();

    return querySelector(kixCursor, editor);
}
