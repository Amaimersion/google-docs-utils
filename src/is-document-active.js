
import getActiveCursorElement from './get-active-cursor-element';


/**
 * @returns {boolean}
 * Document is focused and active.
 * It is means that cursor is blinked.
 */
export default function isDocumentActive() {
    const activeCursor = getActiveCursorElement();
    const documentIsActive = !!activeCursor;

    return documentIsActive;
}
