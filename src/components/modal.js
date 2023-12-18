import { formElement, cardTemplate, cardsContainer, openImage } from "../index";

export function createCard(card, deleteCardFunction, likeProc) {
  const allCard = cardTemplate.querySelector(".card").cloneNode(true);

  allCard.querySelector(".card__title").textContent = card.name;
  allCard.querySelector(".card__image").src = card.link;
  allCard.querySelector(".card__image").alt = card.name;

  const likeButton = allCard.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    stateLike(likeButton);
  });

  allCard
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  allCard.querySelector(".card__image").addEventListener("click", openImage);

  return allCard;
}

export function updateCards(card, deleteCardFunction, likeProc) {
  const newcard = cardTemplate.querySelector(".card").cloneNode(true);

  newcard.querySelector(".card__title").textContent = card.name;
  newcard.querySelector(".card__image").src = card.link;
  newcard.querySelector(".card__image").alt = card.name;

  const likeButton = newcard.querySelector(".card__like-button");

  likeButton.addEventListener("click", function () {
    stateLike(likeButton);
  });

  newcard
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCardFunction);

  cardsContainer.append(newcard);

  newcard.querySelector(".card__image").addEventListener("click", openImage);

  return newcard;
}
