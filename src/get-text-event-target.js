import {textEventTarget} from './selectors';
import {querySelector} from './query-selector';
import {isIframe} from './utils';


/**
 * - Google Docs uses special target to handle
 * text events. So, for example, you cannot send
 * text event just to current document. You
 * should use special target for that.
 *
 * @returns {HTMLElement | Document}
 * A target that can be used to send text events
 * to Google Docs page.
 */
export default function getTextEventTarget() {
    /**
     * @type {HTMLElement & HTMLIFrameElement}
     */
    const element = querySelector(textEventTarget);

    if (isIframe(element)) {
        return element.contentDocument;
    }

    return element;
}
