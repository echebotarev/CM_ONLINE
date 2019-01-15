export const buttons = [
  {
    id: 1,
    template_id: 1,
    type: "vk",
    text: "вКонтактике",
    link: "https://vk.com/egorchebotarev",
    background: "red",
    color: "#000"
  },
  {
    id: 2,
    template_id: 1,
    type: "whatsapp",
    text: "Ватсапп",
    link: "https://vk.com/egorchebotarev",
    background: "red",
    color: "#000"
  },
  {
    id: 3,
    template_id: 1,
    type: "site",
    text: "Сайт компании",
    link: "http://risers-shop.ru/",
    background: "red",
    color: "#000"
  }
];

export const templates = [
  {
    id: 1,
    user_id: 1,
    payment: 1530046800000, // Wed Jun 27 2018 00:00:00 GMT+0300 (MSK)
    image: "db/logotypes/eche.jpeg",
    buttons: [1, 2, 3],
    background: "#ccc",
    displayName: "Новый шаблон"
  },
  {
    id: 2,
    user_id: 1,
    payment: null, // Wed Jun 27 2018 00:00:00 GMT+0300 (MSK)
    image: "db/logotypes/eche.jpeg",
    buttons: [3, 2],
    background: "blue",
    displayName: "Новейший шаблон"
  }
];
