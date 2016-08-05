const getAllTodos = (state) => state.allIds.map(id => state.byId[id])

const getVisibleTodos = (
	state,
	filter
) => {
	const allTodos = getAllTodos(state)

	switch (filter) {
		case 'SHOW_ALL':
			return allTodos;
		case 'SHOW_COMPLETED':
			return allTodos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return allTodos.filter(t => !t.completed)	
		default:
			throw new Error(`Unknown filter: ${filter}.`)	
	}
}

export default getVisibleTodos