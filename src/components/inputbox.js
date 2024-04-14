import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [taskText, setTaskText] = useState(""); // State for task text input
  const dispatch = useDispatch(); // Redux dispatch function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if task text is empty or contains only whitespace
    if (!taskText.trim()) return;
    // Dispatch addTask action
    dispatch(addTask(taskText));
    // Clear task text input
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div className="input-group">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="form-control"
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
          }}
          placeholder="Add tasks🗒️ here ... "
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          }}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
