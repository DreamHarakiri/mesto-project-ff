import { cardTemplatesContent, cardsContainerPlaces } from "../index";
import { openImagePopup } from "./modal";

function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

export function createCard(card, deleteCardFunction, likeProc) {
  const allCards = cardTemplatesContent.querySelector(".card").cloneNode(true);

  const cardImage = allCards.querySelector(".card__image");
  const cardTitle = allCards.querySelector(".card__title");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  const likeButton = allCards.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    likeCard(likeButton);
  });

  allCards
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  cardImage.addEventListener("click", () => {
    openImagePopup(card.link, card.name);
  });

  return allCards;
}

export function deleteCardFunction(e) {
  const cardRemove = e.target.closest(".card");
  cardRemove.remove();
}

export function addCard(name, link) {
  const card = createCard({ name: name, link: link }, deleteCardFunction);
  cardsContainerPlaces.prepend(card);
}
