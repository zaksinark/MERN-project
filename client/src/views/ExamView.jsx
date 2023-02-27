import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import {navigate, useNavigate, Link} from 'react-router-dom';

const ExamView = () => {
    const [store, setStore] = useState([])
    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/exams/${id}`)
            .then((res) =>{
                setStore(res.data)
            })
            .catch(err => console.log("This is our detail page:", + err))
    }, [id])

    const deleteStore = () =>{
        axios.delete(`http://localhost:8000/api/exams/${id}`)
        .then((res) => {
        })
        nav("/");
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <div>
                <p>Name: {store.name}</p>
                <p>Store Number: {store.storenum}</p>
                <p>Is it Open?: {store.open? "True":"False"}</p>
            </div>
            <button className="btn btn-success"><Link to={`/exams/edit/${store._id}`}>Edit</Link></button>
            <button className="btn btn-danger" onClick={deleteStore}>Delete</button>
        </div>
    )
}

export default ExamView