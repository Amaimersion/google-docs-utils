// Type definitions for google-docs-utils 2.2
// Project: https://github.com/Amaimersion/google-docs-utils/blob/master/README.md
// Definitions by: Sergey Kuznetsov <https://github.com/Amaimersion>
// Definitions: https://github.com/Amaimersion/google-docs-utils
// TypeScript Version: 4.1


//#region Private

type QuerySelectorResult<T = HTMLElement> = T | null;
type QuerySelectorAllResult<T = HTMLElement> = T[];
type CtrlModificator = {
    ctrlKey?: boolean;
};
type ShiftModificator = {
    shiftKey?: boolean;
};
type CtrlShiftModificator = (
    CtrlModificator &
    ShiftModificator
);

interface GetSelectionResult {
    text: string;
    selectedText: string;
    selectionStart: number;
    selectionEnd: number;
    textRect: DOMRectReadOnly;
    selectionRect: DOMRectReadOnly;
    textElement: HTMLElement;
    selectionElement: HTMLElement;
}

interface GetCaretResult {
    element: HTMLElement;
    wordElement: HTMLElement;
    lineIndex: number;
    positionIndexRelativeToWord: number;
}

interface GetCaretWordResult {
    word: string;
    text: string;
    indexStart: number;
    indexEnd: number;
}

//#endregion


//#region Public

export function getEditorElement(): QuerySelectorResult;

export function getTextEventTarget(): QuerySelectorResult<Document | HTMLElement>;

export function getPagesElements(): QuerySelectorAllResult;

export function getLinesElements(): QuerySelectorAllResult;

export function getLinesTextElements(): QuerySelectorAllResult;

export function getLinesText(): string[];

export function getLineText(
    lineIndex: number,
    startIndex?: number,
    endIndex?: number
): string | null;

export function clearTextContent(textContent: string): string;

export function getWordElements(): QuerySelectorAllResult[];

export function getSelectionOverlayElements(): QuerySelectorAllResult;

export function getSelection(): Array<null | Array<GetSelectionResult | null>>;

export function getCursorElement(): QuerySelectorResult;

export function getActiveCursorElement(): QuerySelectorResult;

export function getCaretElement(): QuerySelectorResult;

export function getCaret(): GetCaretResult | null;

export function getCaretWord(): GetCaretWordResult | null;

export const pressOn: {
    Character: (char: string, modificator?: CtrlShiftModificator) => void,
    Space: () => void,
    Delete: (modificator?: CtrlModificator) => void,
    Backspace: (modificator?: CtrlModificator) => void,
    Enter: () => void,
    Tab: () => void,
    ArrowLeft: (modificator?: CtrlShiftModificator) => void,
    ArrowRight: (modificator?: CtrlShiftModificator) => void,
    ArrowUp: (modificator?: CtrlShiftModificator) => void,
    ArrowDown: (modificator?: CtrlShiftModificator) => void,
    Undo: () => void,
    Redo: () => void,
    PrintDialog: () => void,
    End: (modificator?: CtrlShiftModificator) => void,
    Home: (modificator?: CtrlShiftModificator) => void,
    Bold: () => void,
    Italic: () => void,
    Underline: () => void
};

export function typeText(text: string): void;

export function isTextSelected(): boolean;

export function isDocumentActive(): boolean;

export function deleteSelection(): boolean;

export function focusDocument(): boolean;

//#endregion
