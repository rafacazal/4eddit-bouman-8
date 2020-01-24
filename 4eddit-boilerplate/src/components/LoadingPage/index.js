import React from 'react';
import styled from 'styled-components';
import PugGif from '../../resources/loading.gif';


const LoaderWrapper = styled.div`
  width: 400px;
  height: 300px;
`
const PugLoader = styled.img`
  width: 700px;
  height: 400px; 
  margin: 0 auto;
  height: auto;
  @media (max-width: 380px) {
    width: 90vw;
    margin-left: 3vw;
  }
`

const LoadingMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: regular;
  font-weight: 500;
  font-size: 30px;
  letter-spacing: 0.75px;
  color: #ED7F61;

  @media (max-width: 380px) {
      margin-top: 5vw;
      margin-left: 3vw;
  }
`

export const LoadingPage = () => (
  <LoaderWrapper>
    <PugLoader alt="Pug Loader" src={PugGif}/>
    <LoadingMessage>Carregando...</LoadingMessage>
  </LoaderWrapper>
)