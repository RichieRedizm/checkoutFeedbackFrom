import React from 'react';

class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
      this.setState({ error: "Name and Rating are required fields." });
      return;
    }

		let { comment } = this.state;
		comment.rating = parseInt(comment.rating)
		this.props.addComment(comment);
		this.setState({
			comment: {
				name: '',
				email: '',
				rating: '',
        message: ''
      }
		});
  }

	isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.rating !== "";
	}

  renderError() {
    return this.state.error ? (
      <div className='alert'>{this.state.error}</div>
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
              className='form-field'
              placeholder='Name'
              name='name'
              type='text'
            />
          </div>

          <div className='form-group'>
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.email}
              className='form-field'
              placeholder='Email'
              name='email'
              type='email'
            />
          </div>

		  		<div className='form-group'>
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.rating}
              className='form-field'
              placeholder='Rating 1-5'
              name='rating'
							type='number'
							min='1'
							max='5'
            />
          </div>

          <div className='form-group'>
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className='form-field'
              placeholder='Comment'
              name='message'
              rows='5'
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-primary form-field'>
              Comment ➤
            </button>
          </div>

					{this.renderError()}
        </form>
      </React.Fragment>
    );
  }
}

export default CommentForm
