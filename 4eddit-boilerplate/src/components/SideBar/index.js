import React from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


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
            <ArrowUpwardIcon 
            color={props.voted === +1 ? "primary" : "default"}
            onClick={props.positiveVote}  
            alt="Voto Positivo" 
            width="32px"
            />
            <p>{props.totalVotes}</p>
            <ArrowDownwardIcon 
            color={props.voted === -1 ? "secondary" : "default"}
            onClick={props.negativeVote} 
            alt="Voto Negativo" 
            width="32px"
            />
        </ContainerSideBar>
    );
}



export default SideBar;