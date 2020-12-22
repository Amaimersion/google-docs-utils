import {kixPage} from './common/selectors';
import {querySelectorAll} from './common/query-selector';
import getEditorElement from './get-editor-element';


/**
 * @returns
 * All rendered pages of editor.
 */
export default function getPagesElements() {
    const editor = getEditorElement();

    return querySelectorAll(kixPage, editor);
}
