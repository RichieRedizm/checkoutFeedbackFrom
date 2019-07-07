import React from 'react';

class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',

      comment: {
				name: '',
				email: '',
				rating: '',
        message: ''
      }
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
		e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "Name and Message fields are required." });
      return;
    }

		let { comment } = this.state;
		this.props.addComment(comment);

  }

	isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
	}

  renderError() {
    return this.state.error ? (
      <div className='alert alert-danger'>{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method='post' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className='form-control'
              placeholder='Your Name'
              name='name'
              type='text'
            />
          </div>

          <div className='form-group'>
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.email}
              className='form-control'
              placeholder='Your Email'
              name='email'
              type='email'
            />
          </div>

		  		<div className='form-group'>
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.rating}
              className='form-control'
              placeholder='Your Rating'
              name='rating'
              type='text'
            />
          </div>

          <div className='form-group'>
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className='form-control'
              placeholder='Your Comment'
              name='message'
              rows='5'
            />
          </div>


          {this.renderError()}

          <div className='form-group'>
            <button className='btn btn-primary'>
              Comment ➤
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CommentForm
