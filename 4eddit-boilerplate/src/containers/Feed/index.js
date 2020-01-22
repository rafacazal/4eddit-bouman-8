import React, { Component } from "react";
import { connect } from "react-redux";
import posts from "../../reducers/posts";
import PostCard from "../../components/PostCard";
import  Up  from "../../resources/up.png"
import  Down  from "../../resources/down.png"
import { createPost, getAllPosts, votePost } from "../../actions/post"

// import { createUser } from "../../actions/user"


const feedForm = [
  {
    name: "title",
    type: "text",
    label: "Título",
    required: true
  },
  {
    name: "text",
    type: "text",
    label: "Escreva seu post",
    required: true
  }
]

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }


  componentDidMount() {
    this.props.getAllPosts()
  }

  handleFieldChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  sendPostData = (event) => {
    event.preventDefault()
    const { title, text } = this.state.form
    this.props.createPost(title, text)
  }

  render() {

    console.log(this.props.allPosts)
    return (
      <div>
          <form onSubmit={this.sendPostData}>
            {feedForm.map( input => (
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

            <button type="submit" color="primary" size="large" onClick={this.sendPostData}>Criar post</button>
          </form>

          { this.props.allPosts.map(post => ( 
            
          <PostCard>
         <li> {post.title} </li>
          <img onClick={() => {this.props.votePost(+1, post.id)}} src={Up} width="20px"/>
          <p>{post.userVoteDirection}</p>
          <img onClick={() => {this.props.votePost(-1, post.id)}} src={Down} width="20px"/>
          </PostCard> )) }

      </div>
    );
  }
}

const mapStateToProps = state => ({
    allPosts: state.posts.allPosts
  });

  
const mapDispatchToProps = dispatch => ({
    createPost: (title, text ) => dispatch(createPost(title, text )),
    getAllPosts: () => dispatch(getAllPosts()),
    votePost: (direction, postId) => dispatch(votePost(direction, postId))
})


export default connect(mapStateToProps, mapDispatchToProps)(Feed);