import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './Component/SignUpPage';
import LoginPage from './Component/LoginPage';
import TodoListPage from './Component/TodoListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<TodoListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
