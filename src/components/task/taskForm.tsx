import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { addTask } from "../../features/task/taskSlice"
import { Box, Button } from "@mui/material"
import { TextFiledComponent } from "./textFiled"

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    }
    dispatch(addTask(newTask))
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 5,
        }}
      >
        <TextFiledComponent label="Title" value={title} onChange={setTitle} />
        <TextFiledComponent
          label="Description"
          value={description}
          onChange={setDescription}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </form>
  )
}

export default TaskForm
