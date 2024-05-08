import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import {useFormNewTasks} from "../pages/tasks/components/form-new-tasks/hooks/useFormNewTasks.tsx";
import FormNewTasks from "../pages/tasks/components/form-new-tasks/FormNewTasks.tsx";
import {configureStore, Store} from "@reduxjs/toolkit";
import {TaskModel} from "../models/task.model.ts";
import {addTask, TaskSlice} from "../store/features/taskSlice.ts";



jest.mock("../pages/tasks/components/form-new-tasks/hooks/useFormNewTasks");
jest.mock("../store/index");
jest.mock("../utils/handleCloseModal.ts");

describe("FormNewTasks component", () => {

  beforeEach(() => {
    (useFormNewTasks as jest.Mock).mockReturnValue({
      handleChange: jest.fn(),
      formData: { id: "1234543", description: "" },
    });
  });

  test("calls handleChange when input changes", () => {
    render(<FormNewTasks />);
    const descriptionInput = screen.getByTestId("description-input");
    fireEvent.change(descriptionInput, { target: { value: "Test task" } });
    expect(useFormNewTasks().handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});


describe('tasks reducer', () => {

  let store: Store<{ tasks: { tasks: TaskModel[] } }>;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        tasks: TaskSlice.reducer,
      },
    });
  });

  test('add a task to state', () => {
    store.dispatch(addTask({id: "1234543", description:"Test task"}));
    const tasks = store.getState().tasks.tasks;
    expect(tasks).toHaveLength(1);
    expect(tasks[0].description).toBe('Test task');
  });
});