import React from 'react';
import styled from 'styled-components';


const TextContent = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    text-align: justify;
    letter-spacing: 0.75px;
    text-transform: lowercase;
    margin-right: 5vw;
    width: auto;
    word-wrap: break-word;
    max-width: 580px;
    @media (max-width: 380px) {
        font-size: 15px;
        max-width: 95vw;
    }
` 

const ContainerContent = styled.div`
    height: auto;
    display: flex;
    justify-content: initial;
    align-items: center;
`


function PostContent(props) {
    return (
        <ContainerContent onClick={props.onClick}>
            <TextContent>{props.content}</TextContent>
        </ContainerContent>
    );
}



export default PostContent;