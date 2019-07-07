import React from 'react'
import logo from './images/checkout_logo.png'
import './FeedbackForm.css'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'

class FeedbackForm extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
		  comments: [],
		  loading: false
		}
		// bind context to methods
		this.addComment = this.addComment.bind(this);
	}

	/**
	 * Handle form add comment
	 */
	addComment(comment) {
		this.setState({
			loading: false,
			comments: [comment, ...this.state.comments]
		});
	}

	render() {
		return (
			<div className='feedback_form'>
				<header className='form-header'>
					<img src={logo} className='checkout-logo' alt='logo' />
					<h1 className='App-title'>Checkout.com Form Comments</h1>
				</header>

				<CommentForm addComment={this.addComment}/>

				<CommentList
					loading={this.state.loading}
					comments={this.state.comments}
				/>
			</div>
		);
	}
}
export default FeedbackForm;
