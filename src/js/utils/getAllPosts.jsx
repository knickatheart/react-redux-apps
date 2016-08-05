const getAllPosts = (state) => state.allById.map(id => state.byId[id])

export default getAllPosts