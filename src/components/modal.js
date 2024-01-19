import { popupImageBox, popupImage, popupCaption } from "../index.js";

export function openPopup(e) {
  e.classList.add("popup_is-animated", "popup_is-opened");
  document.addEventListener("keydown", initialKey);
}

export function closePopup(e) {
  e.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", initialKey);
  setTimeout(() => e.classList.remove("popup_is-animated"), 600);
}

function overlayClose(e) {
  if (e.querySelector(".popup_is-opened")) {
    closePopup(e);
  }
}

export function openImagePopup(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
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
