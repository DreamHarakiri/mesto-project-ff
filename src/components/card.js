import {
  cardsContainerPlaces,
  initialOpenPopup,
  nameProfile,
  jobProfile,
  nameInput,
  jobInput,
} from "../index";

export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
export const profileAddButton = document.querySelector(".profile__add-button");

export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const popupTypeEdit = document.querySelector(".popup_type_edit");

export const profileEditPopup = document.querySelector(".popup");
const profileEditPopupBtn = document.querySelector(".popup__button");

export const allPopup = document.querySelectorAll(".popup");
export const buttonsClosePopup = document.querySelectorAll(".popup__close");
const isOpenedPopup = document.querySelector(".opened-popup");

const popupImageBox = document.querySelector(".popup_type_image");
const popupImage = popupImageBox.querySelector(".popup__image");

/* работа с формой и изменением имени */

/* функция открытия и закрытия попапа */

export function openPopup(e) {
  if (e.target.className === "profile__add-button") {
    popupTypeNewCard.classList.add("popup_is-opened");
    popupTypeNewCard.classList.add("popup_is-animated");
  } else if (e.target.className === "profile__edit-button") {
    profileEditPopup.classList.add("popup_is-opened");
    profileEditPopup.classList.add("popup_is-animated");

    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  } else if (e.target.className === "card__image") {
    popupImageBox.classList.add("popup_is-opened");
    popupImageBox.classList.add("popup_is-animated");
  }
  document.addEventListener("keydown", initialKey);
}

export function closePopup(e) {
  e.classList.remove("popup_is-opened");
  setTimeout(() => e.classList.remove("popup_is-animated"), 600);
}

function overlayClose(e) {
  if (e.querySelector(".popup_is-opened")) {
    closePopup(e);
  }
}

export function initialKey(e) {
  if (e.key === "Escape") {
    const initialPopup = document.querySelector(".popup_is-opened");
    if (initialPopup) {
      closePopup(initialPopup);
    }
  }
}

export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

/* добавление карточек */
