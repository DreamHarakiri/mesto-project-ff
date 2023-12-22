//imports

import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCardFunction, addCard } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";
//global const

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");

const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");

const profileEditPopup = document.querySelector(".popup");
const profileEditPopupBtn = document.querySelector(".popup__button");

const allPopup = document.querySelectorAll(".popup");
const buttonsClosePopup = document.querySelectorAll(".popup__close");
const isOpenedPopup = document.querySelector(".opened-popup");

const headerImage = document.querySelector(".popup__input_type_card-name");
const urlImage = document.querySelector(".popup__input_type_url");
const formElementEditProfile = document.querySelector(".popup__form");

//export const
export const cardTemplatesContent =
  document.querySelector("#card-template").content;
export const cardsContainerPlaces = document.querySelector(".places__list");
export const formElements = document.querySelectorAll(".popup__form");
export const popupImageBox = document.querySelector(".popup_type_image");

export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(
  ".popup__input_type_description"
);

export const nameProfile = document.querySelector(".profile__title");
export const jobProfile = document.querySelector(".profile__description");

//main

function renderCards() {
  initialCards.forEach((item) => {
    const card = createCard(item, deleteCardFunction);
    cardsContainerPlaces.append(card);
  });
}

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  if (evt.target.getAttribute("name") === "edit-profile") {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    closePopup(profileEditPopup);
  }
}

formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

formElements.forEach((item) => {
  item.addEventListener("submit", handleFormAddSubmit);
});

function handleFormAddSubmit(e) {
  e.preventDefault();
  if (e.target.getAttribute("name") === "new-place") {
    addCard(headerImage.value, urlImage.value);
    closePopup(popupTypeNewCard);
    headerImage.value = "";
    urlImage.value = "";
  }
}

buttonsClosePopup.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => {
    closePopup(popup);
  });
});

allPopup.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList === item.classList) {
      closePopup(item);
    }
  });
});

profileAddButton.addEventListener("click", function () {
  openPopup(popupTypeNewCard);
});
profileEditButton.addEventListener("click", function () {
  openPopup(popupTypeEdit);
});

renderCards();
