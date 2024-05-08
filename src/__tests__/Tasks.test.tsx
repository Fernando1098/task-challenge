import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {TaskModel} from "../models/task.model.ts";
import {store} from "../store";
import Tasks from "../pages/tasks/Tasks.tsx";
import {BrowserRouter} from "react-router-dom";


describe("Tasks component", () => {
  const fakeTasks: TaskModel[] = [
    {id: "1", description: "Task 1"},
    {id: "2", description: "Task 2"},
  ];

  beforeEach(() => {
    jest.spyOn(store, 'getState').mockReturnValue({
      task: {
        tasks: fakeTasks
      }
    });
  });

  test("renders Tasks title", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Tasks/>
        </Provider>
      </BrowserRouter>
    );
    const titleElement = screen.getByTestId("tasks-title");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders task items when data is loaded", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Tasks/>
        </Provider>
      </BrowserRouter>
    );

    fakeTasks.forEach(task => {
      const taskElement = screen.getByText(`Description: ${task.description}`);
      expect(taskElement).toBeInTheDocument();
    });
  });
});
