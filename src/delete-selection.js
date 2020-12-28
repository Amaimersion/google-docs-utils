import * as pressOn from './press-on';
import isTextSelected from './is-text-selected';


/**
 * Removes active selection.
 *
 * @returns {boolean}
 * `true` - selection was removed,
 * `false` - nothing to remove (nothing is selected)
 */
export default function deleteSelection() {
    if (!isTextSelected()) {
        return false;
    }

    // "Delete" should be used, not "Backspace".
    pressOn.Delete();

    return true;
}
