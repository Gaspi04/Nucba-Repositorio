import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Button } from "./styles/DeleteAllButton.style";

const DeleteAllButton = () => {
  const { clearTasks } = useContext(TaskContext);

  return <Button onClick={clearTasks}>Borrar todo</Button>;
};

export default DeleteAllButton;
