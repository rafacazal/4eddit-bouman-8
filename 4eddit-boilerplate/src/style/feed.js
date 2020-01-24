import styled from 'styled-components';


export const TextField = styled.input` 
    width: 100%;
    height: 100%;
    border: none; 
    background-color: #F5EBE7;
    border-radius: 4px;
    margin-bottom: 1em;
    font-size: auto;
    outline: none;
    text-indent: 1em;
`

export const ButtonPost = styled.button`
    background: #F5EBE7;
    border-radius: 200px;
    border: 2px solid  #EB9E89;
    padding: 7px 23px;
    font-weight: bold;
    align-self: flex-end;
    justify-self: right;
`

export const FormPost = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

export const ContainerInput = styled.div`
    margin-bottom: 3em;
    height: 2.5em;
    :nth-child(2){
        height: 7em;
    }
`

export const FeedContainer = styled.div`
    margin: 80px auto;
    width: 700px;
`