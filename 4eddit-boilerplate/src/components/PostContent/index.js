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
    margin-top: 40px;
`  


function PostContent(props) {
    return (
        <div onClick={props.onClick}>
            <TextContent>{props.content}</TextContent>
        </div>
    );
}



export default PostContent;