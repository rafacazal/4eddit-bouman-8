import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, getAllPosts } from "../../actions/post"
import posts from "../../reducers/posts";

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

class PostsDetails extends Component {
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
          {/* { this.props.allPosts.map(post => ( <li> {post.title} </li>)) } */}

      </div>
    );
  }
}

// const mapStateToProps = state => ({
//     allPosts: state.posts.allPosts
//   });

  
const mapDispatchToProps = dispatch => ({
    createPost: (title, text ) => dispatch(createPost(title, text )),
    getAllPosts: () => dispatch(getAllPosts())
})


export default connect(mapStateToProps, mapDispatchToProps)(Feed);