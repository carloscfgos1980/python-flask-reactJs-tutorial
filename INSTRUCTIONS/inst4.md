# Frontend

1. Create react-app
2. Clean the app
* All thhe follow is done in app.js
3. Import useState and useEffect:
import { useState, useEffect } from 'react'

4. Create the variable (constant) for the items (articles)
  const [articles, setArticles] = useState([])

5. Implement the fecth method
  useEffect(() => {
    fetch('http://127.0.0.1:5000/get/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch(error => console.log(error))

  }, [])

6. dispplay the articles on the DOM
6.1 Set the resond with useState
    .then(resp => setArticles(resp))
    .then(resp => console.log(resp))

6.2 Map the array of articles that we got from the database
    {articles === 'undefined' ?
        (
          <div>loading...</div>
        ) : (
          <div>
            {
              articles.map(article => {
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

    7. Create components. 
    ArticleList.js
