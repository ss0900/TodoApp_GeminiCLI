import { useState } from 'react';
import {
  GlobalStyle,
  TodoAppContainer,
  Title,
  InputContainer,
  TodoInput,
  AddButton,
  TodoList,
  TodoItem,
  Checkbox,
  EditInput,
  SaveButton,
  EditButton,
  DeleteButton,
} from './styles';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  return (
    <>
      <GlobalStyle />
      <TodoAppContainer>
        <Title>Todo List</Title>
        <InputContainer>
          <TodoInput
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <AddButton onClick={addTodo}>Add</AddButton>
        </InputContainer>
        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.id} completed={todo.completed}>
              <Checkbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
              />
              {editingId === todo.id ? (
                <EditInput
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <span>{todo.text}</span>
              )}
              {editingId === todo.id ? (
                <SaveButton onClick={() => saveEdit(todo.id)}>Save</SaveButton>
              ) : (
                <EditButton onClick={() => startEditing(todo.id, todo.text)}>Edit</EditButton>
              )}
              <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
            </TodoItem>
          ))}
        </TodoList>
      </TodoAppContainer>
    </>
  );
}

export default App;