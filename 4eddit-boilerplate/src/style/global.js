import styled from 'styled-components';

// botao cadastre-se
export const RegisterPageButton = styled.button`
    position: absolute;
    left: 80%;
    width: 14vw;
    height: 5vh;
    right: 2.95%;
    top: 6.8%;
    bottom: 94%;
    background: #EB9E89;
    font-family: ‘Roboto’, sans-serif;
    font-style: normal;
    border: none;
    border-radius: 200px;
    color: white;
    font-weight: 500;
    font-size: 20px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    @media (max-width: 375px) {
        position: absolute;
        width: 50vw;
        left: 25vw;
        right: 5vw;
        bottom: 10vw;
        top: 50vw;

    }
`
export const LogOutButton = styled.button`
    position: absolute;
    left: 80%;
    width: 14vw;
    height: 5vh;
    right: 2.95%;
    top: 6.8%;
    bottom: 94%;
    background: #EB9E89;
    font-family: ‘Roboto’, sans-serif;
    font-style: normal;
    border: none;
    border-radius: 200px;
    color: white;
    font-weight: 500;
    font-size: 20px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    @media (max-width: 380px) {
        position: absolute;
        width: 40vw;
        left: 30%;
        right: 20%
        bottom: 58%;
        top: 21%;
        opacity: 0.50;
    }
`
