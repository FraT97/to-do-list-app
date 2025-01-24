import { useParams } from 'react-router-dom';

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
  
  const task = initialTasks.find((t) => t.task === taskId);

  if (!task) {
    return <div>Mission not found!</div>;
  }

  return (
    <div>
      <h2>Mission Details</h2>
      <h3>{task.task}</h3>
      <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
      {/* Add more details here if needed */}
    </div>
  );
}

export default ItemDetails;