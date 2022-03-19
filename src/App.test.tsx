import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Customer Feedback Page", () => {
  it("should render the Name field", () => {
    const { getByLabelText } = render(<App />)
    expect(getByLabelText("Name:")).toBeInTheDocument()
  })

  it("should render the Email field", () => {
    const { getByLabelText } = render(<App />)
    expect(getByLabelText("Email:")).toBeInTheDocument()
  })

  it("should render the Rating field", () => {
    const { getByLabelText } = render(<App />)
    expect(getByLabelText("Rating:")).toBeInTheDocument()
  })
})
