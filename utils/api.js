import { AsyncStorage } from 'react-native'
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

const DECKS_KEY = 'UdaciCards:decks';

export function fetchCalendarResults () {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

export function getDecks () {
  return AsyncStorage.getItem(DECKS_KEY, (err, result) => {
    if (result === null) {
      return { decks: {}};
    }
    return JSON.parse(result);
  });
}
/*
export function getDeck (deckTitle) {
  return AsyncStorage.getItem(DECKS_KEY, (err, result) => {
    if (result === null) {
      return { deck: {}};
    }
      const data = JSON.parse(result);
      return (JSON.stringify(data[deckTitle]));
  });
}
*/
export function saveDeck (deckTitle) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions:[]
      }
    })
  );
}

export function addCardToDeck(deckTitle, card) {
  return AsyncStorage.getItem(DECKS_KEY).then (result => {
    const data = JSON.parse(result);
    data[deckTitle].questions.push(card);
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data));
  });
}
