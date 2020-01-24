import React from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar';
import PostHeader from '../PostHeader';
import PostContent from '../PostContent';
import PostFooter from '../PostFooter';


const ContainerPostCard = styled.div`
    background: #EB9E89;
    width: 700px;
    height: 300px; 
    border-radius: 20px; 
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-auto-rows: 1fr 1fr 40px;
    margin: 1em 0;
    @media (max-width: 380px) {
        width: 95vw;
        margin-left: 3vw;
    }
`  


function PostCard(props) {
    return (
        <ContainerPostCard>
            <SideBar 
            positiveVote={props.positiveVote} 
            negativeVote={props.negativeVote} 
            totalVotes={props.totalVotes}
            voted={props.voted}
            />
            <PostHeader 
            onClick={props.onClick}
            username={props.username}
            title={props.title} 
            />
            <PostContent
            onClick={props.onClick}
            content={props.content}
            /> 
            <PostFooter
            onClick={props.onClick}
            commentCount={props.commentCount}
            />
        </ContainerPostCard>
    );
}
 


export default PostCard;