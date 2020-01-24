import React from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar';
import PostHeader from '../PostHeader';
import PostContent from '../PostContent';
import PostFooter from '../PostFooter';


const ContainerPostDetailsCard = styled.div`
    background: #EB9E89;
    width: 700px;
    border-radius: 20px; 
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-auto-rows: auto 180px 40px auto;
    margin: 1em 0;
    height: auto; 
    @media (max-width: 780px) {
        width: 98vw;
        margin-left: 3vw;
      }
`  


function PostDetailsCard(props) {
    return (
        <ContainerPostDetailsCard>
            <SideBar 
            positiveVote={props.positiveVote} 
            negativeVote={props.negativeVote} 
            totalVotes={props.totalVotes}
            voted={props.voted}
            />
            <PostHeader 
            username={props.username}
            title={props.title} 
            />
            <PostContent
            content={props.content}
            /> 
            <PostFooter
            commentCount={props.commentCount}
            />
            {props.children}
        </ContainerPostDetailsCard>
    );
}
 


export default PostDetailsCard;