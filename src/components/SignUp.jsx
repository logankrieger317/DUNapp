import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SiteNav from "./Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../globals";
import Calendar from "react-calendar";


export default function Signup() {
    const [name, setuser] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
            const createUser = async() =>{
              const response = await axios.post(`${BASE_URL}/users`,{
              name: name,
              email: email,
              password: password
              
          })
          console.log(response.data)
        }
        createUser()
      }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Input User Name</label>
                  <input type="text" className="form-control" id="username" value={name} onChange={(e) => setuser(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Input email</label>
                  <input type="text" className="form-control" id="email"  value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Input password</label>
                  <input type="text" className="form-control" id="password"  value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <Button type="submit">Add User</Button>
              </form>
            
        </div>
    )
}