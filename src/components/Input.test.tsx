import React from "react"
import { render } from "@testing-library/react"
import CustomInput from "./Input"

describe("Input component", () => {
  it("should render the component", () => {
    const inputName = "Name"
    const onInputChange = jest.fn()
    const inputValue = "test"
    const { getByLabelText } = render(
      <CustomInput
        name={inputName}
        onInputChange={onInputChange}
        value={inputValue}
      />
    )

    expect(getByLabelText(inputName)).toBeInTheDocument()
  })
})
