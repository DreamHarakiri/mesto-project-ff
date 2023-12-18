import "./pages/index.css";
import { initialCards } from "./components/cards.js";

import { openPopup } from "./components/card.js";

const formElement = document.querySelectorAll(".popup__form");
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(card, deleteCardFunction, likeProc) {
  const allCard = cardTemplate.querySelector(".card").cloneNode(true);

  allCard.querySelector(".card__title").textContent = card.name;
  allCard.querySelector(".card__image").src = card.link;
  allCard.querySelector(".card__image").alt = card.name;

  const likeButton = allCard.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    stateLike(likeButton);
  });

  allCard
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  allCard.querySelector(".card__image").addEventListener("click", openImage);

  return allCard;
}

function updateCards(card, deleteCardFunction, likeProc) {
  const newcard = cardTemplate.querySelector(".card").cloneNode(true);

  newcard.querySelector(".card__title").textContent = card.name;
  newcard.querySelector(".card__image").src = card.link;
  newcard.querySelector(".card__image").alt = card.name;

  const likeButton = newcard.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    stateLike(likeButton);
  });

  newcard
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  cardsContainer.append(newcard);

  newcard.querySelector(".card__image").addEventListener("click", openImage);

  return newcard;
}

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

function openImage(e) {
  const popupImageBox = document.querySelector(".popup_type_image");
  const popupImage = popupImageBox.querySelector(".popup__image");
  const popupCaption = popupImageBox.querySelector(".popup__caption");

  console.log(e.target.src);

  const card = e.target.closest(".card"),
    cardImage = card.querySelector(".card__image"),
    cardTitle = card.querySelector(".card__title");
  popupImage.src = cardImage.src;
  popupCaption.textContent = cardTitle.textContent;

  console.log(popupImage.src + " " + popupCaption.textContent);
  openPopup(e);
}

renderCards();
