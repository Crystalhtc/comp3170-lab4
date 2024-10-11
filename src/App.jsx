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

  // Update task count based on task status
  function handleTaskStatusChange(updatedTasks) {
    const completedTasks = updatedTasks.filter(task => task.status === 'completed');
    setTaskNumber(updatedTasks.length - completedTasks.length); // this line should use the updated tasks, not the initial tasks, as the task can be removed
    setTasks(updatedTasks);
  }

  function addTask(newTask) {
    const updatedTasks = [...tasks, newTask]; // Add the new task
    setTasks(updatedTasks);
    setTaskNumber(updatedTasks.length);
  }

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <TaskForm add={addTask}/>
      <h2>You have {taskNumber} tasks remaining</h2>
      <Task tasks={tasks} onTaskStatusChange={handleTaskStatusChange} />
    </div>
  );
}

export default App;
