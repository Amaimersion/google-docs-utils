import {
    runOnPageLoaded,
    selectorsToClassList
} from './common/utils';
import {querySelector} from './common/query-selector';
import * as selectors from './common/selectors';


/**
 * Type of Google Docs event.
 */
const EVENT_TYPE = {
    selectionChange: 'selectionchange'
};

/**
 * Google Docs event listeners.
 *
 * Structure:
 * - key: event type
 * - value: all registered listeners for that event
 *
 * @type {{[key: string]: Function[]}}
 */
const EVENT_LISTENERS = {};


//#region Precalculated values

const KIX_SELECTION_OVERLAY_CLASS_LIST = selectorsToClassList(
    selectors.kixSelectionOverlay
);

//#endregion


/**
 * Runs on script inject.
 */
function main() {
    runOnPageLoaded(bindObserver);
}


/**
 * Creates mutation observer and starts observing Google Docs container.
 * The container element should be created at that stage.
 */
function bindObserver() {
    const docsEditorContainer = querySelector(selectors.docsEditorContainer);

    if (docsEditorContainer == null) {
        throw new Error('Unable to observe missing docsEditorContainer');
    }

    const observer = new MutationObserver(mutationCallback);

    observer.observe(
        docsEditorContainer,
        {
            subtree: true,
            childList: true,
            attributes: false,
            characterData: false
        }
    );
}


/**
 * Callback which will be called on every Google Docs mutation.
 */
function mutationCallback(mutationList) {
    let selectionChangeEvent = false;

    // TODO: refactoring of that entire loop if there will be more events
    for (const mutation of mutationList) {
        for (const addedNode of mutation.addedNodes) {
            const addedNodeClassList = Array.from(
                addedNode.classList || []
            );

            selectionChangeEvent = (
                selectionChangeEvent ||
                KIX_SELECTION_OVERLAY_CLASS_LIST.some(
                    (value) => addedNodeClassList.includes(value)
                )
            );
        }

        for (const removedNode of mutation.removedNodes) {
            const removedNodeClassList = Array.from(
                removedNode.classList || []
            );

            selectionChangeEvent = (
                selectionChangeEvent ||
                KIX_SELECTION_OVERLAY_CLASS_LIST.some(
                    (value) => removedNodeClassList.includes(value)
                )
            );
        }
    }

    if (selectionChangeEvent) {
        callEventListener(EVENT_TYPE.selectionChange);
    }
}


/**
 * Adds listener for specific event.
 *
 * There can be many listeners for single event.
 * Order of calling is same as order of adding.
 *
 * @param {string} type
 * Type of event. Use `EVENT_TYPE`.
 * @param {(event: object) => any} listener
 * Callback that will be called.
 * Information about event will be passed as argument.
 */
export function addEventListener(type, listener) {
    if (!EVENT_LISTENERS[type]) {
        EVENT_LISTENERS[type] = [];
    }

    EVENT_LISTENERS[type].push(listener);
}


/**
 * Calls all registered event listeners for specific event.
 *
 * @param {string} type
 * Type of event. Use `EVENT_TYPE`.
 */
function callEventListener(type) {
    const listeners = EVENT_LISTENERS[type];

    if (!listeners) {
        return;
    }

    for (const listener of listeners) {
        try {
            listener({
                type: type
            });
        } catch (error) {
            console.error(error);
        }
    }
}


main();
