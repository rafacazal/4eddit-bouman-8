import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


const BaseURL = 'https://us-central1-missao-newton.cloudfunctions.net/fourEddit'


export const autenticateLogin = (email, password) => async (dispatch) => {
    const loginInformation = {
        email,
        password,
    }

    try {
        const response = await axios.post(`${BaseURL}/login`, loginInformation);
        
        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken);
        
        dispatch(push(routes.feed))
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar fazer login.")
    }
}


export const createUser = (email, password, username) => async (dispatch) => {
    const registerInformation = {
        email,
        password,
        username,
    }

    try {
        const response = await axios.post(`${BaseURL}/signup`, registerInformation);

        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken); 
        
        dispatch(push(routes.feed))

        window.alert("registro realizado!")
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar se registrar.")
    }
}
