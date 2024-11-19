import styled from "styled-components";

// Contenedor principal
export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh; /* Ajusta la altura fija */
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 500px;
  margin: 50px auto; /* Agrega margen superior dinámico */

  /* Líneas decorativas */
  &:before {
    content: "";
    display: block;
    height: 2px;
    width: 80%;
    background-color: #ddd;
    margin-bottom: 20px;
  }

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 80%;
    background-color: #ddd;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    height: 50vh; /* Ajusta la altura en dispositivos más pequeños */
    padding: 15px; /* Reduce el padding */
    margin: 100px auto; /* Mueve el contenedor hacia abajo */
  }
`;

// Título principal
export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

// Header (contenedor del input y el botón Add)
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Ancho uniforme */
  gap: 10px; /* Espaciado entre el input y el botón */
`;

// Input de tarea
export const Input = styled.input`
  width: 100%; /* Ocupa todo el ancho del contenedor */
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
