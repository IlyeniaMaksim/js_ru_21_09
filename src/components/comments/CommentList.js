import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

export default class CommentContainer extends Component {
  render() {
    let { comments } = this.props;
    let commentsList = comments.map(comment => {
      return (
        <li>
          <Comment comment={comment} />
        </li>
      );
    });

    return (
      <div>
        <ul>{commentsList}</ul>
      </div>
    );
  }
}
