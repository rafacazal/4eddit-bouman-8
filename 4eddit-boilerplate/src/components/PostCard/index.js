import React from 'react';
import styled from 'styled-components';

const ContainerFormCard = styled.div`
    padding: 20px;
    width: 300px;
    border: 1px solid black;
    color: black;  
`  

function PostCard(props) {
    return (
        <ContainerFormCard onClick={props.onClick}>
            {props.children}
        </ContainerFormCard>
    );
}
export default PostCard;