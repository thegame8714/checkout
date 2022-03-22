import React from "react"
import styled from "styled-components"
import { InputProps } from "../interfaces"

const CustomInput: React.FC<InputProps<string>> = ({
  name,
  onInputChange,
  value,
}) => {
  return (
    <div>
      <Label htmlFor={name.toLocaleLowerCase()}>{name}</Label>
      <StyledInput
        type="text"
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

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 5px;
  width: 250px;
`

export default CustomInput
