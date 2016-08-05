import { ADD, REMOVE } from '../actions/cart.jsx'

const sku = (state = {}, action) => {
	switch (action.type) {
		case ADD:
			return Object.assign({}, action.sku, {
				active: true,
				id: action.id
			})
		case REMOVE:
			return Object.assign({}, state, {
				active: false,
				id: action.id
			})	
		default:
			return state
	}
}

export default sku