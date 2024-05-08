import { TaskModel } from "../../models/task.model.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: TaskModel[];
}

export const initialState: TaskState = {
  tasks: [],
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskModel>) => {
      state.tasks.push({
        id: action.payload.id,
        description: action.payload.description,
      });
    },
  },
});
export default TaskSlice.reducer;
export const { addTask } = TaskSlice.actions;
