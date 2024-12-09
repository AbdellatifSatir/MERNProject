import React , { useState }  from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/') // go back to '/' route
        })
        .catch(err => console.log(err))
    }

    // onChange={(e) => setName(e.target.value)}

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name"  onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>

    )
}


export default CreateUser;