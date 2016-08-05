/**
 * @author Luigi
 *
 * Miscellaneous utility functions and constants
 */
export const SUITS = ["Hearts", "Spades", "Diamonds", "Clubs"]

let randomSuit = () => {
	return Math.floor(Math.random() * (3 - 0 + 1) + 0)
}

let randomCard = () => {
	return Math.floor(Math.random() * (12 - 0 + 1) + 0)
}

let values = []

for (let key = 1; key <= 13; key++) {
	if (key >= 11 || !key) {
		switch (key) {
			case 11:
				values[10] = {
					key: 'Jack',
					value: 10,
					active: true
				}
			case 12:
				values[11] = {
					key: 'Queen',
					value: 10,
					active: true
				}
			case 13:
				values[12] = {
					key: 'King',
					value: 10,
					active: true
				}
			default:
				values[0] = {
					key: 'Ace',
					value: 1,
					active: true
				}	
		}
	} else {
		values.push({
			key: key,
			active: true,
			value: key
		})
	}
}

export const cards = SUITS.map((elem) => {
	return {
		suit: elem,
		values: values
	}
})

export const randomPick = (deck) => {
	let suit = randomSuit()
	let card = randomCard()

	return {
		suit: cards[suit].suit,
		key: cards[suit].values[card].key,
		value: cards[suit].values[card].value,
		text: cards[suit].values[card].key + ' of ' + cards[suit].suit
	}
}

export const makeUnique = (deck) => {
	let obj = {}
	let arr = []

	for (var x = 0; x < deck.length; x++) { 
		obj[deck[x]['text']] = deck[x]
	}

	for (var y in obj) {
		arr.push(obj[y])
	}

	return arr
}