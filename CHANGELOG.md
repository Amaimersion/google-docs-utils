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
