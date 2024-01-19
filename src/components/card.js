import { cardTemplatesContent, cardsContainerPlaces } from "../index";
import { putLike, deleteLike, deleteCard } from "./api";

import { openImagePopup } from "./modal";

export function createCard(card, profileId, deleteCardFunction, likeProc) {
  const allCards = cardTemplatesContent.querySelector(".card").cloneNode(true);

  const cardImage = allCards.querySelector(".card__image");
  const cardTitle = allCards.querySelector(".card__title");
  const cardLike = allCards.querySelector(".like__counts");
  const likeButton = allCards.querySelector(".card__like-button");
  const deleteButton = allCards.querySelector(".card__delete-button");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardLike.textContent = card.likes.length;

  cardImage.addEventListener("click", () => {
    openImagePopup(card.link, card.name);
  });

  likeButton.addEventListener("click", function () {
    likeCard(card, profileId, allCards);
  });

  if (profileId !== card.owner["_id"]) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", (e) => {
      deleteCardFunction(e, card._id);
    });
  }

  return allCards;
}

export function deleteCardFunction(e, cardId) {
  deleteCard(cardId)
    .then(() => e.target.closest(".card").remove())
    .catch((err) => console.log(err));
}

export function likeCard(card, profileId, cardElement) {
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".like__counts");

  if (isLikeMine(card, profileId)) {
    deleteLike(card._id)
      .then((res) => {
        likeCount.textContent = res.likes.length;
        likeButton.classList.remove("card__like-button_is-active");
        card.likes = res.likes;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    putLike(card._id)
      .then((res) => {
        likeCount.textContent = res.likes.length;
        likeButton.classList.add("card__like-button_is-active");
        card.likes = res.likes;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function isLikeMine(card, profileId) {
  return card.likes.some((item) => item._id === profileId);
}
