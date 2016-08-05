/**
 * @author Luigi
 *
 * Cards Reducer
 */
import { GENERATE, RANDOMIZE, STICK, START } from '../actions/cards.jsx'
import { SUITS, VALUES, cards, randomPick, makeUnique } from '../utils/cards.jsx'

const generateCards = (state = [], action) => {
	switch (action.type) {
		case GENERATE:
			return [ ...cards ]
		case START:
			return {
				random: { 
					"dealer": {
						cards: [randomPick(state)],
						points: 0
					},
					"player": {
						cards: [
							randomPick(state),
							randomPick(state)
						],
						points: 0
					}
				},
				...state
			}	
		case RANDOMIZE:
			let playerPoints = 0

			const playerRandomCards = [...state.random.player.cards, randomPick(state)]
			
			const uniquePlayerDeck = makeUnique(playerRandomCards)
			
			let getPoints = () => {
				return uniquePlayerDeck.map((item) => {
					playerPoints = item.value + playerPoints
				})
			}

			getPoints()

			return {
				...state,
				random: {
					"dealer": {
						cards: state.random.dealer.cards,
						points: state.random.dealer.cards.points
					},
					"player": {
						cards: uniquePlayerDeck,
						points: playerPoints
					}
				}
			}
		case STICK:
			let dealerPoints = 0

			const dealerRandomCards = [...state.random.dealer.cards, randomPick(state)]

			const uniqueDealerDeck = makeUnique(dealerRandomCards)

			let getDealerPoints = () => {
				return uniqueDealerDeck.map((item) => {
					dealerPoints = item.value + dealerPoints
				})
			}

			getDealerPoints()

			return {
				...state,
				random: {
					"dealer": {
						cards: uniqueDealerDeck,
						points: dealerPoints
					},
					"player": {
						cards: state.random.player.cards,
						points: state.random.player.cards.points
					}
				},
				finished: true,
				timeout: action.timeout
			}
		default:
			return {
				...state,
				random: undefined
			}
	}
}

export default generateCards