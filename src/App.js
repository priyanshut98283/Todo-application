// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './redux/reducers'; // Importing the Redux reducer
import Inputbox from './components/inputbox'; 
import Todolist from './components/todolist'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

// Creating Redux store using the Redux Reducer
const store = createStore(todoReducer);

const App = () => {
  return (
    // Providing Redux store to the application
    <Provider store={store}>
      {/* Main container */}
      <div className="container">
        {/* Header section */}
        <div className="header">
          {/* Title with FontAwesome icon */}
          <h1 className="mt-5 mb-3">
            <FontAwesomeIcon icon={faClipboardList} className="me-2" />
            Todo Application
          </h1>
        </div>
        {/* Task input component */}
        <Inputbox />
        {/* Todo list component containing data */}
        <Todolist />
      </div>
    </Provider>
  );
};

export default App; // Exporting the App component
