import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom"

const ExamCreate = () => {
    const [name, setName] = useState("");
    const [storenum, setStorenum] = useState(0);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState([])
    const nav = useNavigate()

    const makeSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/exams', {name, storenum, open})
            .then(res => {
                console.log(res.data)
                nav(`/exams/${res.data._id}`);
            })
            .catch(err => {
                console.log(err)
                const errorInfo = err.response.data.errors
                const errArray = []
                for (const errorKey in errorInfo) {
                    errArray.push(errorInfo[errorKey].message)
                }
                setError(errArray)
            });
    }

    return (
        <div classname="App">
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
                            <label>Name:</label>
                            <input name="name" type="text" onChange={e => setName(e.target.value)} value={name}/>
                        </div>
                        <div>
                            <label>Store Number:</label>
                            <input name="storenum" type="number" onChange={e => setStorenum(e.target.value)} value={storenum}/>
                        </div>
                        <div>
                            <label>Open?:</label>
                            <input name="open" type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)} value={open}/>
                        </div>
                        <div>
                            <button className="btn btn-success" type="submit">Add New Store</button>
                            <button className="btn btn-primary" type="cancel" onClick={() => nav('/')}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExamCreate