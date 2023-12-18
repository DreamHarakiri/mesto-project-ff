import "./pages/index.css";
import { initialCards } from "./components/cards.js";

import { openPopup } from "./components/card.js";
import { createCard, updateCards } from "./components/modal.js";

export const formElement = document.querySelectorAll(".popup__form");
export const cardTemplate = document.querySelector("#card-template").content;
export const cardsContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

function deleteCardFunction(e) {
  const cardRemove = e.target.closest(".card");
  cardRemove.remove();
}

function stateLike(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

// @todo: Вывести карточки на страницу

function renderCards() {
  initialCards.forEach((item) => {
    const card = createCard(item, deleteCardFunction);
    cardsContainer.append(card);
  });
}

const headerImage = document.querySelector(".popup__input_type_card-name");
const urlImage = document.querySelector(".popup__input_type_url");

formElement.forEach((item) => {
  item.addEventListener("submit", handleFormAddSubmit);
});

function handleFormAddSubmit(e) {
  e.preventDefault();
  if (e.target.getAttribute("name") === "new-place") {
    addCard(headerImage.value, urlImage.value);
    document.querySelector(".popup_type_new-card").style.display = "none";
  }
}

function addCard(name, link) {
  updateCards({ name: name, link: link }, deleteCardFunction);
}

///

export function openImage(e) {
  const popupImageBox = document.querySelector(".popup_type_image");
  const popupImage = popupImageBox.querySelector(".popup__image");
  const popupCaption = popupImageBox.querySelector(".popup__caption");

  const card = e.target.closest(".card"),
    cardImage = card.querySelector(".card__image"),
    cardTitle = card.querySelector(".card__title");
  popupImage.src = cardImage.src;
  popupCaption.textContent = cardTitle.textContent;

  openPopup(e);
}

renderCards();
