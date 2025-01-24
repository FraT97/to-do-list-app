import { useState, useEffect } from 'react';
import List from '../components/List';
import TaskForm from '../components/TaskForm';
import { useLocation } from 'react-router-dom';
import tasksData from '../tasks.json';

function Home() {
  const [tasks, setTasks] = useState(tasksData); 
  const [taskToEdit, setTaskToEdit] = useState(null);
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskText) => {
    const newTask = { task: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.task !== taskToDelete));
  };

  const handleEditTask = (taskToUpdate) => {
    setTaskToEdit(taskToUpdate);
  };

  const handleUpdateTask = (updatedTaskText) => {
    setTasks(tasks.map((task) =>
      task.task === taskToEdit.task ? { ...task, task: updatedTaskText } : task
    ));
    setTaskToEdit(null);
  };

  const handleToggleComplete = (taskToToggle) => {
    setTasks(tasks.map((task) =>
      task.task === taskToToggle.task ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleCancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div>
      <h2>Mission List</h2>
      {message && <p style={{ color: "red" }}>{message}</p>}
      {!taskToEdit ? (
        <TaskForm onSubmit={handleAddTask} />
      ) : (
        <div>
          <TaskForm onSubmit={handleUpdateTask} initialTask={taskToEdit} />
          <button onClick={handleCancelEdit}>Cancel Edit</button>
        </div>
      )}
      <List
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default Home;