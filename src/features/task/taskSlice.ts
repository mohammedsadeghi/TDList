import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Task } from "../../types/task"

export interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    reorderTasks: (
      state,
      action: PayloadAction<{ startIndex: number; endIndex: number }>,
    ) => {
      const { startIndex, endIndex } = action.payload
      const [removedTask] = state.tasks.splice(startIndex, 1)
      state.tasks.splice(endIndex, 0, removedTask)
    },
  },
})

export const { reorderTasks, addTask, toggleTaskCompletion } =
  tasksSlice.actions

export default tasksSlice.reducer
