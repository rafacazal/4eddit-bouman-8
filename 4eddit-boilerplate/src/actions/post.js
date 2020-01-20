import axios from "axios";
// import { push } from "connected-react-router";
// import { routes } from "../containers/Router"

 


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
    console.log( direction, postId)

    try {
       
     await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/vote`,
      voteData, axiosConfig );
         dispatch(getAllPosts());
         console.log("deu certo ")

    } catch(error) {
        window.alert("Erro no feed")
        console.log(error)
    }
}