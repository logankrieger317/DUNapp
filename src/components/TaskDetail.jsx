import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"
import SiteNav from "./Nav"



export default function TaskDetail() {

    const [task, setTask] = useState()

    const {id} = useParams()

    useEffect(()=>{
        const getTask = async() => {
            const response = await axios.get(`${BASE_URL}/tasks/`)
            setTask(response.data[id])
        }
        getTask()
    },[])




    return task ? (
        <>
        <SiteNav/>
        <div className="taskDetail">
            <h2>Task: {task.name}</h2>
            <div classname="task-card-content">
            <h4>Description: {task.description}</h4>
            <h4>Due by: {task.time}</h4>
            </div>
            <Link to="/Tasks"><button className="task-detail-button">  Return to Task List </button></Link>
        </div>
    </>
    ) : <h3>Pulling up Task...</h3>
}