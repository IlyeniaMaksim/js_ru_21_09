import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Comment extends Component {
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
