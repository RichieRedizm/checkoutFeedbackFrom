import React from "react";

function Comment(props) {
  const { name, message, email, rating } = props.comment;

  return (
	<div className="comment">
		<h6 className="name field">{name}</h6>
		<span>{email}</span>
		<span>{rating}</span>
		<span>{message}</span>
	</div>
  );
}

export default Comment
