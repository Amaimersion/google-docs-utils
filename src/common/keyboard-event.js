/**
 * This module can be used to imitate physical keyboard press events.
 *
 * - use `keypress` for letter characters,
 * - use `keydown` for special keys (ArrowLeft, Delete, etc.).
 *
 * It is important to provide valid `target`, because Google Docs
 * uses special target for text events, not default `document`.
 *
 * `key` is a target key.
 * `code` can be omitted for letter keys - it will be auto detected.
 * `keyCode` can be omitted for letter keys - it will be auto detected.
 *
 * Use this for help - https://keycode.info
 */


/**
 * @param {Document | HTMLElement} target
 * @param {string} key
 * @param {string} code
 * @param {number} keyCode
 */
export function keypress(target, key, code = null, keyCode = null) {
    if (code == null) {
        code = 'Key' + key.toUpperCase();
    }

    if (keyCode == null) {
        keyCode = key.charCodeAt(0);
    }

    target.dispatchEvent(
        new KeyboardEvent('keypress', {
            repeat: false,
            isComposing: false,
            bubbles: true,
            cancelable: true,
            target: target,
            currentTarget: target,
            key: key,
            code: code,

            // it is important to also specify
            // these two deprecated properties
            keyCode: keyCode,
            which: keyCode
        })
    );
}


/**
 * @param {Document | HTMLElement} target
 * @param {string} key
 * @param {string} code
 * @param {number} keyCode
 */
export function keydown(target, key, code = null, keyCode = null) {
    if (code == null) {
        code = 'Key' + key.toUpperCase();
    }

    if (keyCode == null) {
        keyCode = key.charCodeAt(0);
    }

    target.dispatchEvent(
        new KeyboardEvent('keydown', {
            repeat: false,
            isComposing: false,
            bubbles: true,
            cancelable: true,
            target: target,
            currentTarget: target,
            key: key,
            code: code,

            // it is important to also specify
            // these two deprecated properties
            keyCode: keyCode,
            which: keyCode
        })
    );
}
