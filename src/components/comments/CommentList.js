import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

export default class CommentContainer extends Component {

  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }))
  };

  render() {
    let { comments } = this.props;
    let commentsList = comments.map(comment => {
      return (
        <li>
          <Comment key={comment.id} comment={comment} />
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

CommentContainer.defaultProps = {
  comments: []
};