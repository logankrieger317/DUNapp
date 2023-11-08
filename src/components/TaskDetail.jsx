import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"
import SiteNav from "./Nav"
import EditModal from "./EditModal"


export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState("");

  useEffect(() => {
    async function getTask() {
      const response = await axios.get(`${BASE_URL}/tasks/`);
      setTask(response.data[id]);
    }
    getTask();
  }, [id,showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const showMyClick = () => {
    console.log("clicked");
    toggleModal();
    console.log(task.name);
    console.log(task.description);
    setShowModal(true);
    setEditedTaskName(task.name);
  };

  const handleTaskNameChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return task ? (
    <>
      <SiteNav />
      <div className="taskDetail">
        <h2>Task: {task.name}</h2>
        <div className="task-card-content">
          <h4>Description: {task.description}</h4>
          <h4>Due by: {task.time}</h4>
        </div>
        <Link to="/Tasks">
          <button className="task-detail-button">Return to Task List</button>
        </Link>
        <button className="task-detail-button" onClick={showMyClick}>
          Edit Task
        </button>
        {showModal && (
          <EditModal
            task={task} toggleModal={toggleModal}
            editedTaskName={editedTaskName}
            handleTaskNameChange={handleTaskNameChange}
            handleModalClose={handleModalClose}
          />
        )}
      </div>
    </>
  ) : (
    <h3>Pulling up Task...</h3>
  );
}