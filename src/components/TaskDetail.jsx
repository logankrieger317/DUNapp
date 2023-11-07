import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"



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
        <div className="taskDetail">
            <h2>Task: {task.name}</h2>
            <h4>Description: {task.description}</h4>
            <h4>Due by: {task.time}</h4>
            <Link to="/Tasks"> Return to Task List </Link>
        </div>
    ) : <h3>Pulling up Task...</h3>
}