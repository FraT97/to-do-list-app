import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ onSubmit, initialTask }) {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTaskText(initialTask.task); 
    } else {
        setTaskText('');
    }
  }, [initialTask]);

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskText); 
    setTaskText(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText} 
        onChange={handleChange}
        placeholder="Enter mission"
        required
      />
      <button type="submit">{initialTask ? 'Update Mission' : 'Add Mission'}</button>
    </form>
  );
}

TaskForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialTask: PropTypes.shape({
      task: PropTypes.string,
      completed: PropTypes.bool,
    }),
  };

export default TaskForm;