import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import {
  FormContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "./styles/TaskForm.style";

const TaskForm = () => {
  const { addTask, error: apiError } = useContext(TaskContext);
  const [task, setTask] = useState("");
  const [error, setError] = useState(""); // Estado local para errores de validación

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length > 28) {
      setError("La tarea no puede superar los 28 caracteres.");
      return;
    }
    addTask(task);
    setTask(""); // Limpiar input
    setError(""); // Limpiar errores locales
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setTask(value); // Solo actualizamos el estado si está dentro del límite
      setError(""); // Limpiamos cualquier error previo
    } else {
      setError("La tarea no puede superar los 28 caracteres.");
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Añadir una tarea..."
          value={task}
          onChange={handleChange}
        />
        <Button type="submit">Añadir</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
    </FormContainer>
  );
};

export default TaskForm;
