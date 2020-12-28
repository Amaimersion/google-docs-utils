import * as pressOn from './press-on';


/**
 * Types text at current caret position.
 *
 * - imitates physical typing
 *
 * @param {string} text
 * Text to type.
 */
export default function typeText(text) {
    type(text);
}


/**
 * Types text at current caret position.
 *
 * - imitates key press char by char,
 * can take a long time for long text.
 *
 * @param {string} text
 */
function type(text) {
    for (const char of text) {
        pressOn.Character(char);
    }
}
