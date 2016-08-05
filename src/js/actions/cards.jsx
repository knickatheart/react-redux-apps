/**
 * @author Luigi
 *
 * Cards Actions
 */
export const GENERATE = 'GENERATE', RANDOMIZE = 'RANDOMIZE', STICK = 'STICK', START = 'START'

export const generate = (cards) => ({
	type: GENERATE,
	cards
})

export const randomize = (cards) => ({
	type: RANDOMIZE,
	cards
})

export const stick = (timeout) => ({
	type: STICK,
	timeout
})

export const start = (cards) => ({
	type: START,
	cards
})

export const restart = (cards) => ({
	type: 'default',
	cards
})