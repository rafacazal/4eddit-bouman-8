import React from 'react';
import styled from 'styled-components';


const ContainerPostComment = styled.form`
    width: 700px;
    background-color: #EB9E89;
    border-radius: 20px;
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 4;
    @media (max-width: 780px) {
        width: 95vw;
        margin-left: 1vw;
        border: 1px solid white;
    }
`  


function PostComment(props) {
    return (
        <ContainerPostComment onSubmit={props.onSubmit}>
            {props.children}
        </ContainerPostComment>
    );
}



export default PostComment;