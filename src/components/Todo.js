import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Todo.css";

function Todo({ todos = [], setTodos = () => { }, text = "", completed = false, id = -1 }) {
    const doneHandler = (e) => {
        setTodos(() => {
            const newTodos = [...todos];

            for (const todo of newTodos) {
                if (todo.id === id) {
                    todo.completed = true;
                    break;
                }
            }

            return newTodos;
        });
    };

    const deleteHandler = (e) => {
        setTodos(() => {
            const newTodos = [...todos];

            for (let i =  0; i < newTodos.length; i++) {
                const todo = newTodos[i];
                if (todo.id === id) {
                    newTodos.splice(i, 1);
                    break;
                }
            }

            return newTodos;
        });
    };

    return (
        <div className={`Todo ${completed ? "Completed" : ""}`}>
            <span>{text}</span>
            {completed ? null : <button className="Done" onClick={doneHandler}>
                <FontAwesomeIcon className="Icon fa-1x" icon={faCheck} />
            </button>}
            <button className="Delete" onClick={deleteHandler}>
                <FontAwesomeIcon className="Icon fa-1x" icon={faTrash} />
            </button>
        </div>
    );
}

export default Todo;