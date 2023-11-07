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


        <div>
        

        {taskList.map((task, key) => (
          <Card key={key} className="mb-3">
            <Card.Body>
              <Card.Title>{task.name}</Card.Title>
              <Card.Text>{task.time}</Card.Text>
              <Button variant="primary" onClick={() => showTask(key)}>
                View Task
              </Button>
            </Card.Body>
          </Card>
        ))}


        </div>


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