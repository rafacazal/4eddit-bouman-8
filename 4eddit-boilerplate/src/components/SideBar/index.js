import React from 'react';
import styled from 'styled-components';
import  Up  from "../../resources/up.png";
import  Down  from "../../resources/down.png";


const ContainerSideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    padding-top: 0.8em;
`  


function SideBar(props) {
    return (
        <ContainerSideBar>
            <img onClick={props.positiveVote} src={Up} alt="Voto Positivo" width="32px"/>
            <p>{props.totalVotes}</p>
            <img onClick={props.negativeVote} src={Down} alt="Voto Positivo" width="32px"/>
        </ContainerSideBar>
    );
}



export default SideBar;