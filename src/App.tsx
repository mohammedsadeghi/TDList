import React from "react"
import { Provider } from "react-redux"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { configureStore } from "@reduxjs/toolkit"
import tasksReducer, { reorderTasks } from "./features/task/taskSlice"
import TaskList from "./components/task/taskList"
import TaskForm from "./components/task/taskForm"
import { Container, CssBaseline, Paper, Typography } from "@mui/material"

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
})

const App: React.FC = () => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return
    store.dispatch(
      reorderTasks({
        startIndex: result.source.index,
        endIndex: result.destination.index,
      }),
    )
  }

  return (
    <Provider store={store}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ backgroundColor: "#eee", mt: 2, p: 2 }}
        component={Paper}
        elevation={4}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Task Management App
        </Typography>
        <TaskForm />

        <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
          <TaskList />
        </DragDropContext>
      </Container>
    </Provider>
  )
}

export default App
