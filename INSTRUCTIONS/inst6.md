

# 1. app.js
1.1 Using bootstrap to put the title anf the insert button at the same level. also adding onclick
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

1.2 Create function to open the form. 
* aki me quede boto como es que abre el form.. pero lo hace
  const openForm = () => {
    setEditedArticle({ title: '', body: '' })
  }

1.3 Pass this function as props to Forms.js
insertData={insertData}


# 2. APIService

    static InsertArticle(body) {
        return fetch('http://127.0.0.1:5000/add', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
    }
* Create the static that will help me to add articles (items) to the database

# 3. Forms.js
3.1 Ternary comparison to eiter show the update button or the insert button:
                    {article.id ?
                        <button
                            onClick={updating}
                            className='btn btn-success mt-3'
                        >Update</button>
                        :
                        <button
                            onClick={inserting}
                            className='btn btn-success mt-3'
                        >Insert</button>
                    }

3.2 Create function to send the info to the API so the database is updated:
    const inserting = () => {
        APIService.InsertArticle({ title, body })
            .then(resp => insertData(resp))
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }