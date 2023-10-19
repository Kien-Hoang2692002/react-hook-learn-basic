import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";

// template + logic
// JSX
function App() {
  const [name, setName] = useState("Kiên");
  const [address, setAddress] = useState("Hà Nội");
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Watching TV",
      type: "kien",
    },
    {
      id: "todo2",
      title: "Doing homework",
      type: "kien",
    },
    {
      id: "todo3",
      title: "Playing games",
      type: "admin",
    },
    {
      id: "todo4",
      title: "Reading books",
      type: "admin",
    },
  ]);

  // didMount
  useEffect(() => {
    console.log("run use effect");
  }, [address, todos]);

  const handleEventClick = (event) => {
    setName("Messi");
    if (!address) {
      alert("Empty input");
      return;
    }
    let newTodo = {
      id: "todo" + Math.floor(Math.random() * (10 - 5 + 1) + 5),
      title: address,
      type: "kien",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello guys, I'm {name} - {address}
        </h2>
        <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter((item) => item.type === "kien")}
          title={"Kien's todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        ></input>
        <button onClick={(event) => handleEventClick(event)} type="button">
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
