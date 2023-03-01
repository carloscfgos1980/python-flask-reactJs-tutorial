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

  const openForm = () => {
    setEditedArticle({ title: '', body: '' })
  }

  const insertData = (item) => {
    const new_article = [...articles, item]
    setArticles(new_article)
  }

  const deleteArticle = (item) => {
    const new_articles = articles.filter(my_article => {
      if (my_article.id === item.id) {
        return false;
      }
      return true
    })
    setArticles(new_articles)
  }
  //console.log("checking", articles)

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>Full stack course</h1>
        </div>
        <div className="col">
          <button
            className='btn btn-success'
            onClick={openForm}
          >Insert Article</button>
        </div>
      </div>
      <ArticlesList articles={articles}
        editArticle={editArticle}
        deleteArticle={deleteArticle}
      />
      {editedArticle ? <Form
        article={editedArticle}
        updatedData={updatedData}
        insertData={insertData}
      />
        : null}

    </div>
  );
}

export default App;
