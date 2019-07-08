import React from "react";

function Comment(props) {
  const { name, message, email, rating } = props.comment;

  return (
	<div className="comment">
		<h4 className="name field">{name}</h4>
		<span>{email}</span>
		<span className='rating'>{rating}</span>
		<span>{message}</span>
	</div>
  );
}

export default Comment
