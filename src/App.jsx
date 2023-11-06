import { useState } from 'react'
import Nav from './components/Nav'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {
  

  return (
    <div className='app'>
     <Nav />
     <Login/>
    </div>
  )
}

export default App
