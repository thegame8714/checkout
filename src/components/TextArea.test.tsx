import React from "react"
import { render } from "@testing-library/react"
import TextArea from "./TextArea"

describe("TextArea component", () => {
  it("should render the component", () => {
    const inputName = "Comment"
    const onInputChange = jest.fn()
    const inputValue = "My first comment"

    const { getByText } = render(
      <TextArea
        name={inputName}
        onInputChange={onInputChange}
        value={inputValue}
      />
    )

    expect(getByText(inputValue)).toBeInTheDocument()
  })
})
