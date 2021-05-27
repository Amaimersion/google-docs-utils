import {keypress, keydown} from './common/keyboard-event';
import getTextEventTarget from './get-text-event-target';


//#region Base

/**
 * Imitates physical press on single character.
 */
export function Character(char, {
    ctrlKey = false,
    shiftKey = false
} = {}) {
    // Google Docs handles `keydown` event in case of
    // "ctrl" or "shift" modificators, otherwise `keypress`
    // event should be used for normal characters
    if (ctrlKey || shiftKey) {
        keydown(
            getTextEventTarget(),
            char,
            null,
            null,
            {
                ctrlKey,
                shiftKey
            }
        );
    } else {
        keypress(
            getTextEventTarget(),
            char
        );
    }
}

/**
 * Imitates physical press on "Backspace".
 *
 * @param {boolean} ctrlKey
 */
export function Backspace({
    ctrlKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'Backspace',
        'Backspace',
        8,
        {
            ctrlKey
        }
    );
}

/**
 * Imitates physical press on "Tab".
 */
export function Tab() {
    keydown(
        getTextEventTarget(),
        'Tab',
        'Tab',
        9
    );
}

/**
 * Imitates physical press on "Enter".
 */
export function Enter() {
    keydown(
        getTextEventTarget(),
        'Enter',
        'Enter',
        13
    );
}

/**
 * Imitates physical press on space character.
 */
export function Space() {
    keypress(
        getTextEventTarget(),
        '\u0020',
        'Space',
        32
    );
}

/**
 * Imitates physical press on "End" button.
 */
export function End({
    ctrlKey = false,
    shiftKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'End',
        'End',
        35,
        {
            ctrlKey,
            shiftKey
        }
    );
}

/**
 * Imitates physical press on "Home" button.
 */
export function Home({
    ctrlKey = false,
    shiftKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'Home',
        'Home',
        36,
        {
            ctrlKey,
            shiftKey
        }
    );
}

/**
 * Imitates physical press on left arrow.
 */
export function ArrowLeft({
    ctrlKey = false,
    shiftKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'ArrowLeft',
        'ArrowLeft',
        37,
        {
            ctrlKey,
            shiftKey
        }
    );
}

/**
 * Imitates physical press on up arrow.
 */
export function ArrowUp({
    ctrlKey = false,
    shiftKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'ArrowUp',
        'ArrowUp',
        38,
        {
            ctrlKey,
            shiftKey
        }
    );
}

/**
 * Imitates physical press on right arrow.
 */
export function ArrowRight({
    ctrlKey = false,
    shiftKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'ArrowRight',
        'ArrowRight',
        39,
        {
            ctrlKey,
            shiftKey
        }
    );
}

/**
 * Imitates physical press on down arrow.
 */
export function ArrowDown({
    ctrlKey = false,
    shiftKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'ArrowDown',
        'ArrowDown',
        40,
        {
            ctrlKey,
            shiftKey
        }
    );
}

/**
 * Imitates physical press on "Delete" ("Del").
 */
export function Delete({
    ctrlKey = false
} = {}) {
    keydown(
        getTextEventTarget(),
        'Delete',
        'Delete',
        46,
        {
            ctrlKey
        }
    );
}

//#endregion


//#region Dependence

/**
 * Imitates physical press on "Undo" button.
 */
export function Undo() {
    Character('z', {
        ctrlKey: true
    });
}

/**
 * Imitates physical press on "Redo" button.
 */
export function Redo() {
    Character('y', {
        ctrlKey: true
    });
}

/**
 * Imitates physical press on "Print" button
 * (print dialog, not print of character).
 */
export function PrintDialog() {
    Character('p', {
        ctrlKey: true
    });
}

/**
 * Imitates physical press on "Bold" button.
 */
export function Bold() {
    Character('b', {
        ctrlKey: true
    });
}

/**
 * Imitates physical press on "Italic" button.
 */
export function Italic() {
    Character('i', {
        ctrlKey: true
    });
}

/**
 * Imitates physical press on "Underline" button.
 */
export function Underline() {
    Character('u', {
        ctrlKey: true
    });
}

//#endregion
