import React, { useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../app/store"
import { toggleTaskCompletion } from "../../features/task/taskSlice"
import { Task } from "../../types/task"
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Tooltip,
} from "@mui/material"
import { Draggable, Droppable } from "react-beautiful-dnd"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import { TaskFilterButton } from "./taskFilterButton"
import { filteredTasks } from "../../utils/filterTasks"

const TaskList: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "done" | "notDone">("all")

  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch = useDispatch()

  const handleToggleCompletion = (taskId: string) => {
    dispatch(toggleTaskCompletion(taskId))
  }
  const taskItems = useMemo(() => {
    return filteredTasks(tasks, filter)
  }, [tasks, filter])
  return (
    <>
      <TaskFilterButton setFilter={setFilter} state={filter} />
      <Droppable droppableId="droppable">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {taskItems.map((task: Task, index: number) => (
              <DragableListItem
                task={task}
                key={task.id}
                index={index}
                handleToggleCompletion={(taskId: string) =>
                  handleToggleCompletion(taskId)
                }
              />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </>
  )
}
const DragableListItem = ({
  task,
  index,
  handleToggleCompletion,
}: {
  task: Task
  index: number
  handleToggleCompletion: (taskId: string) => void
}) => (
  <Draggable draggableId={task.id} index={index}>
    {(dragProvided) => (
      <ListItem
        ref={dragProvided.innerRef}
        {...dragProvided.draggableProps}
        {...dragProvided.dragHandleProps}
      >
        <Checkbox
          checked={task.completed}
          onClick={() => handleToggleCompletion(task.id)}
        />
        <ListItemText primary={task.title} secondary={task.description} />
        <Tooltip title={"drag to move the item"}>
          <IconButton {...dragProvided.dragHandleProps}>
            <DragHandleIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
    )}
  </Draggable>
)

export default TaskList
