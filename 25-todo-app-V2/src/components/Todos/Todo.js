import styles from "./Todo.module.css";
import {RiTodoFill, RiDeleteBin2Line} from "react-icons/ri"
import {FaCheck} from "react-icons/fa"
function Todo({ todo, deleteTodo,toggleTodoHandler }) {

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon}/>
      <div className={styles.todoText}>
        {todo.text}
      </div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodoHandler(todo.id) } />
    </div>
  );
}
export default Todo;
