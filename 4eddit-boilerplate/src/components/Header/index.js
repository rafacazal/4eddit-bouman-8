import React from 'react';
import LogoHeader from '../../resources/logoheader.jpg'; 
import { LogoStyled, HeaderContainer }  from '../../style/header';
import { RegisterButton } from '../../style/registerButton'

function Header(props) {
    return (    
    <HeaderContainer>
        <LogoStyled src={LogoHeader} />
         {props.children}
         <RegisterButton onClick={props.onClick}>Cadastre-se</RegisterButton>     
    </HeaderContainer>
    );
}

export default Header;