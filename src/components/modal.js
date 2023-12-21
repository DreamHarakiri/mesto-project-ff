import {
  formElement,
  cardTemplatesContent,
  cardsContainerPlaces,
  openImagePopup,
} from "../index";
import { likeCard } from "./card";

export function createCard(card, deleteCardFunction, likeProc) {
  const allCards = cardTemplatesContent.querySelector(".card").cloneNode(true);

  const cardImage = allCards.querySelector(".card__image");

  allCards.querySelector(".card__title").textContent = card.name;
  allCards.querySelector(".card__image").src = card.link;
  allCards.querySelector(".card__image").alt = card.name;

  const likeButton = allCards.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    likeCard(likeButton);
  });

  allCards
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  allCards
    .querySelector(".card__image")
    .addEventListener("click", openImagePopup);

  return allCards;
}

export function deleteCardFunction(e) {
  console.log("test");
  const cardRemove = e.target.closest(".card");
  cardRemove.remove();
}
