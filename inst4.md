# Frontend

1. Create react-app
2. Clean the app
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