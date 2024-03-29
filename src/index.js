//imports

import "./pages/index.css";
import { createCard, deleteCardFunction, likeCard } from "./components/card.js";
import { openImagePopup, openPopup, closePopup } from "./components/modal.js";
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
const formPopupNewPlace = document.forms["new-place"];

const profileImage = document.querySelector(".profile__image");
const profileImage__popup = document.querySelector(".popup_type_avatar");

//export const
export const cardTemplatesContent =
  document.querySelector("#card-template").content;
export const cardsContainerPlaces = document.querySelector(".places__list");
export const popupImageBox = document.querySelector(".popup_type_image");
export const popupImage = popupImageBox.querySelector(".popup__image");
export const popupCaption = popupImageBox.querySelector(".popup__caption");

export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(
  ".popup__input_type_description"
);

export const nameProfile = document.querySelector(".profile__title");
export const jobProfile = document.querySelector(".profile__description");

//forms

const userCardForm = document.forms["new-place"];
const profileForm = document.forms["edit-profile"];
const profileImageForm = document.forms["edit-avatar"];
const profileAvatar__button = profileImageForm.querySelector(".popup__button");
const profileAvatar = document.querySelector(".profile__image");

//valid config
import { enableValidation, clearValidation } from "./components/validation";

const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//api
import {
  getUserInfo,
  getInitialCards,
  сhangeUserInfo,
  newCardUser,
  changeAvatar,
} from "./components/api";

let profileId = "";

Promise.all([getUserInfo(), getInitialCards()])

  .then(([profile, card]) => {
    profileId = profile._id;
    nameProfile.textContent = profile.name; //разберись с этими значениями, переставь на нужные
    jobProfile.textContent = profile.about;
    console.log("Ид профиля: " + profileId + "Имя профиля:" + profile.name);
    profileAvatar.style.backgroundImage = `url(${profile.avatar})`;

    card.forEach((card) => {
      cardsContainerPlaces.append(
        createCard(
          card,
          profileId,
          deleteCardFunction,
          likeCard,
          openImagePopup
        )
      );
    });
  })
  .catch((error) => console.log("Ошибка:", error));

//main

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();

  if (evt.target.getAttribute("name") === "edit-profile") {
    сhangeUserInfo(nameInput.value, jobInput.value);
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    closePopup(profileEditPopup);
  }
}

formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

formPopupNewPlace.addEventListener("submit", handleFormAddSubmit);

profileImageForm.addEventListener("submit", handleFormSubmitChangeAvatar);

function handleFormAddSubmit(e) {
  e.preventDefault();
  if (e.target.getAttribute("name") === "new-place") {
    const buttonText = profileEditPopupBtn.textContent;
    profileEditPopupBtn.textContent = "Сохранение..";

    const newCardName = formPopupNewPlace.elements["place-name"].value;
    const newCardUrl = formPopupNewPlace.elements["link"].value;

    newCardUser(newCardName, newCardUrl)
      .then((card) => {
        const newCard = createCard(
          card,
          profileId,
          deleteCardFunction,
          likeCard,
          openImagePopup
        );
        cardsContainerPlaces.prepend(newCard);
        formPopupNewPlace.reset();
        console.log("test tuta");
        closePopup(popupTypeNewCard);
      })
      .catch((error) => console.log("данные не обработанны:", error))
      .finally(() => (profileEditPopupBtn.textContent = buttonText));
  }
}

function handleFormSubmitChangeAvatar(e) {
  e.preventDefault();
  if (e.target.getAttribute("name") === "edit-avatar") {
    const buttonText = profileAvatar__button.textContent;
    profileAvatar__button.textContent = "Сохранение...";

    changeAvatar(profileImageForm.link.value)
      .then((profile) => {
        profileAvatar.style.backgroundImage = `url(${profile.avatar})`;
        closeModal(popupAvatar);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => (profileAvatar__button.textContent = buttonText));
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
  clearValidation(userCardForm, validConfig);
  userCardForm.reset();
  openPopup(popupTypeNewCard);
});
profileEditButton.addEventListener("click", function () {
  clearValidation(profileForm, validConfig);
  profileForm.reset();
  document.querySelector(".popup__input_type_name").value =
    nameProfile.textContent;
  document.querySelector(".popup__input_type_description").value =
    jobProfile.textContent;
  openPopup(popupTypeEdit);
});

profileImage.addEventListener("click", function () {
  clearValidation(profileImageForm, validConfig);
  profileImageForm.reset();
  openPopup(profileImage__popup);
});

enableValidation(validConfig);
