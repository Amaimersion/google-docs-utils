// Type definitions for google-docs-utils 2.1
// Project: https://github.com/Amaimersion/google-docs-utils/blob/master/README.md
// Definitions by: Sergey Kuznetsov <https://github.com/Amaimersion>
// Definitions: https://github.com/Amaimersion/google-docs-utils
// TypeScript Version: 4.1


//#region Private

type QuerySelectorResult<T = HTMLElement> = T | null;
type QuerySelectorAllResult<T = HTMLElement> = T[];

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
    positionIndex: number;
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

export function getWordElements(): QuerySelectorAllResult;

export function getSelectionOverlayElements(): QuerySelectorAllResult;

export function getSelection(): Array<GetSelectionResult | null>;

export function getCursorElement(): QuerySelectorResult;

export function getActiveCursorElement(): QuerySelectorResult;

export function getCaretElement(): QuerySelectorResult;

export function getCaret(): GetCaretResult | null;

export function getCaretWord(): GetCaretWordResult | null;

export const pressOn: {
    Character: (char: string) => void,
    Space: () => void,
    Delete: () => void,
    Backspace: () => void,
    Enter: () => void,
    Tab: () => void,
    ArrowLeft: () => void,
    ArrowRight: () => void,
    ArrowUp: () => void,
    ArrowDown: () => void
};

export function typeText(text: string): void;

//#endregion
