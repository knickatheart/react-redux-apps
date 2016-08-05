import { v4 } from 'node-uuid'

export const ADDPOST = 'ADDPOST', REMOVEPOST = 'REMOVEPOST'

export const addPost = (post) => ({
	type: ADDPOST,
	id: v4(),
	post
})

export const removePost = (post) => ({
	type: REMOVEPOST,
	id: post.id || 1,
	post
})