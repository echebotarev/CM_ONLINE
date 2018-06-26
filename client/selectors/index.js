import { createSelector } from 'reselect'

export const currentTemplateSelector = state => state.templates.currentTemplate;
export const currentButtonSelector = state => state.buttons.currentButton;

export const buttonsMapSelector = state => state.buttons.entities;
export const buttonsSelector = createSelector(buttonsMapSelector, buttons => buttons.valueSeq().toArray());

// получаем список кнопок
export const filtratedButtonsSelector = createSelector(buttonsSelector, currentTemplateSelector, (buttons, currentTemplate) => {
	return buttons.filter(button => {
		return (button.template === currentTemplate)
	})
});

// получаем конкретную кнопку
export const filtratedButtonSelector = createSelector(buttonsSelector, currentButtonSelector, (buttons, currentButton) => {
	let button = buttons.filter(button => button._id === currentButton);
	return button[0];
});


export const templatesMapSelector = state => state.templates.entities;
export const templatesSelector = createSelector(templatesMapSelector, templates => templates.valueSeq().toArray());

// получаем список темплэйтов
export const filtratedTemplatesSelector = createSelector(templatesSelector, templates => {
	return templates
});

// получаем конкретный темплэйт. Используется в EditorContent
export const filtratedTemplateSelector = createSelector(templatesSelector, currentTemplateSelector, (templates, currentTemplate) => {
	let template = templates.filter(template => template._id === currentTemplate);
	return template[0];
});