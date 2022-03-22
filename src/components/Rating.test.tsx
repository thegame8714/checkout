import React from "react"
import { render } from "@testing-library/react"
import Rating from "./Rating"

describe("Rating component", () => {
  it("should render the component", () => {
    const inputName = "rating"
    const onInputChange = jest.fn()
    const inputValue = "1"
    const checked = true
    const { getByText } = render(
      <Rating
        name={inputName}
        onInputChange={onInputChange}
        value={inputValue}
        checked={checked}
      />
    )

    expect(getByText("⭐")).toBeInTheDocument()
  })
})
