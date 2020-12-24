import {docsEditor} from './common/selectors';
import {querySelector} from './common/query-selector';


/**
 * @returns
 * Current active editor element.
 * NOTE: it contains only editor element itself,
 * not bar and other elements.
 */
export default function getEditorElement() {
    return querySelector(docsEditor);
}
