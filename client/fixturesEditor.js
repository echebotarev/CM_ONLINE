export const content = {
	templates: [
		{
			name: 'displayName',
			displayName: 'Имя шаблона',
			type: 'input',
			title: 'Введите имя:',
			description: 'Введенное вами имя будет использоваться и отображаться в системе CM.online. Введите имя, чтобы не запутаться, когда у вас будет много шаблонов',
			validate: {
				is: false,
				type: null
			}
		},
		{
			name: 'link',
			displayName: 'Ссылка',
			type: 'input',
			title: 'Введите ссылку:',
			description: 'Эта ссылка будет доступна всем. К примеру, вы можете ввести имя своего магазина на латинице и разместить  на странице в социальных сетях: myshop.cm.online',
			validate: {
				is: true,
				type: 'isEnglish'
			}
		},
		{
			name: 'image',
			displayName: 'Изображение',
			type: 'image',
			title: 'Добавьте логотип:',
			description: 'Выберите логотип на вашем компьютере, или оставьте это поле пустым. Тогда кнопки на вашей странице разместятся посередине',
			validate: {
				is: false,
				type: null
			}
		},
		{
			name: 'background',
			displayName: 'Цвет подложки',
			type: 'color',
			title: 'Выберите цвет подложки:',
			description: null,
			validate: {
				is: false,
				type: null
			}
		}
	],
	buttons: [],
	buttonsPreview: [
		"BasicButton",
		"ButtonThreeD",
		"ButtonLiftedShadow",
		"ShinyButtonInverted",
		"ButtonArrow",
		"ButtonArrowLeft",
		"ButtonInnerShadow",
		"ButtonShadowRight",
		"ButtonShadowLeft",
		"TextOnlyButtonSkin",
		"ShinyButtonISkin",
		"ShinyButtonIISkin",
		"RibbonButton",
		"CircleButton",
		"SloopyButton",
		"IronButton",
		"GamingButton",
		"ScotchTapeButton"
	],
	buttonsPreviewEditor: {
		"BasicButton": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"ButtonThreeD": [
			"fill",
			"border",
			"corners",
			"text"
		],
		"ButtonLiftedShadow": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"ShinyButtonInverted": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"ButtonArrow": [
			"fill",
			"text"
		],
		"ButtonArrowLeft": [
			"fill",
			"text"
		],
		"ButtonInnerShadow": [
			"fill",
			"border",
			"corners",
			"text"
		],
		"ButtonShadowRight": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"ButtonShadowLeft": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"TextOnlyButtonSkin": [
			"text"
		],
		"ShinyButtonISkin": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"ShinyButtonIISkin": [
			"fill",
			"border",
			"corners",
			"shadow",
			"text"
		],
		"RibbonButton": [
			"fill",
			"text"
		],
		"CircleButton": [
			"fill",
			"border",
			"shadow",
			"text"
		],
		"SloopyButton": [
			"fill",
			"text"
		],
		"IronButton": [
			"fill",
			"corners",
			"shadow",
			"text"
		],
		"GamingButton": [
			"fill",
			"text"
		],
		"ScotchTapeButton": [
			"text"
		]
	}
};