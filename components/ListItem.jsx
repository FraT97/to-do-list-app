import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

function ListItem({ task, onDelete, onEdit, onToggleComplete }) {
   
    return (
      <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task)} 
      />
        {/* <Link to={`/item/${task.task}`}>  */}
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.task}
          </span>
        {/* </Link> */}
        <button onClick={() => onDelete(task.task)}>Delete</button>
        <button onClick={() => onEdit(task)}>Edit</button>
      </li>
    );
  }
  
  ListItem.propTypes = {
      task: PropTypes.shape({
        task: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      }).isRequired,
      onDelete: PropTypes.func.isRequired,
      onEdit: PropTypes.func.isRequired,
      onToggleComplete: PropTypes.func.isRequired,
    };
  export default ListItem;