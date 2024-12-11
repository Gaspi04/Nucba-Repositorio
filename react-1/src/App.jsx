import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DeleteAllButton from "./components/DeleteAllButton";
import Contenedor from "./components/styles/Contenedor.style";

const App = () => {
  return (
    <TaskProvider>
      <Contenedor>
        <h1>Nucbatask</h1>
        <TaskForm />
        <TaskList />
        <DeleteAllButton />
      </Contenedor>
    </TaskProvider>
  );
};

export default App;
