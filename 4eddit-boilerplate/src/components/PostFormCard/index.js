import React from 'react';
import styled from 'styled-components';



const ContainerFormPost = styled.div`
    width: 700px;
    background-color: #EB9E89;
    border-radius: 20px;
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`  


function PostFormCard(props) {
    return (
        <ContainerFormPost>
            {props.children}
        </ContainerFormPost>
    );
}



export default PostFormCard;