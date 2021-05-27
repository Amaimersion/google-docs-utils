import * as pressOn from './press-on';
import isTextSelected from './is-text-selected';


/**
 * Removes:
 * - if prev word is present, then it will be removed
 * - else content from current line will be divided with prev line
 */
export function PrevWord() {
    pressOn.Backspace({
        ctrlKey: true
    });
}


/**
 * Removes:
 * - if next word is present, then it will be removed
 * - else content from current line will be divided with next line
 */
export function NextWord() {
    pressOn.Delete({
        ctrlKey: true
    });
}


/**
 * Removes active selection.
 *
 * @returns {boolean}
 * `true` - selection was removed,
 * `false` - nothing to remove (nothing is selected)
 */
 export function Selection() {
    if (!isTextSelected()) {
        return false;
    }

    // "Delete" should be used, not "Backspace".
    pressOn.Delete();

    return true;
}
