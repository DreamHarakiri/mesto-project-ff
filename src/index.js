import "./pages/index.css";
import { initialCards } from "./components/cards.js";

import {
  openPopup,
  closePopup,
  profileEditButton,
  popupTypeEdit,
  profileEditPopup,
  popupTypeNewCard,
  buttonsClosePopup,
  allPopup,
  profileAddButton,
  initialKey,
} from "./components/card.js";
import {
  createCard,
  updateCards,
  deleteCardFunction,
} from "./components/modal.js";

export const formElements = document.querySelectorAll(".popup__form");
export const cardTemplatesContent =
  document.querySelector("#card-template").content;
export const cardsContainerPlaces = document.querySelector(".places__list");

const popupImageBox = document.querySelector(".popup_type_image");
const popupImage = popupImageBox.querySelector(".popup__image");
const popupCaption = popupImageBox.querySelector(".popup__caption");

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function renderCards() {
  initialCards.forEach((item) => {
    const card = createCard(item, deleteCardFunction);
    cardsContainerPlaces.append(card);
  });
}

const headerImage = document.querySelector(".popup__input_type_card-name");
const urlImage = document.querySelector(".popup__input_type_url");

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

function addCard(name, link) {
  const card = createCard({ name: name, link: link }, deleteCardFunction);
  cardsContainerPlaces.prepend(card);
}

///

export function openImagePopup(e) {
  const card = e.target.closest(".card"),
    cardImage = card.querySelector(".card__image"),
    cardTitle = card.querySelector(".card__title");
  popupImage.src = cardImage.src;
  popupCaption.textContent = cardTitle.textContent;

  openPopup(e);
}

//

const formElement = document.querySelector(".popup__form");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(
  ".popup__input_type_description"
);

export const nameProfile = document.querySelector(".profile__title");
export const jobProfile = document.querySelector(".profile__description");

function handleFormSubmit__editProfile(evt) {
  evt.preventDefault();
  if (evt.target.getAttribute("name") === "edit-profile") {
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    closePopup(profileEditPopup);
  }
}

formElement.addEventListener("submit", handleFormSubmit__editProfile);

//слушатели

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

profileAddButton.addEventListener("click", openPopup);
profileEditButton.addEventListener("click", openPopup);
popupImageBox.addEventListener("click", openPopup);

renderCards();
