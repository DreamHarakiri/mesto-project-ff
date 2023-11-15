//мне было лень искать карточки

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");
const popupTypeNewCardButton = popupTypeNewCard.querySelector(".popup__close");

// @todo: Функция создания карточки
function createCard(card, deleteCardFunction) {
  const allCard = cardTemplate.querySelector(".card").cloneNode(true);

  allCard.querySelector(".card__title").textContent = card.name;
  allCard.querySelector(".card__image").src = card.link;
  allCard.querySelector(".card__image").alt = card.name;

  allCard
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  return allCard;
}

// @todo: Функция удаления карточки

function deleteCardFunction(e) {
  const cardRemove = e.target.closest(".card");
  cardRemove.remove();
}

// @todo: Вывести карточки на страницу

function renderCards() {
  initialCards.forEach((item) => {
    const card = createCard(item, deleteCardFunction);
    cardsContainer.append(card);
  });
}

function openClosePopUp() {
  profileAddButton.addEventListener("click", function () {
    popupTypeNewCard.style.display = "flex";
  });

  popupTypeNewCardButton.addEventListener("click", function () {
    popupTypeNewCard.style.display = "none";
  });
}
renderCards();
openClosePopUp();
