import { useState, useEffect } from 'react'
import './App.css';
import ArticlesList from './components/ArticlesList';
import Form from './components/Form';


function App() {
  const [articles, setArticles] = useState([])
  const [editedArticle, setEditedArticle] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .then(resp => console.log(resp))
      .catch(error => console.log(error))

  }, [])

  const editArticle = (item) => {
    //console.log("Hello World")
    setEditedArticle(item)
  }

  const updatedData = (item) => {
    const new_article = articles.map(my_article => {
      if (my_article.id === item.id) {
        return item
      } else {
        return my_article
      }
    })
    setArticles(new_article)
  }



  //console.log("checking", articles)

  return (
    <div className="App">
      <h1>Full stack course</h1>
      <ArticlesList articles={articles} editArticle={editArticle} />
      {editedArticle ? <Form article={editedArticle} updatedData={updatedData} /> : null}

    </div>
  );
}

export default App;
