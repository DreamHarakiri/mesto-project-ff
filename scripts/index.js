//мне было лень искать карточки

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");
const popupButton = popupTypeNewCard.querySelector(".popup__close");

// @todo: Функция создания карточки
function newCard(card, deleteCardFunction) {
  const allCards = cardTemplate.querySelector(".card").cloneNode(true);

  allCards.querySelector(".card__title").textContent = card.name;
  allCards.querySelector(".card__image").src = card.link;
  allCards.querySelector(".card__image").alt = card.name;

  allCards
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  return allCards;
}

// @todo: Функция удаления карточки

function deleteCardFunction(e) {
  let cardRemove = e.target.closest(".card");
  cardRemove.remove();
}

// @todo: Вывести карточки на страницу

function renderCards() {
  initialCards.forEach((item) => {
    const card = newCard(item, deleteCardFunction);
    placesList.append(card);
  });
}

function openClosePopUp() {
  profileAddButton.addEventListener("click", function () {
    popupTypeNewCard.style.display = "flex";
  });

  popupButton.addEventListener("click", function () {
    popupTypeNewCard.style.display = "none";
  });
}
renderCards();
openClosePopUp();
