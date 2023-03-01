import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { helpers } from "./helpers/helpers";
import CreateToDoList from "./components/CreateToDoList/CreateToDoList";
import ToDoList from "./components/ToDoList/ToDoList";
import ModalToDo from "./components/ModalToDo/ModalToDo"

function App() {
  const [state, setState] = useState([]);
  const [todo, setTodo] = useState([]);

  const [modal, setModal] = useState(false);

  const CreateToDo = (title, description) => {
    const idCreate = helpers.counter().toString();
    const nawToDo = { id: idCreate, title, description, status: false };
    setState((prevState) => [...prevState, nawToDo]);
    console.log(state);
  };

  const showModal = (id,) => {
    const dataId = state?.filter((todo) => todo.id === id);
    setTodo(dataId);
    helpers.handleToggle(setModal);
  };

 
  return (
    <div className="App">
      <CreateToDoList onSubmit={CreateToDo} />
      <ToDoList state={state} toggle={showModal} />
      {modal && (
        <ModalToDo toggle={helpers.handleToggle} showModal={setModal} todo={todo}/>
      )}
    </div>
  );
}

export default App;
