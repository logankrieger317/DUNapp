import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"



export default function TaskDetail() {

    const [task, setTask] = useState()

    let{id} = useParams()

    useEffect(()=>{
        const getTask = async() => {
            const response = await axios.get()
            setTask(response)
        }
        getTask()
    },[])









    return task ? (
        <div className="taskDetail">
            <h2>Task: {task.name}</h2>
            <h4>Description: {task.description}</h4>
            <h4>Due by: {task.time}</h4>
            <Link to="/TaskList"> Return to Task List </Link>
        </div>
    ) : <h3>Pulling up Task...</h3>
}