import React from 'react'
import logo from './images/checkout_logo.png'
import './FeedbackForm.css'
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList'
import Trend from 'react-trend';

class FeedbackForm extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
		  comments: [{
			name: 'Richard Oakey',
			email: 'richieredizm@gmail.com',
			rating: 9,
			message: 'Example message so chart has data'
		  },
		  {
			name: 'Richard Oakey',
			email: 'richieredizm@gmail.com',
			rating: 22,
			message: 'Example message so chart has data'
		  }]
		}

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
		// console.log('getRatings comments', comments)
		let ratings = this.state.comments.map((comment) => {
			return comment.rating
		})
		console.log('getRatings ratings', ratings)
		return ratings
	}

	render() {
		let { comments } = this.state;
		return (
			<div className='feedback_form'>
				<header className='form-header'>
					<img src={logo} className='checkout-logo' alt='logo' />
					<h1 className='App-title'>Checkout.com Form Comments</h1>
				</header>

				<CommentForm addComment={this.addComment}/>
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
				<CommentList comments={this.state.comments}/>
			</div>
		);
	}
}
export default FeedbackForm;
