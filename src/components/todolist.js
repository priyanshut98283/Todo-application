import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Select tasks from Redux store
  const dispatch = useDispatch(); // Redux dispatch function

  // Handle task deletion
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Handle task completion toggling
  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul
      className="list-group mt-3"
      style={{ backgroundColor: "#cdc1ff", padding: "20px" }}
    >
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginBottom: "10px",
            backgroundColor: "#ccdbfd",
            borderRadius: "8px",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textDecoration: task.completed ? "line-through" : "none",
            border: task.completed
              ? "2px solid #10a894"
              : "2px solid transparent",
          }}
        >
          <div
            style={{
              maxWidth: "70%",
              wordWrap: "break-word",
              backgroundColor: "#10a894",
              color: "white",
              padding: "5px",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          >
            {task.text}
          </div>
          {task.completed && (
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#10a894", fontSize: "1.5em" }}
              />
            </div>
          )}
          <div>
            <button
              onClick={() => handleToggle(task.id)}
              className={`btn btn-${
                task.completed ? "outline-green " : "success"
              } btn-sm me-2`}
            >
              {task.completed ? "Undo" : "Completed"}
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="btn btn-danger btn-sm ms-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
