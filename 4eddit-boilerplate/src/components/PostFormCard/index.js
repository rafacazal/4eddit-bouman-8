import React from 'react';
import styled from 'styled-components';


const ContainerFormPost = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 20px;
    border: 2px solid  #EB9E89;
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 780px) {
        width: 95vw;
        margin-left: 3vw;
      }
`  


function PostFormCard(props) {
    return (
        <ContainerFormPost>
            {props.children}
        </ContainerFormPost>
    );
}



export default PostFormCard;