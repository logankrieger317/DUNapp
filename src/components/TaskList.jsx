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

<<<<<<< HEAD
      const response = await axios.get( `${BASE_URL}/tasks/${userId}`);
      setTaskList(response.data.task);
=======
      const response = await axios.get( `${BASE_URL}/tasks/`);
      setTaskList(response.data);
>>>>>>> 66ee35e994d37e82b41e76e23094941efb539cba

    };
    getTasklist();
  }, []);

  let navigate = useNavigate();

  const showTask = (key) => {
    navigate(`${key}`);
  };



  return (
    <>
      <SiteNav />
      <div className="TaskList">
        <h2>Task List</h2>
<<<<<<< HEAD
=======
        <div>
        
>>>>>>> 66ee35e994d37e82b41e76e23094941efb539cba
        {taskList.map((task, key) => (
          <Card key={key} className="mb-3">
            <Card.Body>
              <Card.Title>{task.name}</Card.Title>
              <Card.Text>{task.description}</Card.Text>
              <Button variant="primary" onClick={() => showTask(key)}>
                View Task
              </Button>
            </Card.Body>
          </Card>
        ))}
<<<<<<< HEAD

=======
        </div>
>>>>>>> 66ee35e994d37e82b41e76e23094941efb539cba
        {/* <Card className="mb-3">
            <Card.Body>
                <Card.Title>Task Name</Card.Title>
                <Card.Text>Task Description</Card.Text>
                <Button variant="primary" onClick={() => showTask(task.id)}>
                    View Task
                </Button>
            </Card.Body>
        </Card> */}
      </div>
    </>
  );

}