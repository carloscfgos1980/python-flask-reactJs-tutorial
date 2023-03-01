## Update data

# 1. ArticleList.js
* Using bootstrap

1.1 Adding the props as parameters ({ articles, editArticle }):
function ArticlesList({ articles, editArticle }) {

1.2 Checking the articles has been fetched before mapping:
articles && articles.map(article => {

1.3 Add a button in order to update and add onClick method
<div className='col-md-1'>
                  <button className='btn btn-primary'
                    onClick={() => editing(article)}
                  >Update</button>
                </div>

1.4 Create a function to handle the onClick:
  const editing = (item) => {
    editArticle(item)
  }


# 2. app.js

2.1 UseEffect to handle edting articles
  const [editedArticle, setEditedArticle] = useState(null)

2.2 Create the function to handle the editing articles
  const editing = (item) => {
    editArticle(item)
  }

2.3 passing the props to ArticleList.js:
<ArticlesList articles={articles} editArticle={editArticle} />


# 3. Forms.js

3.1 Passing the props to the function ({ article, updatedData })
function Form({ article, updatedData }) {

3.2 UseEffect to handle the changes in title and body:
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

3.3 UseEffect method in order to be able to make the changes in the DOM
        useEffect(() => {
        setTitle(article.title)
        setBody(article.body)
    }, [article])

3.4 Check if the article exists before desplay the form (line 26 -47)
            {article ? ():null

3.5 Create form for title and body. Add onChange method to grab the input value
                <div className='mb-3'>
                    <label htmlFor='title' className='form-label'>Title</label>
                    <input type='text' className='form-control'
                        value={title}
                        placeholder='Please Enter Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor='body' className='form-label'>Description</label>
                    <textarea
                        value={body}
                        rows='5'
                        className='form-control'
                        placeholder='Please Enter Description'
                        onChange={(e) => setBody(e.target.value)}
                    />

3.6 Create a button and attach onClick method
                    <button
                        onClick={updating}
                        className='btn btn-success mt-3'
                    >Update</button>
                </div>

# 4. App.js

4.1 Create a function to handle the updating:
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

4.2 Pass the props to Forms.js component:
  {editedArticle ? <Form article={editedArticle} updatedData={updatedData} /> : null}

# 5. APIService

export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`http://127.0.0.1:5000/update/${id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }
}

* This will allow me to update (put method) the database. I had a bug here coz I didn't copy the URL correctly, I was missing / at the end

# 6. Forms.js

6.1 Import module APIService
import APIService from './APIService'

6.2 Send the info to APIService so it will update the database:
    const updating = () => {
        APIService.UpdateArticle(article.id, { title, body })
            .then(resp => updatedData(resp))
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }