import React from 'react';
import styled from 'styled-components';


export const HeaderContainer = styled.header`
    width: 100%;
    height: 21vh;
    background-color: #ED7F61;
`

function Header(props) {
    return (    
    <HeaderContainer>
         {props.children}
    </HeaderContainer>
    );
}

export default Header;