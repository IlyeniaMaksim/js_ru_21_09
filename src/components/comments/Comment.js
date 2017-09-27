import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Comment extends Component {
  
  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  };

  render() {
    let { comment } = this.props;
    return (
      <div>
        <span>{comment.user}: </span>
        <span>{comment.text} </span>
      </div>
    );
  }
}
