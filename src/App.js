import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import useToggle from "./hooks/useToggle";
import getTodos from "./Todos";

function App() {
    const [todos, setTodos] = useState(getTodos());
    const [updateTodos, toggleUpdateTodos] = useToggle(true);

    useEffect(() => {
        if (!updateTodos) {
            toggleUpdateTodos(true);
            return;
        }

        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="App">
            <div className="App-container">
                <Form todos={todos} setTodos={setTodos} updateTodos={updateTodos} toggleUpdateTodos={toggleUpdateTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </div>
    );
}

export default App;
