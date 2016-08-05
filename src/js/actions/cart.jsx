import { v4 } from 'node-uuid'

export const ADD = 'ADD', REMOVE = 'REMOVE'

export const add = (sku) => ({
	type: ADD,
	id: v4(),
	sku
})

export const remove = (removeId) => ({
	type: REMOVE,
	removeId
})