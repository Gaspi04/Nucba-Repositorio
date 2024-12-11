import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { List, ListItem, DeleteButton } from "./styles/TaskList.style";

const TaskList = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          {task}
          <DeleteButton onClick={() => removeTask(task)}>Borrar</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
