import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);

  // Check if "Todo List" title is rendered
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();

  // Check if initial todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);

  // Find the input and button elements
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);

  // Simulate typing and submitting a new todo
  fireEvent.change(input, { target: { value: 'Test New Todo' } });
  fireEvent.click(button);

  // Check if the new todo appears in the list
  expect(screen.getByText(/Test New Todo/i)).toBeInTheDocument();
});

test('toggles a todo between completed and not completed', () => {
  render(<TodoList />);

  // Find the first todo
  const todo = screen.getByText(/Learn React/i);

  // Initially, it should not be completed
  expect(todo).not.toHaveStyle('text-decoration: line-through');

  // Click to toggle completion
  fireEvent.click(todo);

  // After toggling, it should have line-through style (completed)
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);

  // Find the todo to delete
  const todoToDelete = screen.getByText(/Learn React/i);

  // Find the delete button
  const deleteButton = screen.getByText(/Delete/i);

  // Click to delete the todo
  fireEvent.click(deleteButton);

  // Check if the todo is removed from the list
  expect(todoToDelete).not.toBeInTheDocument();
});
