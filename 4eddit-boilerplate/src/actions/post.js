import axios from "axios";
 


export const createPost = (title, text) => async (dispatch) => {

    const token =  window.localStorage.getItem("token");
    const axiosConfig = {
        headers: {
          auth: token
        }
      };
    
    const postInformation = {
        text,
        title,
    }

    try {
       
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`, 
        postInformation, axiosConfig );

        dispatch(getAllPosts());

    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar post")
        console.log(error)
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
       
     const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`,  axiosConfig );
         dispatch(setAllPosts(response.data.posts));

    } catch(error) {
        window.alert("Erro no feed")
        console.log(error)
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
        await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/vote`, voteData, axiosConfig );
        
        dispatch(getAllPosts());
    
    } catch(error) {
        window.alert("Erro no feed")
        console.log(error)
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
        await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, voteData, axiosConfig );
        
        dispatch(getPostDetails(postId));
    
    } catch(error) {
        window.alert("Erro no feed")
        console.log(error)
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
        const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}`,  axiosConfig );

        dispatch(setPostDetails(response.data.post));

    } catch(error) {
        console.log(error)
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
       
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment`, 
        postInformation, axiosConfig );

        dispatch(getPostDetails(postId));

    } catch(error) {
        window.alert("Ocorreu um erro ao tentar criar post")
        console.log(error)
    }
}