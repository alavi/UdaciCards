export const ADD_CARD = "ADD_CARD";
export const ADD_DECK = "ADD_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addCard (id, card) {
  return {
    type: ADD_CARD,
    id,
    card
  };
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  };
}
