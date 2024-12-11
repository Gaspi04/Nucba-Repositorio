import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const addTask = (task) => {
    if (!task.trim()) {
      setError("La tarea no puede estar vacía.");
      return;
    }
    if (tasks.includes(task)) {
      setError("La tarea ya existe.");
      return;
    }
    setError("");
    setTasks([...tasks, task]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, clearTasks, error }}
    >
      {children}
    </TaskContext.Provider>
  );
};
