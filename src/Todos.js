function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export default getTodos;
