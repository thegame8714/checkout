import React from "react"
import { RatingProps } from "../interfaces"
import styled from "styled-components"

const Rating: React.FC<RatingProps> = ({
  name,
  onInputChange,
  value,
  checked,
}) => {
  let starRating = ""

  for (let i = 0; i < parseInt(value); i++) {
    starRating = starRating + "⭐"
  }
  return (
    <InputWrapper>
      <StyledInput
        type="radio"
        id={name.toLocaleLowerCase()}
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => onInputChange(parseInt(e.target.value))}
      />
      <span>{starRating}</span>
    </InputWrapper>
  )
}

const StyledInput = styled.input`
  margin-bottom: 5px;
`

const InputWrapper = styled.div`
  margin-bottom: 5px;
`

export default Rating
