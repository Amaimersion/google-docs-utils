/**
 * This file exposes methods that is intended for public usage.
 *
 * - order and structure of imports doesn't matter
 */


import getEditorElement from './get-editor-element';
import getTextEventTarget from './get-text-event-target';
import getPagesElements from './get-pages-elements';
import getLinesElements from './get-lines-elements';
import getLinesTextElements from './get-lines-text-elements';
import getLinesText from './get-lines-text';
import getLineText from './get-line-text';
import clearTextContent from './clear-text-content';
import getWordElements from './get-word-elements';
import getSelectionOverlayElements from './get-selection-overlay-elements';
import getSelection from './get-selection';
import getCursorElement from './get-cursor-element';
import getActiveCursorElement from './get-active-cursor-element';
import getCaretElement from './get-caret-element';
import getCaret from './get-caret';
import getCaretWord from './get-caret-word';
import * as pressOn from './press-on';
import typeText from './type-text';
import isTextSelected from './is-text-selected';
import isDocumentActive from './is-document-active';
import focusDocument from './focus-document';
import * as moveCursorTo from './move-cursor-to';
import * as remove from './remove';
import * as select from './select';
import {
    addEventListener
} from './mutation-observer';


export {
    getEditorElement,
    getTextEventTarget,
    getPagesElements,
    getLinesElements,
    getLinesTextElements,
    getLinesText,
    getLineText,
    clearTextContent,
    getWordElements,
    getSelectionOverlayElements,
    getSelection,
    getCursorElement,
    getActiveCursorElement,
    getCaretElement,
    getCaret,
    getCaretWord,
    pressOn,
    typeText,
    isTextSelected,
    isDocumentActive,
    focusDocument,
    remove,
    moveCursorTo,
    select,
    addEventListener
};
