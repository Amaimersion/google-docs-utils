# 2.3.0

- Add `isDocumentActive`: check if document is focused and active.
- Add `focusDocument`: make document focused and active.
- Add `remove` namespace which includes `PrevWord`, `NextWord`, `Selection` methods. Using these methods you can remove document objects.
- Add `moveCursorTo` namespace which includes `PrevCharacter`, `NextCharacter`, `PrevLine`, `NextLine`, `PrevWord`, `NextWord`, `PrevParagraph`, `NextParagraph`, `LineStart`, `LineEnd`, `DocumentStart`, `DocumentEnd` methods. Using these methods you can move cursor over the document.
- Add `select` namespace which includes `All`, `PrevCharacter`, `NextCharacter`, `PrevWord`, `NextWord`, `PrevLine`, `NextLine`, `PrevParagraph`, `NextParagraph`, `TextBetweenCursorAndLineStart`, `TextBetweenCursorAndLineEnd`, `TextBetweenCursorAndDocumentStart`, `TextBetweenCursorAndDocumentEnd` methods. Using these methods you can select text content in document. [#3](https://github.com/Amaimersion/google-docs-utils/issues/3)
- `deleteSelection`: **BREAKING CHANGES:** moved into `remove.Selection`.
- `pressOn`: **BREAKING CHANGES:** `SelectAll` moved to `select.All`. Added: `Home`, `End`, `Bold`, `Italic`, `Underline`. `Character`, `Delete`, `Backspace`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown` can accept optional modificator flag (Ctrl or Shift).


# 2.2.1 (May 28, 2021)

- **WARNING**: this library may no longer work after July 2021. See `README` for more.


# 2.2.0 (April 16, 2021)

- `getWordElements()`: fixed a bug when text of line with different formatting not handled correctly. **BREAKING CHANGES:** now it will return array of arrays. See documentation for more. [#4](https://github.com/Amaimersion/google-docs-utils/issues/4)
- `getSelection()`: fixed a bug when text of line with different formatting not handled correctly. **BREAKING CHANGES:** now it will return array of arrays. See documentation for more.
- `getCaret()`: **BREAKING CHANGES:** `positionIndex` renamed to `positionIndexRelativeToWord`. See documentation for more.
- `getCaretWord()`: fixed a bug when this method not worked with other languages but English. **WARNING:** it still not work with languages which doesn't have upper and lower symbols (Chinese, Japanese, Arabic, Hebrew, etc.).
- `getLinesTextElements()`, `getLinesText()`, `getCaret()`: fixed a bug when text of line with different formatting not handled correctly.
- Added documentation about known limitations.


# 2.1.2 (April 2, 2021)

- Improve documentation for `getTextEventTarget()` method.


# 2.1.1 (December 29, 2020)

- Add `pressOn.PrintDialog`: call print dialog.


# 2.1.0 (December 28, 2020)

- Add `pressOn` namespace which includes `Character`, `Space`, `Delete`, `Backspace`, `Enter`, `Tab`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `Undo`, `Redo`, `SelectAll` methods. Using these methods you can imitate physical key presses.
- Add `typeText`: type text at current caret position.
- Add `isTextSelected`: indicates what text is selected (at least on one line).
- Add `deleteSelection`: remove current selection.
- Add type definitions.


# 2.0.0 (December 24, 2020)

Complete refactoring of old code. Now this library can be used as both IIFE and CJS. Starting from `2.0.0` version the code have nothing common with `1.x.x` versions, excepts some core concepts.


# 1.1.0 (December 7, 2020)

- Remove `selectedText`.
- Add `selectionText`: array (mapped to lines count) of selected text.
- Add `selectionRect`: array (mapped to lines count) of `DOMRect` of selected text.
- Add `selectionNode`: array (mapped to lines count) of `HTMLElement` of selected text.


# 1.0.0 (December 7, 2020)

Forked from [JensPLarsen/ChromeExtension-GoogleDocsUtil](https://github.com/JensPLarsen/ChromeExtension-GoogleDocsUtil).

- Added NPM support.
