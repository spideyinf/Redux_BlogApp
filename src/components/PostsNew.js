import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(val) {
    console.log(val)
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
}

export default reduxForm({
  validate,
  form: 'PostsNew',
})(PostsNew)
