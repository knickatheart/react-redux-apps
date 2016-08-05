import { ADDPOST, REMOVEPOST } from '../actions/post.jsx'
import post from './post.jsx'

import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
	switch (action.type) {
		case ADDPOST:
			return {
				...state,
				[action.id]: post(state[action.id], action)
			}
		case REMOVEPOST:
			return {
				...state,
				[action.id]: null
			}
		default:
			return state
	}
}

const allById = (state = [], action) => {
	switch (action.type) {
		case ADDPOST:
			return [...state, action.id]
		default:
			return state
	}
}

export default combineReducers({
	byId,
	allById
})