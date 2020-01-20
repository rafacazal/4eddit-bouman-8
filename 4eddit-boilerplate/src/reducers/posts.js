const initialState = {
    allPosts: [],
}
const posts = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_POSTS':
            const postList = action.payload.allPosts;
            return {...state, allPosts: postList};
        default:
            return state;
    }
}
export default posts;
