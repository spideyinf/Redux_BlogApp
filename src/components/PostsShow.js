import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import { Link } from 'react-router-dom'

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  render() {
    const { id } = this.props.match.params
    const activePost = this.props.posts[id]

    if (!activePost) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
        <h3>{activePost.title}</h3>
        <h6>Categories: {activePost.categories}</h6>
        <p>{activePost.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
