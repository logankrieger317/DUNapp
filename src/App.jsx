import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import TaskList from './components/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import TaskDetail from './components/TaskDetail'
import {Navigate} from 'react-router-dom'



function App() {
  const [user, setUser] = useState("textnull") //add in get user function when validating


  return (
    <div className='app'>
      
      <Routes>
        <Route path="/" element={user  ? <Navigate to={"/Home"}/> : <Login setUser= {setUser}/> }/>
        <Route path="/Home" element={user ? <Home/> : <Login setUser= {setUser}/>}/>
         <Route path="/TaskList" element={user ? <TaskList/> : <Login setUser= {setUser}/>}/>
        <Route path="/TaskList/:id" element={user ? <TaskDetail/> : <Login  setUser= {setUser}/>}/>
    </Routes>
    
    </div>
  )
}

export default App
