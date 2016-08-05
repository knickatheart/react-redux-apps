import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// Reducers
import cart from '../reducers/cart.jsx'
import cards from '../reducers/cards.jsx'
import posts from '../reducers/posts.jsx'
import todos from '../reducers/todos.jsx'
import filter from '../reducers/filter.jsx'

import { loadState, saveState } from './localStorage.jsx'

const persistedState = loadState()

const enhancer = compose(
	applyMiddleware(
		createLogger(),
		thunkMiddleware
	),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

export const store = createStore(
	combineReducers({
		cart: cart,
		cards: cards,
		posts: posts,
		list: todos, 
		filter: filter
	}),
	persistedState,
	enhancer
)

store.subscribe(() => {
	saveState({
		cards: store.getState().cards,
		posts: store.getState().posts,
		cart: store.getState().cart,
		list: store.getState().list
	})
})