import { popupImageBox, popupImage, popupCaption } from "../index.js";

export function openPopup(e) {
  e.classList.add("popup_is-animated", "popup_is-opened");
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

export function openImagePopup(itemLink, itemName) {
  popupImage.src = itemLink;
  popupImage.alt = itemName;
  popupCaption.textContent = itemName;
  openPopup(popupImageBox);
}

function initialKey(e) {
  if (e.key === "Escape") {
    const initialPopup = document.querySelector(".popup_is-opened");
    if (initialPopup) {
      closePopup(initialPopup);
    }
  }
}
