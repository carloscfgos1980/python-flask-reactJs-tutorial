
import React, { useState, useEffect } from 'react'
import APIService from './APIService'

function Form({ article, updatedData, insertData }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(article.title)
        setBody(article.body)
    }, [article])



    const updating = () => {
        APIService.UpdateArticle(article.id, { title, body })
            .then(resp => updatedData(resp))
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    const inserting = () => {
        APIService.InsertArticle({ title, body })
            .then(resp => insertData(resp))
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

                </div>
            ) : null}
        </div>
    )
}

export default Form