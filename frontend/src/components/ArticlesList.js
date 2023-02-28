

import React from 'react'

function ArticlesList({ articles, editArticle }) {

  const editing = (item) => {
    editArticle(item)
  }


  return (
    <div>
      {
        articles && articles.map(article => {
          return (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <p>{article.date}</p>
              <div className='row'>
                <div className='col-md-1'>
                  <button className='btn btn-primary'
                    onClick={() => editing(article)}
                  >Update</button>
                </div>
                <div className='col'>
                  <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ArticlesList