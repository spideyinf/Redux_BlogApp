import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions/index'

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error }, input, label } = field
    const className = `form-group ${touched && error ? 'has-danger' : '' }`

    return (
      <div className={className}>
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
          {...input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title of Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </form>
    )
  }
}

function validate(form) {
  const errors = {}

  if (!form.title) {
    errors.title = 'Please insert a Title'
  }

  if (!form.categories) {
    errors.categories = 'Please insert some Categories'
  }

  if (!form.content) {
    errors.content = 'Please insert some content'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNew',
})(
  connect(null, {createPost})(PostsNew)
)

