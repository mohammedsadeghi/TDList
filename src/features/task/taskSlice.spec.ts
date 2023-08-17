import taskReducer, {
  addTask,
  toggleTaskCompletion,
  TasksState,
} from "./taskSlice"

describe("task reducer", () => {
  const initialState: TasksState = {
    tasks: [
      {
        completed: false,
        description: "firest task",
        title: "#1",
        id: "456",
      },
    ],
  }
  it("should handle initial state", () => {
    expect(taskReducer(initialState, { type: "unknown" })).toEqual(initialState)
  })

  it("should handle adding task", () => {
    const actual = taskReducer(
      initialState,
      addTask({
        completed: false,
        description: "second task",
        title: "#4",
        id: "789",
      }),
    )
    expect(actual.tasks).toEqual([
      {
        completed: false,
        description: "firest task",
        title: "#1",
        id: "456",
      },
      {
        completed: false,
        description: "second task",
        title: "#4",
        id: "789",
      },
    ])
  })

  it("should handle toggleTaskCompletion", () => {
    const actual = taskReducer(initialState, toggleTaskCompletion("456"))
    expect(actual.tasks[0].completed).toEqual(true)
  })
})
