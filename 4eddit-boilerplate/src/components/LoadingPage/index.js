import React from 'react';
import styled from 'styled-components';
import PugGif from '../../resources/loading.gif';


const LoaderWrapper = styled.div`
  position: absolute;
  bottom: 60%;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vw;
`
const PugLoader = styled.img`
width: 100px;
height: 100px;
`

const LoadingMessage = styled.p`
font-family: 'Roboto', sans-serif;
font-style: regular;
font-weight: 500;
font-size: 15px;
line-height: 16px;
text-align: center;
letter-spacing: 0.75px;
text-transform: uppercase;
color: #ED7F61;
mix-blend-mode: normal;
`
export const Loader = () => (
  <LoaderWrapper>
      <PugLoader alt="Pug Loader" src={PugGif}/>
   <LoadingMessage>Carregando...</LoadingMessage>
  </LoaderWrapper>
)