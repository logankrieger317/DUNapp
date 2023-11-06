import { Route, Routes } from "react-router-dom"
import TaskList from "./TaskList"
import TaskDetail from "./TaskDetail"
import Home from "./Home"



export default function Main() {


    return(
        <div className="main">
            <div className="routes-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/TaskList" element={<TaskList/>}/>
                    <Route path="/TaskList/:id" element={<TaskDetail/>}/>
                </Routes>
            </div>

            
        </div>
    )
}