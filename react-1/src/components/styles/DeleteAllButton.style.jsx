import styled from "styled-components";

export const Button = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #e53935;
  }

  @media (max-width: 768px) {
    max-width: 310px;
    font-size: 24px;
    padding: 10px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 400px;
    padding: 15px 15px;
    font-size: 24px;
  }
`;
