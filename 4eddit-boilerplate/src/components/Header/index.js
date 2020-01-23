import React from "react";
import styled from "styled-components";
import logoHeader from "../../resources/logoheader.jpg";


const HeaderContainer = styled.header`
    width: 100%;
    height: auto;
    background-color: #ED7F61;
`

const LogoHeader = styled.img`
    width: auto;
    height: 18vh;
`

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5EBE7;
`


function Header(props) {
    return (
        <PageContainer>
            <HeaderContainer>
                <LogoHeader alt="Logo 4eddit" src={logoHeader} ></LogoHeader>
                {props.children}
            </HeaderContainer>
        </PageContainer>
    );
}



export default Header;