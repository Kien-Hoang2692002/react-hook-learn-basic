const Todo = (props) => {
  // const todos = props.todos;
  const { todos, title, deleteDataTodo } = props;

  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todos-container">
      <div className="title">{title}</div>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title} &nbsp;
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
          </div>
        );
      })}
      <hr></hr>
    </div>
  );
};

export default Todo;
