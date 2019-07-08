import React from 'react'
import logo from './images/checkout_logo.png'
import './feedbackForm.css'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'
import Trend from 'react-trend';
import Data from './components/data'

class FeedbackForm extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {...Data}

		this.addComment = this.addComment.bind(this);
		this.getRatings = this.getRatings.bind(this);
	}

	/**
	 * Handle form add comment
	 */
	addComment(comment) {
		this.setState({
			comments: [comment, ...this.state.comments]
		});
	}

	/**
	 * Handle get rating from each comment
	 */
	getRatings(comments) {
		return this.state.comments.map((comment) => {
			return comment.rating
		})
	}

	render() {
		let { comments } = this.state;
		return (
			<div className='checkout-form'>
				<header className='form-header'>
					<img src={logo} className='checkout-logo' alt='logo' />
					<h1 className='App-title'>Checkout.com Form Comments</h1>
				</header>

				<Trend
					smooth
					autoDraw
					autoDrawDuration={3000}
					autoDrawEasing="ease-out"
					data={this.getRatings(comments)}
					gradient={['purple', 'violet']}
					radius={5.5}
					strokeWidth={3.8}
					strokeLinecap={'square'}
				/>
				<div className='feedback_form'>
					<CommentForm addComment={this.addComment}/>

					<CommentList comments={this.state.comments}/>
				</div>
			</div>
		);
	}
}
export default FeedbackForm;
