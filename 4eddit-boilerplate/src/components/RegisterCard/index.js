import React from 'react';
import styled from 'styled-components';

const RegisterCardWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 40px;
margin: 10% auto;
background: #EB9E89;
border: 2px solid #ED7F61;
align-items: center;    
border-radius: 30px;
width: 40vw;
heigth: 500px;
`

function RegisterCard(props) {
    return (    
        <RegisterCardWrapper> 
        {props.children}
        </RegisterCardWrapper>
    );
}

export default RegisterCard;