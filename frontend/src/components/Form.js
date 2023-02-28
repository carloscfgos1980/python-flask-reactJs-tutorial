
import React, { useState } from 'react'
import APIService from './APIService'

function Form({ article }) {
    const [title, setTitle] = useState(article.title)
    const [body, setBody] = useState(article.body)

    const updating = () => {
        APIService.UpdateArticle(article.id, { title, body })
            .then(resp => console.log(resp))
            .catch(error => console.log(error))

    }



    return (
        <div>
            {article ? (
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
                    <button
                        onClick={updating}
                        className='btn btn-success mt-3'
                    >Update</button>
                </div>
            ) : null}
        </div>
    )
}

export default Form