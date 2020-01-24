import React from 'react';
import styled from 'styled-components';


const ContainerPostHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: initial;
    height: auto;
`  

const Username = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.75px;
    text-transform: lowercase;
    color: #000000;
    margin: 1.5em 0;
    width:  auto;
    max-width: 580px;
    word-wrap: break-word;
`

const Title = styled.p`
    font-family: Roboto;
    font-weight: bold;
    font-weight: 500;
    font-size: 24px;
    line-height: 16px;
    letter-spacing: 0.75px;
    text-transform: lowercase;
    color: #000000;
    @media (max-width: 380px) {
        font-size: 15px;
        max-width: 95vw;
    }
`


function PostHeader(props) {
    return (
        <ContainerPostHeader onClick={props.onClick}>
            <Username>{props.username}</Username>
            <Title>{props.title}</Title>
        </ContainerPostHeader>
    );
}



export default PostHeader;