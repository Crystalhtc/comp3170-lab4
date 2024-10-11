import { useState, useEffect } from 'react';

export default function Task({ tasks, onTaskStatusChange }) {
  const [localTasks, setLocalTasks] = useState(tasks);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  // Task removal
  function handleDelete(index) {
    const newTasks = localTasks.filter((_, i) => i !== index);
    setLocalTasks(newTasks);
    onTaskStatusChange(newTasks); // Update task status in App
  }

  // Checkbox change
  function handleCheckboxChange(index) {
    const newTasks = localTasks.map((task, i) =>
      i === index ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
    );
    setLocalTasks(newTasks);
    onTaskStatusChange(newTasks); // Update task status in App
  }

  const taskList = localTasks.map((task, index) => (
    <div className="task" key={index}>
        <div className="task-input-name">
        <input
            type="checkbox"
            checked={task.status === 'completed'}
            onChange={() => handleCheckboxChange(index)}
        />
        <p className="task-name" style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
            {task.name}
        </p>
        </div>
      
      <button onClick={() => handleDelete(index)}>Remove</button>
    </div>
  ));

  return (
    <div className="task-container">
        {taskList}
    </div>
  )
}
