import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/tasks', {
      headers: { Authorization: token },
    });
    setTasks(response.data);
  };

  const addTask = async () => {
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/tasks', { task, token });
    setTask('');
    fetchTasks();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((taskItem) => (
          <li key={taskItem._id}>{taskItem.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;
