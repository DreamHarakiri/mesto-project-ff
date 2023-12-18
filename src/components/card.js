const cardsContainer = document.querySelector(".places__list");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");

const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");

const profileEditPopup = document.querySelector(".popup");
const profileEditPopupBtn = document.querySelector(".popup__button");

const allPopup = document.querySelectorAll(".popup");
const closePopupButton = document.querySelectorAll(".popup__close");
const isOpenedPopup = document.querySelector(".opened-popup");

const popupImageBox = document.querySelector(".popup_type_image");
const popupImage = popupImageBox.querySelector(".popup__image");

/* работа с формой и изменением имени */

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

function handleFormSubmit(evt) {
  evt.preventDefault();
  if (evt.target.getAttribute("name") === "edit-profile") {
    console.log(nameInput.value + " " + jobInput.value);
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    profileEditPopup.style.display = "none";
  }
}

formElement.addEventListener("submit", handleFormSubmit);

/* функция открытия и закрытия попапа */

export function openPopup(e) {
  console.log(e.target.className);
  if (e.target.className === "profile__add-button") {
    popupTypeNewCard.classList.add("popup_is-opened");
    popupTypeNewCard.classList.add("popup_is-animated");
  } else if (e.target.className === "profile__edit-button") {
    profileEditPopup.classList.add("popup_is-opened");
    profileEditPopup.classList.add("popup_is-animated");
  } else if (e.target.className === "card__image") {
    popupImageBox.classList.add("popup_is-opened");
    popupImageBox.classList.add("popup_is-animated");
  }
}

function closePopup(e) {
  e.classList.remove("popup_is-opened");
}

function overlayClose(e) {
  if (e.querySelector(".popup_is-opened")) {
    closePopup(e);
  }
}

closePopupButton.forEach((item) => {
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

function initialKey(e) {
  const initialPopup = document.querySelector(".popup_is-opened");
  if (initialPopup) {
    if (e.key === "Escape") {
      console.log("test");
      closePopup(initialPopup);
    }
  }
}

profileAddButton.addEventListener("click", openPopup);
profileEditButton.addEventListener("click", openPopup);
popupImageBox.addEventListener("click", openPopup);

document.addEventListener("keydown", initialKey);

/* добавление карточек */
