import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom"

const ExamEdit = () => {
    const [name, setName] = useState("");
    const [storenum, setStorenum] = useState(0);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState([])
    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/exams/${id}`)
            .then((res) => {
                setName(res.data.name)
                setStorenum(res.data.storenum)
                setOpen(res.data.open)
            })
            .catch(err => console.log("Edit Page:", + err))
    }, [id])

    const makeSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/exams/${id}`, {name, storenum, open})
            .then(res => {
                nav(`/exams/${id}`);
            })
            .catch(err => {
                const errorInfo = err.response.data.errors
                const errArray = []
                for (const errorKey in errorInfo) {
                    errArray.push(errorInfo[errorKey].message)
                }
                setError(errArray)
            })
    }

    const deleteStore = () =>{
        axios.delete(`http://localhost:8000/api/exams/${id}`)
        .then((res) => {
        })
        nav("/");
    }

    return (
        <div classTitle="App">
            <div>
                {
                    error.map((eachErr, i) => {
                        return (
                            <p key={i}>{eachErr}</p>
                        )
                    })
                }
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <div>
                    <form onSubmit={makeSubmit}>
                        <div>
                            <label>Store Name:</label>
                            <input name="name" type="text" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div>
                            <label>Store Number:</label>
                            <input name="storenum" type="number" onChange={e => setStorenum(e.target.value)} value={storenum} />
                        </div>
                        <div>
                            <label>Open?:</label>
                            <input name="open" type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)} value={open} />
                        </div>
                        <div>
                            <button className="btn btn-success" type="submit">Edit Store</button>
                            <button className="btn btn-primary" type="cancel" onClick={() => nav(`/exams/${id}`)}>Cancel</button>
                            <button className="btn btn-danger" type="delete" onClick={deleteStore}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExamEdit