import { ADDPOST, REMOVEPOST } from '../actions/post.jsx'

const post = (state, action) => {
	switch (action.type) {
		case ADDPOST:
			return {
				exec: ADDPOST,
				name: action.post.name,
				text: action.post.text,
				id: action.id
			}	
		default:
			return state
	}
}

export default post