const initialState = {
    allPosts: [],
    selectedPostId: "",
    postDetails: {},
    
}


const posts = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_POSTS':
            const postList = action.payload.allPosts;
            return {...state, allPosts: postList};
        case 'SET_SELECTED_POST_ID':
            const postId = action.payload.selectedPostId;
            return {...state, selectedPostId: postId};
        case 'SET_POST_DETAILS':
            const post = action.payload.post;
            return {...state, postDetails: post}
        default:
            return state;
    }
}



export default posts;
