import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing';
import MainPage from '../pages/mainPage';
import CreateTask from '../pages/createTask';
import UpdateTask from '../pages/updateTask';

function TaskRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/updateTask" element={<UpdateTask />} />
      </Routes>
    </Router>
  );
}

export default TaskRouter;
