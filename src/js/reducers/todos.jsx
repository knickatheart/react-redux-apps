import { ADDTODO, TOGGLE } from '../actions/todo.jsx'

import todo from './todo.jsx'

import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
	switch (action.type) {
		case ADDTODO:
		case TOGGLE:
			return {
				...state,
				[action.id]: todo(state[action.id], action)
			}
		default:
			return state	
	}
}

const allIds = (state = [], action) => {
	switch (action.type) {
		case ADDTODO:
			return [...state, action.id]
		default:
			return state
	}
}

const todos = combineReducers({
	byId,
	allIds
})

export default todos