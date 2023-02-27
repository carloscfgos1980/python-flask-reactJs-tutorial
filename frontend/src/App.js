import { useState, useEffect } from 'react'
import './App.css';
import ArticlesList from './components/ArticlesList';


function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .then(resp => console.log(resp))
      .catch(error => console.log(error))

  }, [])


  //console.log("checking", articles)

  return (
    <div className="App">
      <h1>Full stack course</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}

export default App;
