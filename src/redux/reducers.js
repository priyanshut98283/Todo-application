import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actions";

// Initial state for tasks fetched from local storage or empty array
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// Reducer function to handle state updates based on actions
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Add new task to tasks array and update local storage
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      // Filter out the task to be deleted and update local storage
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case TOGGLE_TASK:
      // Toggle completed state of the task and update local storage
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default todoReducer;
