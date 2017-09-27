import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentContainer from "./comments/CommentContainer";

class Article extends Component {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      date: PropTypes.string.isRequired,
      comments: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
  };

  handleOpenCloseCommentsClick = () => {


  };

  render() {
    const { article, isOpen, onButtonClick } = this.props;
    const body = isOpen 
    && <section>
        {article.text}
        <h3>creation date: {new Date(article.date).toDateString()}</h3>
        <CommentContainer comments={article.comments} />
    </section>;
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={onButtonClick}>{isOpen ? "close" : "open"}</button>
        </h2>
        {body}
      </div>
    );
  }
}

export default Article;
