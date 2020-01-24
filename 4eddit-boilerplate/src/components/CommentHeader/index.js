import React from 'react';
import styled from 'styled-components';


const ContainerCommentHeader = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    width: 30%;
    background-color: #F5EBE7;
    border-radius: 5px;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    @media (max-width: 780px) {
        width: fit-content;
      }
`  

const Username = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: #000000;
    margin: 1em 1em;
`


function CommentHeader(props) {
    return (
        <ContainerCommentHeader>
            <Username>{props.username}</Username>
        </ContainerCommentHeader>
    );
}



export default CommentHeader;