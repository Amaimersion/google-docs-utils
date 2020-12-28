/**
 * This module can be used to imitate physical keyboard press events.
 *
 * - use `keypress` for letter characters,
 * - use `keydown` for special keys (ArrowLeft, Delete, etc.).
 *
 * It is important to provide valid `target`, because Google Docs
 * uses special target for text events, not default `document`.
 *
 * Use this for help - https://keycode.info
 */


/**
 * Creates keyboard event.
 *
 * @param {'keypress' | 'keydown' | 'keyup'} name
 * Name of event.
 * @param {Document | HTMLElement} target
 * Target of event.
 * @param {string} key
 * Name of key.
 * @param {string | null} code
 * Code of `key`. Specify `null` for autodetect.
 * Autodetect works correctly only for letters.
 * @param {number | null} keyCode
 * "Numerical code identifying the unmodified value of the pressed key".
 * Specify `null` for autodetect.
 * @param {KeyboardEventInit} eventOptions
 * Custom options to add/overwrite event options.
 */
function createKeyboardEvent(
    name,
    target,
    key,
    code,
    keyCode,
    eventOptions
) {
    if (code == null) {
        code = 'Key' + key.toUpperCase();
    }

    if (keyCode == null) {
        keyCode = key.charCodeAt(0);
    }

    return new KeyboardEvent(
        name,
        {
            repeat: false,
            isComposing: false,
            bubbles: true,
            cancelable: true,
            ctrlKey: false,
            shiftKey: false,
            altKey: false,
            metaKey: false,
            target: target,
            currentTarget: target,
            key: key,
            code: code,

            // it is important to also specify
            // these two deprecated properties
            keyCode: keyCode,
            which: keyCode,

            ...eventOptions
        }
    );
}


/**
 * @param {Document | HTMLElement} target
 * @param {string} key
 * @param {string | null} code
 * @param {number | null} keyCode
 * @param {KeyboardEventInit} eventOptions
 */
export function keypress(
    target,
    key,
    code = null,
    keyCode = null,
    eventOptions = {}
) {
    const event = createKeyboardEvent(
        'keypress',
        target,
        key,
        code,
        keyCode,
        eventOptions
    );

    target.dispatchEvent(event);
}


/**
 * @param {Document | HTMLElement} target
 * @param {string} key
 * @param {string | null} code
 * @param {number | null} keyCode
 * @param {KeyboardEventInit} eventOptions
 */
export function keydown(
    target,
    key,
    code = null,
    keyCode = null,
    eventOptions = {}
) {
    const event = createKeyboardEvent(
        'keydown',
        target,
        key,
        code,
        keyCode,
        eventOptions
    );

    target.dispatchEvent(event);
}
