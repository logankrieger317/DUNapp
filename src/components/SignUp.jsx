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


    function handleSubmit(event) {
        event.preventDefault();
            const createUser = async() =>{
              const response = await axios.post(`${BASE_URL}/users`,{
              name: name,
              email: email,
              
          })
          console.log(response.data)
        }
        createUser()
      }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Sign Up</label>
                  <input type="text" className="form-control" id="username" value={name} onChange={(e) => setuser(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">input email</label>
                  <textarea className="form-control" id="email" rows="3" value={email} onChange={(e) => setemail(e.target.value)}></textarea>
                </div>
                <Button type="submit">Add User</Button>
              </form>
            
        </div>
    )
}