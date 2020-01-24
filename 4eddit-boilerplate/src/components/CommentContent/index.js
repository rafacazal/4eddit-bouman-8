import React from 'react';
import styled from 'styled-components';


const TextContent = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: justify;
    letter-spacing: 0.75px;
    text-transform: lowercase;
    margin-top: 40px;
    margin-left: 1em;    
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
`  

const ContainerCommentContent = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 95%;
`  


function CommentContent(props) {
    return (
        <ContainerCommentContent>
            <TextContent>{props.content}</TextContent>
        </ContainerCommentContent>
    );
}



export default CommentContent;