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