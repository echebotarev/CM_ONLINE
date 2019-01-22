export const content = {
  templates: [
    {
      name: "displayName",
      displayName: "Имя шаблона",
      type: "input",
      title: "Введите имя:",
      description:
        "Введенное вами имя будет использоваться и отображаться в системе CM.online. Введите имя, чтобы не запутаться, когда у вас будет много шаблонов",
      validate: {
        is: false,
        type: null
      }
    },
    {
      name: "link",
      displayName: "Ссылка",
      type: "input",
      title: "Введите ссылку:",
      description:
        "Эта ссылка будет доступна всем. К примеру, вы можете ввести имя своего магазина на латинице и разместить  на странице в социальных сетях: myshop.cm.online",
      validate: {
        is: true,
        type: "isEnglish"
      }
    },
    {
      name: "image",
      displayName: "Изображение",
      type: "image",
      title: "Добавьте логотип:",
      description:
        "Выберите логотип на вашем компьютере, или оставьте это поле пустым. Тогда кнопки на вашей странице разместятся посередине",
      validate: {
        is: false,
        type: null
      }
    },
    {
      name: "background",
      displayName: "Цвет подложки",
      type: "color",
      title: "Выберите цвет подложки:",
      description: null,
      validate: {
        is: false,
        type: null
      }
    }
  ],
  buttons: [
    {
      name: "Выбор способа связи"
    },
    {
      name: "Дизайн"
    }
  ],
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
    BasicButton: ["fill", "border", "corners", "shadow", "text"],
    ButtonThreeD: ["fill", "border", "corners", "text"],
    ButtonLiftedShadow: ["fill", "border", "corners", "shadow", "text"],
    ShinyButtonInverted: ["fill", "border", "corners", "shadow", "text"],
    ButtonArrow: ["fill", "text"],
    ButtonArrowLeft: ["fill", "text"],
    ButtonInnerShadow: ["fill", "border", "corners", "text"],
    ButtonShadowRight: ["fill", "border", "corners", "shadow", "text"],
    ButtonShadowLeft: ["fill", "border", "corners", "shadow", "text"],
    TextOnlyButtonSkin: ["text"],
    ShinyButtonISkin: ["fill", "border", "corners", "shadow", "text"],
    ShinyButtonIISkin: ["fill", "border", "corners", "shadow", "text"],
    RibbonButton: ["fill", "text"],
    CircleButton: ["fill", "border", "shadow", "text"],
    SloopyButton: ["fill", "text"],
    IronButton: ["fill", "corners", "shadow", "text"],
    GamingButton: ["fill", "text"],
    ScotchTapeButton: ["text"]
  },
  messengers: [
    {
      displayName: "Telegram",
      value: "Telegram",
      placeholder: "username",
      description: "Укажите username вашего аккаунта в Telegram.",
      descriptionForMe: "https://telegram.me/${username}"
    },
    {
      displayName: "Вконтакте",
      value: "VK",
      placeholder: "username",
      description: "Укажите username вашего аккаунта в VK.",
      descriptionForMe: "https://vk.me/${username}"
    },
    {
      displayName: "Whatsapp",
      value: "Whatsapp",
      placeholder: "79211234567",
      description:
        "Укажите номер телефона к которому привязан аккаунт WhatsApp в формате 79211234567",
      descriptionForMe: "https://wa.me/${79111721308}"
    },
    {
      displayName: "Email",
      value: "Email",
      placeholder: "example@email.ru",
      description: "Укажите почту"
    },
    {
      displayName: "Телефон",
      value: "Phone",
      placeholder: "+79211234567",
      description: "Укажите номер телефона в формате +79211234567"
    },
    {
      displayName: "Сайт",
      value: "Site",
      placeholder: "example.ru",
      description: "Укажите ваш сайт"
    }
  ]
};
