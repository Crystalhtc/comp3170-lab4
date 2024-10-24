import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import './App.css';
import { useState } from "react";

function App() {
  const initialTasks = [
    { name: 'Task 1', status: 'pending' },
    { name: 'Task 2', status: 'pending' },
    { name: 'Task 3', status: 'pending' }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [taskNumber, setTaskNumber] = useState(initialTasks.length);
  const [filter, setFilter] = useState('all'); 

  // Update task count based on task status
  function handleTaskStatusChange(updatedTasks) {
    const pendingTasks = updatedTasks.filter(task => task.status === 'pending');
    setTaskNumber(pendingTasks.length);
    setTasks(updatedTasks);
  }

  function addTask(newTask) {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    const pendingTasks = updatedTasks.filter(task => task.status === 'pending');
    setTaskNumber(pendingTasks.length);
  }

  // Filter tasks before passing them to the Task component
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <TaskForm add={addTask}/>
      
      <div className="filter-buttons">
        <button 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button 
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
      </div>

      <h2>You have {taskNumber} tasks remaining</h2>

      <Task tasks={filteredTasks} onTaskStatusChange={handleTaskStatusChange} />
    </div>
  );
}

export default App;