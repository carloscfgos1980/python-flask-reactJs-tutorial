## DELETE

# 1. APIService.js

    static DeleteArticle(id, body) {
        return fetch(`http://127.0.0.1:5000/delete/${id}/`, {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

# 2. App.js
2.1 Create function for deleting items (articles):
  const deleteArticle = (item) => {
    const new_articles = articles.filter(my_article => {
      if (my_article.id === item.id) {
        return false;
      }
      return true
    })
    setArticles(new_articles)
  }
* This a method that I didn't know for deleting, instead of using filter out

2.2 Pass the function as props to Articles.js:
        deleteArticle={deleteArticle}


# 3. ArticleList.js
3.1 Create the deleting functing that I will attach to the delete button:
  const deleting = (item) => {
    APIService.DeleteArticle(item.id)
      .then(() => deleteArticle(item))

  }

3.2 Delete button with onClick method
                    <button
                    className='btn btn-danger'
                    onClick={() => deleting(article)}
                  >Delete</button>


## THE END!