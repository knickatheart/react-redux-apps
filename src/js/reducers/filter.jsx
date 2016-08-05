import { SETFILTER } from '../actions/filter.jsx'

const filter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case SETFILTER:
			return action.filter
		default:
			return state
	}
}

export default filter