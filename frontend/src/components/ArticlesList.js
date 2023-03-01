import React from 'react'
import APIService from './APIService'

function ArticlesList({ articles, editArticle, deleteArticle }) {

  const editing = (item) => {
    editArticle(item)
  }

  const deleting = (item) => {
    APIService.DeleteArticle(item.id)
      .then(() => deleteArticle(item))

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
                  <button
                    className='btn btn-danger'
                    onClick={() => deleting(article)}
                  >Delete</button>
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