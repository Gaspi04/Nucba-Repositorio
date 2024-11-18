import styled from "styled-components";

// Lista de tareas
export const List = styled.ol`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

// Tarea individual
export const Tarea = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto; /* Centrado */
  border: none; /* Sin borde */
`;

// Span con el nombre de la tarea
export const Span = styled.span`
  font-size: 16px;
  color: #333;
  width: 100%;
  max-width: 350px;
`;
