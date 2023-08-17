import { Task } from "../types/task"

export const filteredTasks = (
  tasks: Task[],
  filter: "all" | "done" | "notDone",
) =>
  tasks.filter((task: Task) => {
    if (filter === "all") {
      return true
    } else if (filter === "done") {
      return task.completed
    } else if (filter === "notDone") {
      return !task.completed
    }
    return true
  })
