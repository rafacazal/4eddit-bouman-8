import React from 'react';
import styled from 'styled-components';


const ContainerLoginCard = styled.form`
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin: 120px auto;
    background: #EB9E89;
    border: 2px solid #ED7F61;
    align-items: center;    
    border-radius: 30px;
    width: 430px;
    height: auto;
    @media (max-width: 780px) {
        width: 95vw;
        margin-left: 3vw;
      }
`


function PostComent(props) {
    return (    
        <ContainerLoginCard> 
            {props.children}
        </ContainerLoginCard>
    );
}


export default PostComent;