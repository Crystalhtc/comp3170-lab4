import { useState, useEffect } from 'react';

export default function TaskForm(props) {
    const [newTask, setNewTask] = useState('');
       
    function handleChange(e) {
            setNewTask(e.target.value);
        }

      function handleSubmit(e) {
        e.preventDefault();
        if (newTask.trim() !== '') {
            props.add({ name: newTask, status: 'pending' });
        //clear the form
        setNewTask('');
        }
      }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="new task ..."
            value={newTask}
            onChange={handleChange}
            className="input"
        />
        <button className="save" type="submit">Save</button>
    </form>
  )
}
