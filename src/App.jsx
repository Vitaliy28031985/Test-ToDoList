import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { helpers } from "./helpers/helpers";
import CreateToDoList from "./components/CreateToDoList/CreateToDoList";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [state, setState] = useState([]);

  const CreateToDo = (title, description) => {
    const idCreate = helpers.counter().toString();
    const nawToDo = { id: idCreate, title, description, status: false };
    setState((prevState) => [...prevState, nawToDo]);
    console.log(state);
  };
  return (
    <div className="App">
      <CreateToDoList onSubmit={CreateToDo} />
      <ToDoList state={state}/>
    </div>
  );
}

export default App;
