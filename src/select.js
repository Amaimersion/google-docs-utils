import * as pressOn from './press-on';
import focusDocument from './focus-document';


/**
 * Selects text of entire document.
 */
export function All() {
    pressOn.Character('a', {
        ctrlKey: true
    });
}


/**
 * Selects a character that is placed to the left of
 * current cursor position. Following logic will be used,
 * with priority of actions from top to bottom:
 * - if at least one character already selected with reverse selection
 * (opposite direction), then lastly selected character will be deselected
 * - if at least one character already selected, then next one will
 * be selected. If that next character located on previous line,
 * than that previous line will be used
 * - if nothing selected, then first character will be selected
 */
export function PrevCharacter() {
    pressOn.ArrowLeft({
        shiftKey: true
    });
}


/**
 * Selects a character that is placed to the right of
 * current cursor position. Following logic will be used,
 * with priority of actions from top to bottom:
 * - if at least one character already selected with reverse selection
 * (opposite direction), then lastly selected character will be deselected
 * - if at least one character already selected, then next one will
 * be selected. If that next character located on next line,
 * than that next line will be used
 * - if nothing selected, then first character will be selected
 */
export function NextCharacter() {
    pressOn.ArrowRight({
        shiftKey: true
    });
}


/**
 * Same as `PrevCharacter`, but performs an action with word.
 */
export function PrevWord() {
    pressOn.ArrowLeft({
        shiftKey: true,
        ctrlKey: true
    });
}


/**
 * Same as `NextCharacter`, but performs an action with word.
 */
export function NextWord() {
    pressOn.ArrowRight({
        shiftKey: true,
        ctrlKey: true
    });
}


/**
 * Selects N number of characters to the left where N
 * is a max length of line.
 */
export function PrevLine() {
    // requires focus to behave correctly
    focusDocument();

    pressOn.ArrowUp({
        shiftKey: true
    });
}


/**
 * Same as `PrevLine`, but uses right direction.
 */
export function NextLine() {
    // requires focus to behave correctly
    focusDocument();

    pressOn.ArrowDown({
        shiftKey: true
    });
}


/**
 * Selects a paragraph that is placed to the left of
 * current cursor position. Following logic will be used,
 * with priority of actions from top to bottom:
 * - if it is start of current paragraph, then previous
 * paragraph will be selected
 * - else text between current paragraph start and current
 * cursor position will be selected
 */
export function PrevParagraph() {
    pressOn.ArrowUp({
        shiftKey: true,
        ctrlKey: true
    });
}


/**
 * Selects a paragraph that is placed to the right of
 * current cursor position. Following logic will be used,
 * with priority of actions from top to bottom:
 * - if it is end of current paragraph, then next
 * paragraph will be NOT selected
 * - else text between current paragraph end and current
 * cursor position will be selected
 */
export function NextParagraph() {
    pressOn.ArrowDown({
        shiftKey: true,
        ctrlKey: true
    });
}


/**
 * Selects a text between current cursor position and
 * current line start.
 */
export function TextBetweenCursorAndLineStart() {
    // requires focus to behave correctly
    focusDocument();

    pressOn.Home({
        shiftKey: true
    });
}


/**
 * Same as `TextBetweenCursorAndLineStart`, but interacts
 * with current line end.
 */
export function TextBetweenCursorAndLineEnd() {
    // requires focus to behave correctly
    focusDocument();

    pressOn.End({
        shiftKey: true
    });
}


/**
 * Same as `TextBetweenCursorAndLineStart`, but interacts
 * with document start.
 */
export function TextBetweenCursorAndDocumentStart() {
    pressOn.Home({
        shiftKey: true,
        ctrlKey: true
    });
}


/**
 * Same as `TextBetweenCursorAndLineStart`, but interacts
 * with document end.
 */
export function TextBetweenCursorAndDocumentEnd() {
    pressOn.End({
        shiftKey: true,
        ctrlKey: true
    });
}
