import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

// template + logic
// JSX
function App() {
  let name = "Kiên";

  const handleEventClick = (event) => {
    console.log("click me", event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello guys, I'm {name}</h2>
        <input
          type="text"
          value="Kien"
          onClick={(event) => handleEventClick(event)}
        ></input>
        <button onClick={(event) => handleEventClick(event)} type="button">
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
