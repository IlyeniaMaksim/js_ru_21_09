import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./Article";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openArticleId: null
    };
  }

  render() {
    const { articles } = this.props;

    if (!articles.length) return <h3>No Articles</h3>;

    const articleElements = articles.map( article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.state.openArticleId}
          onButtonClick={this.toggleArticle(article.id)}
          comments={article.comments}
        />
        <hr />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }

  toggleArticle = openArticleId => ev => {
    this.setState((prevState, props) => {
      return {
        openArticleId: prevState.openArticleId != null ? null : openArticleId
      };
    });
  };
}

ArticleList.defaultProps = {
  articles: []
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
