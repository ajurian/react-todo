import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/Form.css";
import { useRef } from "react";
import getTodos from "../Todos";

const FILTER_TYPE = Object.freeze({
    ALL: "all",
    COMPLETED: "completed",
    UNCOMPLETED: "uncompleted"
})

function Form({ todos = [], setTodos = () => { }, updateTodos = true, toggleUpdateTodos = () => { } }) {
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const inputVal = inputRef.current.value;

        if (inputVal.length === 0)
            return;

        for (const todo of todos) {
            if (todo.text === inputVal)
                return;
        }

        const newTodos = [...todos];

        newTodos.push({
            text: inputVal,
            completed: false,
            id: todos.length
        });

        setTodos(newTodos);

        inputRef.current.value = "";
    };

    const filterHandler = (e) => {
        const target = e.target;
        const filterType = target.value;
        const filteredTodos = [];
        const allTodos = getTodos();

        switch (filterType) {
            case FILTER_TYPE.ALL:
                filteredTodos.push(...allTodos);
                break;
            case FILTER_TYPE.COMPLETED:
                filteredTodos.push(...(allTodos.filter((todo) => todo.completed)));
                break;
            case FILTER_TYPE.UNCOMPLETED:
                filteredTodos.push(...(allTodos.filter((todo) => !todo.completed)));
                break;
        }

        toggleUpdateTodos(false);
        setTodos(filteredTodos);
    };

    return (
        <form className="Form" onSubmit={submitHandler}>
            <div className="Input">
                <input ref={inputRef}></input>
                <button type="submit">
                    <FontAwesomeIcon className="fa-2x" icon={faPlus} />
                </button>
            </div>
            <select className="Filter" onChange={filterHandler}>
                <option value={FILTER_TYPE.ALL}>All</option>
                <option value={FILTER_TYPE.COMPLETED}>Completed</option>
                <option value={FILTER_TYPE.UNCOMPLETED}>Uncompleted</option>
            </select>
        </form>
    );
}

export default Form;