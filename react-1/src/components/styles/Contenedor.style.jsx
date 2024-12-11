import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  max-width: 500px;
  margin: 50px auto;

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

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 40vh;
    padding: 30px;
    margin: 80px auto;
    max-width: 450px;
  }
`;

export default Contenedor;
