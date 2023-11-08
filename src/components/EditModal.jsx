import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";

export default function EditModal({ task, toggleModal }) {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [time, setTime] = useState(task.time);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // const handleTimeChange = (event) => {
  //   setTime(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedTask = { name, description, time };
    await axios.put(`${BASE_URL}/tasks/${task._id}`, updatedTask);
    toggleModal();
  };

  return (
    
    <div className="modal1">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="time">Due by:</label>
            <input
              type="datetime-local"
              id="time"
              value={time}
              onChange={handleTimeChange}
            /> */}
          </div>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </form>
    <h1>test</h1>
       </div>
     </div>
  );
}