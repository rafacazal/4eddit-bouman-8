import styled from 'styled-components';


export const CardTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: white;
    font-weight: 550;
    font-size: 20px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.4px;
    text-transform: uppercase; 
    margin-top: 0;
    margin-bottom: 2.5em;
`

export const StyledInput = styled.input`
    border: none;
    background-color: #EB9E89;
    border-bottom: 3px solid white;
    padding: 10px;
    margin-bottom: 2em;
    width: 100%;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-style: bold;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    outline: none;
`

export const StyledButton = styled.button`
    width: 9em;
    height: 2.5em;
    margin-top: 25px;
    background: #F5EBE7;
    font-family: 'Roboto', sans-serif;
    font-style: regular;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.70;
    border-radius: 200px;
    border: 2px solid  #ED7F61;

    @media (min-width: 340px) {
        
      }
`

export const ContainerInput = styled.div`
    width: 100%;
`