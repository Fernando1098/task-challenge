import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import App from "../pages/home/App.tsx";
import {BrowserRouter} from "react-router-dom";


test('renders card buttons correctly', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const tasksButton = screen.getByText('Tasks');
  const listButton = screen.getByText('List');

  expect(tasksButton).toBeInTheDocument();
  expect(listButton).toBeInTheDocument();
});

test('navigates to correct URL when card button is clicked', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  fireEvent.click(getByText('Tasks'));
  expect(window.location.pathname).toBe('/tasks');

  fireEvent.click(getByText('List'));
  expect(window.location.pathname).toBe('/faker-list');
});