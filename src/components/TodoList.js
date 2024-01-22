import "../css/TodoList.css"
import Todo from "./Todo";

function TodoList({ todos = [], setTodos = () => {} }) {
    return (
        <div className="Todo-list">
            {
                todos.length > 0 ?
                todos.map(({
                    text,
                    completed,
                    id
                }) => (
                    <Todo todos={todos} setTodos={setTodos} text={text} completed={completed} id={id} key={id} />
                )) :
                <span>Add your todo thing now!</span>
            }
        </div>
    );
}

export default TodoList;