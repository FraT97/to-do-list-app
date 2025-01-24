import ListItem from './ListItem';
import PropTypes from 'prop-types';

function List({ tasks, onDeleteTask, onEditTask, onToggleComplete }) {
    return (
      <ul>
        {tasks.map((task) => (
          <ListItem
            key={task.task}
            task={task}
            onDelete={onDeleteTask}
            onEdit={onEditTask} 
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    );
  }
  
  List.propTypes = {
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          task: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired,
        })
      ).isRequired,
      onDeleteTask: PropTypes.func.isRequired,
      onEditTask: PropTypes.func.isRequired,
      onToggleComplete: PropTypes.func.isRequired,
    };
  
  export default List;