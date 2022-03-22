import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"

describe("Customer Feedback Page", () => {
  describe("render", () => {
    it("should render the Name field", () => {
      const { getByLabelText } = render(<App />)
      expect(getByLabelText("Name")).toBeInTheDocument()
    })

    it("should render the Email field", () => {
      const { getByLabelText } = render(<App />)
      expect(getByLabelText("Email")).toBeInTheDocument()
    })

    it("should render the Rating field", () => {
      const { getByLabelText } = render(<App />)
      expect(getByLabelText(/Rate this product/)).toBeInTheDocument()
    })

    it("should render the Comment field", () => {
      const { getByLabelText } = render(<App />)
      expect(getByLabelText("Comment")).toBeInTheDocument()
    })

    it("should render the Latest Comments section", () => {
      const { getByText } = render(<App />)
      expect(getByText("Latest comments:")).toBeInTheDocument()
    })

    it("should render the Comments chart section", () => {
      const { getByTestId } = render(<App />)
      expect(getByTestId("comments-chart")).toBeInTheDocument()
    })

    it("should render the Add comment button", () => {
      const { getByText } = render(<App />)
      expect(getByText("Add comment")).toBeInTheDocument()
    })
  })

  describe("Adding a comment", () => {
    let user
    beforeEach(() => {
      user = userEvent.setup()
    })
    it("should add a comment when the user click on the Add comment button", async () => {
      const { getByLabelText, getByText, getByRole } = render(<App />)
      const nameInput = getByLabelText("Name")
      const emailInput = getByLabelText("Email")
      const ratingInput = getByRole("radio", { name: "Rate this product:" })
      const commentInput = getByLabelText("Comment")
      const addButton = getByText("Add comment")
      await userEvent.type(nameInput, "Ron")
      await userEvent.type(emailInput, "test@test.com")
      await userEvent.type(commentInput, "Test Comment")
      await userEvent.click(ratingInput)
      await userEvent.click(addButton)

      expect(getByText(/Ron/)).toBeInTheDocument()
    })
  })
})
