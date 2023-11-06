import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function TaskList() {

    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        const getTasklist = async() => {
            const response = await axios.get()
            setTaskList(response)
            console.log(response)
        }
        getTasklist()
    },[])

    let navigate = useNavigate()

    const showTask = (key) => {
        navigate(`${key}`)
    }


    return(
        <div className="taskList">
            <h2>Task List</h2>
            {
                taskList.map((task, key) => (
                    <div key={key} onClick={()=>showTask(key)} className="card">
                        <h3>{task.name}</h3>
                        <h4>{task.time}</h4>

                    </div>
                ))
            }
            
        </div>
    )
}