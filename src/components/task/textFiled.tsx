import { TextField } from "@mui/material"
import { ChangeEvent } from "react"

export const TextFiledComponent = ({
  value,
  label,
  onChange,
}: {
  value: string
  label: string
  onChange: (value: string) => void
}) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
      />
    </>
  )
}
