# google-docs-utils

Utilities for interaction with Google Docs using JavaScript.


## Content
- [Content](#content)
- [What for?](#what-for)
- [Installation](#installation)
  - [Node.js](#nodejs)
  - [Browser](#browser)
- [Usage](#usage)
  - [Node.js](#nodejs-1)
  - [Browser](#browser-1)
- [API](#api)
  - [getEditorElement](#geteditorelement)
  - [getPagesElements](#getpageselements)
  - [getLinesElements](#getlineselements)
  - [getLinesTextElements](#getlinestextelements)
  - [getLinesText](#getlinestext)
  - [getLineText](#getlinetext)
  - [getWordElements](#getwordelements)
  - [getSelectionOverlayElements](#getselectionoverlayelements)
  - [getSelection](#getselection)
  - [getCursorElement](#getcursorelement)
  - [getActiveCursorElement](#getactivecursorelement)
  - [getCaretElement](#getcaretelement)
  - [getCaret](#getcaret)
  - [getCaretWord](#getcaretword)
  - [getTextEventTarget](#gettexteventtarget)
  - [clearTextContent](#cleartextcontent)
  - [pressOn](#presson)
    - [Character](#character)
    - [Space](#space)
    - [Delete](#delete)
    - [Backspace](#backspace)
    - [Enter](#enter)
    - [Tab](#tab)
    - [ArrowLeft](#arrowleft)
    - [ArrowRight](#arrowright)
    - [ArrowUp](#arrowup)
    - [ArrowDown](#arrowdown)
  - [typeText](#typetext)
- [Version naming](#version-naming)
- [Contributing](#contributing)
- [Project history](#project-history)
- [License](#license)


## What for?

Google Docs uses its own complex logic for displaying, storing and handling of page elements. It is good for ensuring that across many different browsers the editor is working as expected, but it makes hard to interact with document programmatically.

Examples:
- you can't just use `window.getSelection()` to get selected text. Google Docs creates two independent elements: one for text and one for selection overlay. Any events for normal selection will be canceled by Google Docs.
- you can't just change text of element using `element.textContent = 'newText'`, because Google Docs stores current editor state internally. So, autosaving will be not triggered. Also, on further user typing, previous text will be restored while `newText` will be removed.
- `element.innerText.length` will give different result than you expect because Google Docs adds special symbols (NBSP, ZWNJ) to display text correctly across different browsers.

Why do you need to handle such nuances by yourself when you can just use already working solutions? So, it is what it for.


## Installation

### Node.js

- with `npm`:

```
npm install google-docs-utils
```

- with `yarn`:

```
yarn add google-docs-utils
```

### Browser

Use these CDN links:

- for development:

```
https://unpkg.com/google-docs-utils@latest/dist/iife/index.js
```

- for production:

```
https://unpkg.com/google-docs-utils@latest/dist/iife/index.min.js
```

Then access this library via `GoogleDocsUtils` global variable.


## Usage

### Node.js

```javascript
// load all methods
const GoogleDocsUtils = require('google-docs-utils');

// using ES6
import * as GoogleDocsUtils from 'google-docs-utils';

// load specific methods
import {getSelection} from 'google-docs-utils';
```

### Browser

`GoogleDocsUtils` global variable will be created when you load this library. Access the methods via this variable.

Example:

```javascript
GoogleDocsUtils.getSelection();
```

You can load the script using any way you like. For example, you can manually load this library through developer console:

```javascript
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://unpkg.com/google-docs-utils@latest/dist/iife/index.js';
document.head.appendChild(script);
```


## API

### getEditorElement

```typescript
GoogleDocsUtils.getEditorElement(): HTMLElement;
```

Returns current active editor element. You may consider it as a root element. It contains only editor itself, not control bar and other elements.

### getPagesElements

```typescript
GoogleDocsUtils.getPagesElements(): HTMLElement[];
```

Returns all rendered editor pages.

### getLinesElements

```typescript
GoogleDocsUtils.getLinesElements(): HTMLElement[];
```

Returns all lines of all rendered editor pages. Note that it also contains header lines of every page. So, `GoogleDocsUtils.getLinesElements()[0]` results to header line of first page, and `GoogleDocsUtils.getLinesElements()[1]` results to first line of first page.

### getLinesTextElements

```typescript
GoogleDocsUtils.getLinesTextElements(): HTMLElement[];
```

Return all text elements of all rendered editor pages. Note that it also contains header text elements of every page, even if header is empty.

### getLinesText

```typescript
GoogleDocsUtils.getLinesTextElements(): string[];
```

Returns text content of every line of all rendered pages. If line is empty, then empty string will be used as a value for that line.

### getLineText

```typescript
GoogleDocsUtils.getLineText(lineIndex, [startIndex], [endIndex]): string | null;
```

Returns text of specific line.

**lineIndex**

- required: `true`
- type: `number`

Index of specific line, which starts from `0`. Note that it also points to header lines. So, for example, `0` points to header line of first page, and `1` points to first line of first page.

If `lineIndex` is greater than total count of all rendered lines, then `null` will be returned instead of `string`.

**startIndex**

- required: `false`
- type: `number`
- default: `undefined`

Start index for `substring()`. If not specified, then start of line is assumed.

**endIndex**

- required: `false`
- type: `number`
- default: `undefined`

End index for `substring()`. If not specified, then end of line is assumed.

### getWordElements

```typescript
GoogleDocsUtils.getWordElements(): HTMLElement[];
```

Return all nodes of all rendered lines which contains actual text of line. There is no point to change text of line through `textContent` or `innerText`, because these changes will be not recognized correctly.

### getSelectionOverlayElements

```typescript
GoogleDocsUtils.getSelectionOverlayElements(): Array<HTMLElement | null>;
```

Returns all selection overlay elements of all rendered lines. If there are no selection for some line, then `null` will be used as a value for that line. Don't remove this element manually, because these DOM changes will be not recognized by Google Docs correctly.

### getSelection

```typescript
GoogleDocsUtils.getSelection(): Array<SelectionData | null>;
```

Returns data about selection for every rendered line. Note that header line is also included in returned array. If there are no selection in a line, then `null` will be used as a value for that line.

**SelectionData.text**

- type: `string`

Original text of line.

**SelectionData.selectedText**

- type: `string`

Selected text.

**SelectionData.selectionStart**

- type: `number`

Index where selection starts. It can be used for `substring()`.

**SelectionData.selectionEnd**

- type: `number`

Index where selection ends. It can be used for `substring()`.

**SelectionData.textElement**

- type: `HTMLElement`

HTML element which contains actual text.

**SelectionData.selectionElement**

- type: `HTMLElement`

HTML element which contains selection overlay element.

**SelectionData.textRect**

- type: `DOMRectReadOnly`

`DOMRect` of `textElement`.

**SelectionData.selectionRect**

- type: `DOMRectReadOnly`

`DOMRect` of `selectionElement`.

### getCursorElement

```typescript
GoogleDocsUtils.getCursorElement(): HTMLElement;
```

Returns cursor element.

### getActiveCursorElement

```typescript
GoogleDocsUtils.getActiveCursorElement(): HTMLElement | null;
```

Returns active cursor element. "Active" means page is focused (cursor is blinking). `null` will be returned if cursor is not active.

### getCaretElement

```typescript
GoogleDocsUtils.getCaretElement(): HTMLElement;
```

Returns caret element.

### getCaret

```typescript
GoogleDocsUtils.getCaret(): CaretData;
```

Returns data about caret.

**CaretData.element**

- type: `HTMLElement`

Caret element.

**CaretData.wordElement**

- type: `HTMLElement`

Element which contains text of line on which caret is placed.

**CaretData.lineIndex**

- type: `number`

Global index of line.

**CaretData.positionIndex**

- type: `number`

Before what letter caret is placed. For example, caret is placed before `w` letter in `one two three` text. `positionIndex` will be equal to `5` in that case.

### getCaretWord

```typescript
GoogleDocsUtils.getCaretWord(): CaretWordData;
```

Returns data about word on which caret is currently placed.

**CaretWordData.word**

- type: `string`

Full word on which caret is placed.

**CaretWordData.text**

- type: `string`

Full text of line on which caret is placed.

**CaretWordData.indexStart**

- type: `number`

On which index `word` starts in `text`. Can be used for `substring()`.

**CaretWordData.indexEnd**

- type: `number`

On which index `word` ends in `text`. Can be used for `substring()`.

### getTextEventTarget

```typescript
GoogleDocsUtils.getTextEventTarget(): HTMLElement | Document;
```

To this element you can dispatch keyboard events. You can't just send keyboard events to current `document`, because Google Docs uses separate element to handle keyboard events.

### clearTextContent

```typescript
GoogleDocsUtils.getTextEventTarget(text): string;
```

Clears text that was extracted using `textContent` or `innerText`. It is important to handle extracted text, because it may contain special invisible symbols like `ZWNJ` or `NBSP` - these symbols will lead to unexpected result.

**text**

- required: `true`
- type: `string`

Raw text of line that was extracted using `textContent` or `innerText`.

### pressOn

This namespace provides methods to imitate physical single key press. You can use this to interact with current editor content: clear current selection using `Delete` key, delete current character using `Backspace` key, move on new line using `Enter` key, etc.

If this default typing system not suits for you, you still can implement your own typing system - just send keyboard events to [getTextEventTarget](#gettexteventtarget).

This namespace provides following methods:

#### Character

```typescript
GoogleDocsUtils.pressOn.Character(char): void;
```

**char**

- required: `true`
- type: `string`

Single character to press on. Case sensitive.

#### Space

```typescript
GoogleDocsUtils.pressOn.Space(): void;
```

#### Delete

```typescript
GoogleDocsUtils.pressOn.Delete(): void;
```

Difference between [Delete](#delete) and [Backspace](#backspace) is matters.

#### Backspace

```typescript
GoogleDocsUtils.pressOn.Backspace(): void;
```

Difference between [Delete](#delete) and [Backspace](#backspace) is matters.

#### Enter

```typescript
GoogleDocsUtils.pressOn.Enter(): void;
```

#### Tab

```typescript
GoogleDocsUtils.pressOn.Tab(): void;
```

#### ArrowLeft

```typescript
GoogleDocsUtils.pressOn.ArrowLeft(): void;
```

#### ArrowRight

```typescript
GoogleDocsUtils.pressOn.ArrowRight(): void;
```

#### ArrowUp

```typescript
GoogleDocsUtils.pressOn.ArrowUp(): void;
```

#### ArrowDown

```typescript
GoogleDocsUtils.pressOn.ArrowDown(): void;
```

### typeText

```typescript
GoogleDocsUtils.typeText(text): string;
```

Types provided text character by character at current caret position. Imitates physical key press events. Can take a long time to type long text. Uses default [pressOn](#presson).

**text**

- required: `true`
- type: `string`

Text to type.


## Version naming

This project uses following structure for version naming: `<MAJOR RELEASE>.<BREAKING CHANGES>.<NON BREAKING CHANGES>`.


## Contributing

Contributions of all sizes are welcome. Feel free!

Use [issues](https://github.com/Amaimersion/google-docs-utils/issues/new) to report a bug, request a feature or ask a question.

Also, consider making a [pull request](https://github.com/Amaimersion/google-docs-utils/compare) to add your own implementation of missing functionality. Big thanks for that!


## Project history

Initialiy it was a fork of [JensPLarsen/ChromeExtension-GoogleDocsUtil](https://github.com/JensPLarsen/ChromeExtension-GoogleDocsUtil). Starting from 2.0.0 version the project was completely  rewritten, but core concepts were keeped.


## License

[MIT](https://github.com/Amaimersion/google-docs-utils/blob/master/LICENSE).
