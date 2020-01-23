import styled from 'styled-components';


export const ContainerInput = styled.div`
    margin-bottom: 3em;
    height: 5em;
`

export const TextField = styled.textarea` 
    width: 100%;
    height: 5em;
    border: none; 
    margin-bottom: 1em;
    font-size: auto;
    outline: none;
    text-indent: 1em;
`

export const CommentButton = styled.button`
    background: #F5EBE7;
    border-radius: 200px;
    border: none;
    padding: 7px 23px;
    font-weight: bold;
    align-self: flex-end;
`

export const PostDetailsContainer = styled.div`
    margin: 80px auto;
    width: 700px;
    height: auto;
`

export const ContainerComment = styled.div`
    grid-column-start: 1;
    grid-column-end: auto;
    grid-row-start: 5;
    grid-row-end: auto;
`