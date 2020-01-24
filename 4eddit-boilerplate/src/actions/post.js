import axios from "axios";
 

const BaseURL = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts'


export const createPost = (title, text) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    const postData = {
        text,
        title,
    }

    try {
        await axios.post(`${BaseURL}`, postData, axiosConfig );

        dispatch(getAllPosts());
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar o post.");
    }
}


export const getAllPosts = () => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    try {
        const response = await axios.get(`${BaseURL}`,  axiosConfig );

        dispatch(setAllPosts(response.data.posts));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar os posts do seu feed.");
    }
}


export const setAllPosts = (allPosts) => ({
    type: "SET_ALL_POSTS",
    payload: {
        allPosts,
    }
}); 


export const votePost = (direction, postId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };

    const voteData = {
        direction
    }

    try {
        await axios.put(`${BaseURL}/${postId}/vote`, voteData, axiosConfig );
        
        dispatch(getAllPosts());
        dispatch(getPostDetails(postId));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar votar no post.");
    }
}


export const voteComment = (direction, postId, commentId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");
    
    const axiosConfig = {
        headers: {
            auth: token
        }
    };

    const voteData = {
        direction
    }

    try {
        await axios.put(`${BaseURL}/${postId}/comment/${commentId}/vote`, voteData, axiosConfig );
        
        dispatch(getPostDetails(postId));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar votar no comentário.")
    }
}


export const setSelectedPostId = (selectedPostId) => ({
    type: 'SET_SELECTED_POST_ID',
    payload: {
        selectedPostId,
    }
})


export const getPostDetails = (postId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    try {       
        const response = await axios.get(`${BaseURL}/${postId}`,  axiosConfig );

        dispatch(setPostDetails(response.data.post));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar acessar os detalhes desse post.")
    }
}


export const setPostDetails = (post) => ({
    type: "SET_POST_DETAILS",
    payload: {
        post,
    }
}); 


export const createComment = (text, postId) => async (dispatch) => {
    const token =  window.localStorage.getItem("token");

    const axiosConfig = {
        headers: {
            auth: token
        }
    };
    
    const postInformation = {
        text,
    }

    try {
        await axios.post(`${BaseURL}/${postId}/comment`, postInformation, axiosConfig );

        dispatch(getPostDetails(postId));
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar o comentário.")
    }
}