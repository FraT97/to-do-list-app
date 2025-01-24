import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ItemDetails() {
  const { taskId } = useParams(); 
  const initialTasks = [
    { "task": "Read the project brief", "completed": true },
    { "task": "Create a project repository", "completed": false },
    { "task": "Create React application using Vite", "completed": false },
    { "task": "Finish Day 1 Development Tasks", "completed": false },
    { "task": "Finish Day 1 Research Tasks", "completed": false },
    { "task": "Finish Day 2 Development Tasks", "completed": false },
    { "task": "Finish Day 2 Research Tasks", "completed": false }
  ];
  



  const handleAddTask = (taskText) => {
    const newTask = { id: uuidv4(), task: taskText, completed: false };
    setTasks([...tasks, newTask]);
  }; 


  const task = initialTasks.find((t) => t.task === taskId);

  if (!task) {
    return <div>Mission not found!</div>;
  }

  return (
    <div>
      <h2>Mission Details</h2>
      <h3>{task.task}</h3>
      <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
      
    </div>
  );
}

export default ItemDetails;