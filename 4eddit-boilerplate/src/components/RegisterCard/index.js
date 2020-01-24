import React from 'react';
import styled from 'styled-components';


const ContainerRegisterCard = styled.form`
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin: 120px auto;
    background: #EB9E89;
    border: 2px solid #ED7F61;
    align-items: center;    
    border-radius: 30px;
    width: 430px;
    height: 500px;
    @media (max-width: 780px) {
        width: 80vw;
      }
`


function RegisterCard(props) {
    return (    
        <ContainerRegisterCard> 
            {props.children}
        </ContainerRegisterCard>
    );
}



export default RegisterCard;