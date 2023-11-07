import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SiteNav from "./Nav";
import { Link } from "react-router-dom";
import TaskDetail from "./TaskDetail";

export default function Home() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', description: 'Description 1' },
    { id: 2, name: 'Task 2', description: 'Description 2' },
    { id: 3, name: 'Task 3', description: 'Description 3' },
    { id: 4, name: 'Task 4', description: 'Description 4' },
    { id: 5, name: 'Task 5', description: 'Description 5' },
    { id: 6, name: 'Task 6', description: 'Description 6' },
    { id: 7, name: 'Task 7', description: 'Description 7' },
    { id: 8, name: 'Task 8', description: 'Description 8' },
    { id: 9, name: 'Task 9', description: 'Description 9' },
    { id: 10, name: 'Task 10', description: 'Description 10' },
  ]);

  function handleNewTaskClick() {
    setFullscreen(true);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
    setShowExample(false);
  }

  function handleShowExample() {
    setShow(false);
    setShowExample(false);
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleTaskDescriptionChange(event) {
    setTaskDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { id: tasks.length + 1, name: taskName, description: taskDescription };
    setTasks([...tasks, newTask]);
    setShow(false);
    setTaskName('');
    setTaskDescription('');
  }


  function TaskTable(props) {
    const taskRows = props.tasks.slice(0, 5).map(task => (
      <tr key={task.id}>
        <td>{task.name}</td>
        <td>{task.description}</td>
      </tr>
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {taskRows}
        </tbody>
      </table>
    );
  }


  return (
    <div>
      <SiteNav />
      <div className='home-container'>
        <div className='home-header'>
          <h2 className='welcome-message'>Welcome username </h2>
        </div>
        <div className='home-body'>
          <button className='new-task-button' onClick={handleNewTaskClick}>New Task</button>
          <Link to= "/TaskList"><button className='view-task-button'>View All Tasks</button></Link>
          <TaskTable tasks={tasks} />
          <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="taskName" className="form-label">Task Name</label>
                  <input type="text" className="form-control" id="taskName" value={taskName} onChange={handleTaskNameChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">Task Description</label>
                  <textarea className="form-control" id="taskDescription" rows="3" value={taskDescription} onChange={handleTaskDescriptionChange}></textarea>
                </div>
                <Button type="submit">Add Task</Button>
              </form>
            </Modal.Body>
          </Modal>
          {showExample && (
            <Modal show={showExample} fullscreen={fullscreen} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Example Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>
          )}

          
        </div>
      </div>
    </div>
  );
}