import React from 'react'
import ArticleList from './ArticleList'
import articles from '../data/fixtures'

function App() {
    return (
        <div>
            <h1>Articles</h1>
            <ArticleList articles={articles} />
        </div>
    )
}

export default App