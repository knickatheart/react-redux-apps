import { ADDTODO, TOGGLE } from '../actions/todo.jsx'

const todo = (state, action) => {
	switch (action.type) {
		case ADDTODO:
			return {
				exec: ADDTODO,
				text: action.todo,
				completed: false,
				id: action.id
			}
		case TOGGLE:
			if (state.id !== action.id) return state

			return Object.assign({}, state, {
				completed: !state.completed
			})
		default: return state	
	}
}

export default todo