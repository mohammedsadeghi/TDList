import { Button, ButtonGroup } from "@mui/material"

export const TaskFilterButton = ({
  setFilter,
  state,
}: {
  setFilter: (state: "all" | "done" | "notDone") => void
  state: "all" | "done" | "notDone"
}) => {
  return (
    <ButtonGroup variant="outlined" fullWidth>
      <Button
        color={state === "all" ? "success" : "primary"}
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter("done")}
        color={state === "done" ? "success" : "primary"}
      >
        Done
      </Button>
      <Button
        onClick={() => setFilter("notDone")}
        color={state === "notDone" ? "success" : "primary"}
      >
        Not Done
      </Button>
    </ButtonGroup>
  )
}
