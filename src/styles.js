
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f2f5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export const TodoAppContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 600px;
  margin: 20px;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const TodoInput = styled.input`
  flex-grow: 1;
  padding: 15px;
  border: 2px solid #eee;
  border-radius: 4px 0 0 4px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

export const AddButton = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: ${props => (props.completed ? '#f9f9f9' : '#fff')};
  transition: background-color 0.2s;

  span {
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
    color: ${props => (props.completed ? '#aaa' : '#333')};
    flex-grow: 1;
    margin: 0 15px;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const EditInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 15px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

export const EditButton = styled(Button)`
  background-color: #ffc107;
  color: black;
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;
