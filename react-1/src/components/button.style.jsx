import styled from "styled-components";

// Botón Añadir (Add)
export const Add = styled.button`
  background-color: #00bcd4; /* Celeste */
  color: white;
  border: none;
  padding: 12px 20px; /* Más grande que antes */
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%; /* Igual al input */
  max-width: 400px; /* Max width igual al input */

  &:hover {
    background-color: #0097a7; /* Color más oscuro al pasar el ratón */
  }
`;

// Botón Borrar (Delete)
export const Delete = styled.button`
  background-color: #f44336; /* Rojo */
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  width: auto;

  &:hover {
    background-color: #e53935; /* Rojo oscuro al pasar el ratón */
  }
`;

// Botón Borrar todo (Deleteall)
export const Deleteall = styled.button`
  background-color: #f44336; /* Rojo */
  color: white;
  border: none;
  padding: 12px 20px; /* Igual tamaño al input */
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%; /* Igual al input */
  max-width: 400px; /* Max width igual al input */

  &:hover {
    background-color: #e53935; /* Rojo oscuro al pasar el ratón */
  }
`;
