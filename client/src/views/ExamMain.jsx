import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate, useNavigate, Link} from 'react-router-dom';

const ExamMain = () => {
    const [store, setStore] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/exams`)
        .then(res =>{
            setStore(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    const deleteStore = (idx) => {
        axios.delete(`http://localhost:8000/api/exams/${idx}`)
            .then((res) => {
                setStore(store.filter(item => item._id !== idx));
            })
    }



    return (
        <div className="App">
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Store Name</th>
                            <th>Number</th>
                            <th>Open?</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    store.map((item, i) =>
                        <tr key={i}>
                            <td><Link to={`/exams/${item._id}`}>{item.name}</Link></td>
                            <td>{item.storenum}</td>
                            <td>{item.open?"Yes":"No"}</td>
                            <td>
                                <button className="btn btn-success"><Link to={`/exams/edit/${item._id}`}>Edit</Link></button>
                                {item.open? <button className="btn btn-danger" onClick={(e) => {deleteStore(item._id)}} >Delete</button>:""}
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Link to="/exams/new">Create New Store</Link>
        </div>
    )
}

export default ExamMain