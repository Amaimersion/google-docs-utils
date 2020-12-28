import getSelectionElements from './get-selection-overlay-elements';


/**
 * @returns {boolean}
 * Text selection is exists (at least one line).
 */
export default function isTextSelected() {
    const selectionElements = getSelectionElements();
    const isSelected = selectionElements.some((i) => !!i);

    return isSelected;
}
