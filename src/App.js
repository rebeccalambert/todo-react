import { useState, useEffect } from 'react'; 
import './index.css';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [currentTaskDueDate, setCurrentTaskDueDate] = useState("");

  function addTask(e) {
    e.preventDefault();
    
    let newTask = {
      text: currentTask,
      dueDate: currentTaskDueDate
    }

    setTaskList([...taskList, newTask]); // Add new task to the array
    setCurrentTask(''); // Clear the input field
    setCurrentTaskDueDate('');
  };

  function removeTask(index) {
    let newTaskList = [...taskList.slice(0, index), ...taskList.slice(index + 1)];

    setTaskList(newTaskList); // Add new task to the array
  }


  return (
    <div className="todoListContainer">
      <h1>TODO List</h1>

      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={currentTask} 
          onChange={(e) => setCurrentTask(e.target.value)} 
          placeholder="Enter a task" 
        />
        <input 
          type="text" 
          value={currentTaskDueDate} 
          onChange={(e) => setCurrentTaskDueDate(e.target.value)} 
          placeholder="Enter a due date" 
        />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {taskList.map((task, index) => (
         <div>
           <li key={index}>{task.text} Due: {task.dueDate}</li>
           <button onClick={() => removeTask(index)}>Remove</button>
         </div>
        ))}
      </ul>
    </div>
  );
}
