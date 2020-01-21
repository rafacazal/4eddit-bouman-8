import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostDetails, createComment, votePost, voteComment } from "../../actions/post";
import  Up  from "../../resources/up.png";
import  Down  from "../../resources/down.png";
import { push } from "connected-react-router";
import { routes } from "../Router/index"

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
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }

    this.props.getPostDetails(this.props.selectedPostId)
  }

  handleFieldChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  sendCommentData = (event) => {
    event.preventDefault()
    const { text } = this.state.form
    const { selectedPostId } = this.props
    this.props.createComment(text, selectedPostId)
    this.setState({form: {}})
  }


  render() {
    const {postDetails} = this.props

    return (
        <div>
          <p>{postDetails.username}</p>
          <p>{postDetails.text}</p>
          <p>{postDetails.commentsNumber}</p>
          <img onClick={() => this.props.votePost(+1, postDetails.id)} src={Up} width="20px"/>
          <p>{postDetails.userVoteDirection}</p>
          <img onClick={() => this.props.votePost(-1, postDetails.id)} src={Down} width="20px"/>
          <form onSubmit={this.sendCommentData}>
            {commentForm.map( input => (
              <div key={input.name}>
                <input
                onChange={this.handleFieldChange}
                name={input.name}
                type={input.type}
                label={input.label}
                value={this.state.form[input.name] || ""}
                />
              </div>
            ))}
            <button type="submit">Comentar</button>
          </form>
          {postDetails.comments && postDetails.comments.map( comment => (
            <div key={comment.id}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
                <p>{comment.votesCount}</p>
                <img onClick={() => this.props.voteComment(+1, this.props.selectedPostId, comment.id)} src={Up} width="20px"/>
                {/* <p>{comment.userVoteDirection}</p> */}
                <img onClick={() => this.props.voteComment(-1, this.props.selectedPostId, comment.id)} src={Down} width="20px"/>
            </div>
          ))}
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
    getPostDetails: (postId) => dispatch(getPostDetails(postId)),
    createComment: (text, postId) => dispatch(createComment(text, postId)),
    votePost: (direction, postId) => dispatch(votePost(direction, postId)),
    voteComment: (direction, postId, commentId) => dispatch(voteComment(direction, postId, commentId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails);