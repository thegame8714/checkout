import React from "react"
import styled from "styled-components"
import { InputProps } from "../interfaces"

const TextArea: React.FC<InputProps<string>> = ({
  name,
  onInputChange,
  value,
}) => {
  return (
    <div>
      <Label htmlFor={name.toLocaleLowerCase()}>{name}</Label>
      <StyledTextArea
        id={name.toLocaleLowerCase()}
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder={name}
      />
    </div>
  )
}

const Label = styled.label`
  display: none;
`

const StyledTextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  line-height: 16px;
  font-size: 12px;
  width: 250px;
  height: 100px;
`

export default TextArea
