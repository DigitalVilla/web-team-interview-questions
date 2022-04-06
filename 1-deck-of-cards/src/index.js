/*

## Part 1 - Deck of Cards

Write the following three APIs

1. addCard - Adds a card to the deck
2. getCard - Gets a specific card from the deck
3. getRandomCard - Gets a random card from the deck

*/
const deck = {}

/* card = {
    id:''
    ....
}
*/

// 1
function addCard(card) {
  const randomId = '1234'
  deck[randomId] = {
    id: randomId,
    ...card,
  }
  deck.ids = [randomId]
}

//1
function getCard(cardId) {
  const c = deck[cardId]
  return c ? c : null //?
}

// 1
function getRandomCard(randomId) {
  return deck[deck.ids[randomId]]
}
