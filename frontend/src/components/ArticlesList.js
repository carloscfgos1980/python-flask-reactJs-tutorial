

import React from 'react'

function ArticlesList({ articles }) {
  return (
    <div>
      {
        articles && articles.map(article => {
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <p>{article.date}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ArticlesList