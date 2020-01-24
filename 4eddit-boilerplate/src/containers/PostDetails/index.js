import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostDetails, createComment, votePost, voteComment } from "../../actions/post";
import { push } from "connected-react-router";
import { routes } from "../Router/index"
import Header from "../../components/Header"
import PostDetailsCard from "../../components/PostDetailsCard";
import PostComment from "../../components/PostComment";
import CommentCard from "../../components/CommentCard"
import { ContainerInput, TextField, CommentButton, PostDetailsContainer, ContainerComment } from "../../style/postDetails"
import { LoadingPage } from '../../components/LoadingPage';


const commentForm = [
    {
      name: "text",
      type: "text",
      label: "Escreva seu Comentário",
      required: true
    }
]


class PostsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }


  componentDidMount() {
    const { selectedPostId, getPostDetails, goToLoginPage, goToFeedPage } = this.props
    const token = window.localStorage.getItem("token")

    if (token === null) {
      goToLoginPage()
    } else if (selectedPostId === "") {
      goToFeedPage()
    }

    getPostDetails(selectedPostId)
  }


  handleFieldChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } })
  };


  sendCommentData = (event) => {
    event.preventDefault()

    const { text } = this.state.form;
    const { selectedPostId, createComment } = this.props;
    createComment(text, selectedPostId)

    this.setState({form: {}})
  }

  sendCommentVote = (direction, postId, commentId ) => {
    this.props.voteComment(direction, postId, commentId)
  }


  handleLoadingPage = () => {
    if (Object.keys(this.props.postDetails).length === 0) {
      return true
    } else {
      return false
    }
  }


  render() {
    const { postDetails, votePost, voteComment } = this.props

    return (
      <div>
        <Header/>
        { this.handleLoadingPage() ? <LoadingPage/> :
        <PostDetailsContainer>
          <PostDetailsCard
          key={postDetails && postDetails.id} 
          positiveVote={() => votePost(+1, postDetails.id)}
          negativeVote={() => votePost(-1, postDetails.id)}
          totalVotes={postDetails && postDetails.votesCount}
          username={postDetails && postDetails.username}
          title={postDetails && postDetails.title}
          content={postDetails && postDetails.text}
          voted={postDetails && postDetails.userVoteDirection}
          commentCount={postDetails && postDetails.commentsNumber}
          >
            <PostComment onSubmit={this.sendCommentData}>
              {commentForm.map( input => (
                <ContainerInput key={input.name}>
                  <TextField
                  onChange={this.handleFieldChange}
                  name={input.name}
                  type={input.type}
                  label={input.label}
                  value={this.state.form[input.name] || ""}
                  />
                </ContainerInput>
              ))}
              <CommentButton type="submit">Comentar</CommentButton>
            </PostComment>
            <ContainerComment>
              { postDetails && postDetails.comments && postDetails.comments.map( comment => (
                <CommentCard 
                key={comment.id}
                positiveVote={() => this.sendCommentVote(+1, postDetails.id, comment.id)}
                negativeVote={() => this.sendCommentVote(-1, postDetails.id, comment.id)}
                totalVotes={comment && comment.votesCount}
                username={comment && comment.username}
                content={comment && comment.text}
                voted={comment && comment.userVoteDirection} 
                />
              ))}
            </ContainerComment>
          </PostDetailsCard>
        </PostDetailsContainer>}
      </div>
    );
  }
}   


const mapStateToProps = state => ({
  selectedPostId: state.posts.selectedPostId,
  postDetails: state.posts.postDetails,
});


const mapDispatchToProps = dispatch => ({
  goToLoginPage: () => dispatch(push(routes.root)),
  goToFeedPage: () => dispatch(push(routes.feed)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  createComment: (text, postId) => dispatch(createComment(text, postId)),
  votePost: (direction, postId) => dispatch(votePost(direction, postId)),
  voteComment: (direction, postId, commentId) => dispatch(voteComment(direction, postId, commentId)),
})



export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails);