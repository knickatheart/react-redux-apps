import { ADD, REMOVE } from '../actions/cart.jsx'

import { combineReducers } from 'redux'

import sku from './sku.jsx'

const cartById = (state = {}, action) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				[action.id]: sku(state[action.id], action)
			}
		case REMOVE:
			return {
				...state,
				[action.removeId]: sku(state[action.removeId], action)
			}
		default:
			return state
	}
}

const cartAllIds = (state = [], action) => {
	state.map((id, key) => (id === action.removeId) ? state.splice(key, 1) : '')

	switch (action.type) {
		case ADD:
			return [...state, action.id]
		default:
			return state
	}
}

const cart = combineReducers({
	cartById,
	cartAllIds
})

export default cart