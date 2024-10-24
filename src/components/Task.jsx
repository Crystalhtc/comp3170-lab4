import { useState, useEffect } from 'react';

export default function Task({ tasks = [], onTaskStatusChange }) {
  const [localTasks, setLocalTasks] = useState(tasks);

  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  function handleDelete(index) {
    const newTasks = localTasks.filter((_, i) => i !== index);
    setLocalTasks(newTasks);
    onTaskStatusChange?.(newTasks);
  }

  function handleCheckboxChange(index) {
    const newTasks = localTasks.map((task, i) =>
      i === index ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
    );
    setLocalTasks(newTasks);
    onTaskStatusChange?.(newTasks);
  }

  return (
    <div className="task-container">
      {
        localTasks.map((task, index) => (
          <div className="task" key={index}>
            <div className="task-input-name">
              <input
                type="checkbox"
                checked={task.status === 'completed'}
                onChange={() => handleCheckboxChange(index)}
                disabled={task.status === 'completed'}
              />
              <p className="task-name">
                {task.name}
              </p>
            </div>
            
            <button 
              onClick={() => handleDelete(index)}
            >
              Remove
            </button>
          </div>
        ))
      }
    </div>
  );
}