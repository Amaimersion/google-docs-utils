import * as pressOn from './press-on';
import focusDocument from './focus-document';


/**
 * Moves cursor to character that is placed to the left
 * of current cursor position. If that character placed
 * on previous line, then previous line will be used
 */
export function PrevCharacter() {
    pressOn.ArrowLeft();
}


/**
 * Moves cursor to character that is placed to the right
 * of current cursor position. If that character placed
 * on next line, then next line will be used
 */
export function NextCharacter() {
    pressOn.ArrowRight();
}


/**
 * Moves cursor to the previous line and tries to keep
 * cursor position. If there is no previous line, then moves
 * cursor to the start of current paragraph
 */
export function PrevLine() {
    pressOn.ArrowUp();
}


/**
 * Moves cursor to the next line and tries to keep
 * cursor position. If there is no next line, then moves
 * cursor to the end of current paragraph
 */
export function NextLine() {
    pressOn.ArrowDown();
}


/**
 * Moves cursor to:
 * - if it is start of current line, then to
 * the end of previous word on previous line
 * - else if it is start of current word, then to
 * the start of previous word
 * - else moves to the start of current word
 */
export function PrevWord() {
    pressOn.ArrowLeft({
        ctrlKey: true
    });
}


/**
 * Moves cursor to:
 * - if it is end of current line, then to
 * the start of next word on next line
 * - else if it is end of current word, then to
 * the end of next word
 * - else moves to the end of current word
 */
export function NextWord() {
    pressOn.ArrowRight({
        ctrlKey: true
    });
}


/**
 * Moves cursor to:
 * - if it is start of current paragraph, then to
 * the start of previous paragraph
 * - else moves to the start of current paragraph
 */
export function PrevParagraph() {
    pressOn.ArrowUp({
        ctrlKey: true
    });
}


/**
 * Moves cursor to:
 * - if it is end of current paragraph, then to
 * the end of next paragraph
 * - else moves to the end of current paragraph
 */
export function NextParagraph() {
    pressOn.ArrowDown({
        ctrlKey: true
    });
}


/**
 * Moves cursor to the start of current line.
 */
export function LineStart() {
    // focus is needed in order to behave properly
    focusDocument();

    pressOn.Home();
}


/**
 * Moves cursor to the end of current line.
 */
export function LineEnd() {
    // focus is needed in order to behave properly
    focusDocument();

    pressOn.End();
}


/**
 * Moves cursor to the start of document.
 */
export function DocumentStart() {
    pressOn.Home({
        ctrlKey: true
    });
}


/**
 * Moves cursor to the end of document.
 */
export function DocumentEnd() {
    pressOn.End({
        ctrlKey: true
    });
}
