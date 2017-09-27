import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

export default class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleOpenCloseCommentsClick=()=>{
    this.setState((prevState, props) => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  render() {
    let { comments } = this.props;
    let commentList = this.state.isOpen && !!comments && comments.length > 0 ? <CommentList comments={comments} /> : null;
    
    return (
      <div>
        Comments
        <button onClick={this.handleOpenCloseCommentsClick}>
          {this.state.isOpen ? "close" : "open"}
        </button>
        {commentList}
      </div>
    );
  }
}
