import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  max-height: 300px; /* Altura máxima del contenedor de la lista */
  overflow-y: auto; /* Scroll vertical si excede la altura */

  &::-webkit-scrollbar {
    width: 8px;
  }

  @media (max-width: 768px) {
    max-width: 300px; /* Adaptación para móviles */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 400px; /* Adaptación para tabletas */
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  font-size: 20px;
  @media (max-width: 768px) {
    width: 100%; /* Asegura que el ancho se ajuste en móviles */
    font-size: 20px;
    padding: 8px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    padding: 12px;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;

  &:hover {
    background-color: #e53935;
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Reducimos ligeramente el tamaño */
    padding: 6px 12px; /* Ajustamos el padding */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    padding: 10px 12px;
  }
`;
