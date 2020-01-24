import React from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar';
import CommentHeader from '../CommentHeader'
import CommentContent from '../CommentContent'


const ContainerCommentCard = styled.div`
    background: #EB9E89;
    width: 700px;
    height: auto; 
    border-radius: 20px; 
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-auto-rows: 40px 1fr;
    margin: 1em 0;
    @media (max-width: 780px) {
        width: 95vw;
        margin-left: 3vw;
    }
`  


function CommentCard(props) {
    return (
        <ContainerCommentCard>
            <SideBar 
            positiveVote={props.positiveVote} 
            negativeVote={props.negativeVote} 
            totalVotes={props.totalVotes}
            voted={props.voted}
            />
            <CommentHeader
            username={props.username}
            />
            <CommentContent
            content={props.content}
            />
        </ContainerCommentCard>
    );
}
 


export default CommentCard;