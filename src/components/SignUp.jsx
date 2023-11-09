import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { BASE_URL } from "../globals";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Signup() {
    const [name, setuser] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate();


    async function createUser() {
        try {
            const response = await axios.post(`${BASE_URL}/users`, {
                name: name,
                email: email,
                password: password
            });
            console.log(response.data);

            // Redirect to the Home component upon successful user creation
            navigate('/home')
        } catch (error) {
            console.error(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
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
                <Nav.Link href="Login">Login</Nav.Link>
              </form>
            
        </div>
    )
}