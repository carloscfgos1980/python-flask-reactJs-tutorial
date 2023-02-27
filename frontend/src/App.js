import { useState, useEffect } from 'react'
import './App.css';


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
      .then(resp => console.log(resp))
      .catch(error => console.log(error))

  }, [])




  return (
    <div className="App">
      <h1>Full stack course</h1>

    </div>
  );
}

export default App;
