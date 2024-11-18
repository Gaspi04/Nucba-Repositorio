import styled from "styled-components";

// Contenedor principal
export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ddd; /* Borde alrededor de todo */
  border-radius: 10px; /* Bordes redondeados */
  max-width: 500px;
  margin: auto;
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
  max-width: 400px;
`;

// Input de tarea
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px; /* Igual que los botones */
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
`;
