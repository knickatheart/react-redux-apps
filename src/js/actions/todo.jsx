import { v4 } from 'node-uuid'

export const ADDTODO = 'ADDTODO', TOGGLE = 'TOGGLE'

export const add = (todo) => ({
	type: ADDTODO,
	id: v4(),
	todo
})

export const toggle = (id) => ({
	type: TOGGLE,
	id
})