import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SiteNav from "./Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "../globals";


export default function TaskList() {

  const userId = "654947612adc709e9b98fc33"

  const [taskList, setTaskList] = useState([]);
  



  
  useEffect(() => {
    
    const getTasklist = async () => {





      const response = await axios.get( `${BASE_URL}/tasks/`);
      setTaskList(response.data);
      console.log(response.data)



    };
    getTasklist();

  }, []);



  let navigate = useNavigate();

  const showTask = (key) => {
    navigate(`${key}`);
  };

  function deleteTaskFunction(id){
    const deleteTask = async() => {
      const response2 = await axios.delete(`${BASE_URL}/tasks/${id}`)
      console.log(response2)
      console.log(taskList)
      setTaskList(prevTaskList => prevTaskList.filter(task => task._id !== id))
    }
    deleteTask()
    
    // const getNewTaskList = async () => {
    //   const response3 = await axios.get( `${BASE_URL}/tasks/`)
    //   setTaskList(response3.data)
    // }
    // getNewTaskList()
    
  }



  return (
    <>
      <SiteNav />
      <div className="TaskList">
        <h2>Task List</h2>


        <div>
        

        {taskList.map((task, key) => (
          <Card key={key} className="mb-3">
            <Card.Body>
              <Card.Title>{task.name}</Card.Title>
              <Card.Text>{task.time}</Card.Text>
              <Button variant="primary" className="Button" onClick={() => showTask(key)}>
                View Task
              </Button>
              <Button className="Button" onClick={() => deleteTaskFunction(task._id)}>
                Complete / Delete
              </Button>
            </Card.Body>
          </Card>
        ))}


        </div>

      </div>
    </>
  );

}