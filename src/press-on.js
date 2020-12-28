import {keypress, keydown} from './common/keyboard-event';
import getTextEventTarget from './get-text-event-target';


/**
 * Imitates physical press on single character.
 *
 * @param {string} char
 */
export function Character(char) {
    // `keypress` event should be used for characters, because
    // Google Docs don't handles `keydown` for characters
    keypress(
        getTextEventTarget(),
        char
    );
}


/**
 * Imitates physical press on space character.
 */
export function Space() {
    keypress(
        getTextEventTarget(),
        ' ',
        'Space',
        32
    );
}


/**
 * Imitates physical press on "Delete" ("Del").
 */
export function Delete() {
    keydown(
        getTextEventTarget(),
        'Delete',
        'Delete',
        46
    );
}


/**
 * Imitates physical press on "Backspace".
 */
export function Backspace() {
    keydown(
        getTextEventTarget(),
        'Backspace',
        'Backspace',
        8
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
 * Imitates physical press on left arrow.
 */
export function ArrowLeft() {
    keydown(
        getTextEventTarget(),
        'ArrowLeft',
        'ArrowLeft',
        37
    );
}


/**
 * Imitates physical press on right arrow.
 */
export function ArrowRight() {
    keydown(
        getTextEventTarget(),
        'ArrowRight',
        'ArrowRight',
        39
    );
}


/**
 * Imitates physical press on up arrow.
 */
export function ArrowUp() {
    keydown(
        getTextEventTarget(),
        'ArrowUp',
        'ArrowUp',
        38
    );
}


/**
 * Imitates physical press on down arrow.
 */
export function ArrowDown() {
    keydown(
        getTextEventTarget(),
        'ArrowDown',
        'ArrowDown',
        40
    );
}


/**
 * Imitates physical press on "Undo" button.
 */
export function Undo() {
    keydown(
        getTextEventTarget(),
        'z',
        null,
        null,
        {
            ctrlKey: true
        }
    );
}


/**
 * Imitates physical press on "Redo" button.
 */
export function Redo() {
    keydown(
        getTextEventTarget(),
        'y',
        null,
        null,
        {
            ctrlKey: true
        }
    );
}


/**
 * Imitates physical press on "Select all" button.
 */
export function SelectAll() {
    keydown(
        getTextEventTarget(),
        'a',
        null,
        null,
        {
            ctrlKey: true
        }
    );
}
