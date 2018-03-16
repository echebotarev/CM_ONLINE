import { createSelector } from 'reselect'

export const buttonsMapSelector = state => state.buttons.entities;
export const buttonsSelector = createSelector(buttonsMapSelector, buttons => buttons.valueSeq().toArray());

export const filtratedButtonsSelector = createSelector(buttonsSelector, (buttons) => {
	return buttons
});