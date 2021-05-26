import isDocumentActive from './is-document-active';
import isTextSelected from './is-text-selected';
import {
    Character as PressOnCharacter,
    Undo as PressOnUndo,
    Backspace as PressOnBackspace
} from './press-on';


/**
 * Focuses on current document.
 *
 * "Focus" means that document is active and available for editing:
 * cursor is blinking or selection active.
 *
 * @returns {boolean}
 * `true` if there was any actions to perform a focus,
 * `false` if document already was active and nothing was performed.
 */
export default function focusDocument() {
    if (isDocumentActive()) {
        return false;
    }

    // character that is acceptable by Google Docs should be used.
    // For example, `\u0000` is not acceptable and will be not typed.
    // Use something from this plane:
    // https://www.compart.com/en/unicode/plane/U+0000
    const randomCharToCreateFocus = '\u003F';

    const textSelected = isTextSelected();

    PressOnCharacter(randomCharToCreateFocus);

    // if selection existed, then at the moment we removed it.
    // lets restore it, otherwise we will delete typed character
    if (textSelected) {
        PressOnUndo();
    } else {
        PressOnBackspace();
    }

    return true;
}
