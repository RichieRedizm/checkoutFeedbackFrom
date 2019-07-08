import React from "react";
import Comment from "../Comment/Comment";

function CommentList(props) {
  return (
    <div className="comment-list">
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList
