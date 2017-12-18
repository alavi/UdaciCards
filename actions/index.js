export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
//export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = "ADD_CARD";

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  };
}
/*
export function receiveCards (cards) {
  return {
    type: RECEIVE_CARDS,
    cardss,
  }
}
*/
export function addCard (id, card) {
  return {
    type: ADD_CARD,
    id,
    card
  };
}
