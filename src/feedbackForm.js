import React from 'react'
import logo from './images/checkout_logo.png'
import './feedbackForm.css'
import CommentForm from './components/commentForm/commentForm'

class FeedbackForm extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
		  comments: [],
		  loading: false
		};
	}

	render() {
		return (
			<div className='feedback_form'>
				<header className='form-header'>
					<img src={logo} className='checkout-logo' alt='logo' />
					<h1 className='App-title'>Checkout.com Form Comments</h1>
				</header>

				<CommentForm />

				{/* <commentList /> */}
			</div>
		);
	}
}
export default FeedbackForm;
