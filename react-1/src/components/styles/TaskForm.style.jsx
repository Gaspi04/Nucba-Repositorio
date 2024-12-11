import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  flex: 3;
  padding: 12px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 270px;

  @media (max-width: 768px) {
    width: 210px;
    font-size: 18px;
    padding: 10px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 250px;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  flex: none;
  width: 100px;
  padding: 10px 16px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80px;
    font-size: 1.2rem;
    padding: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 110px;
    font-size: 24px;
    padding: 14px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;
