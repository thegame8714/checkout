import React from "react"
import { render } from "@testing-library/react"
import type { Comment } from "../interfaces"
import ProductComment from "./ProductComment"

describe("Comment", () => {
  it("should render the date, the author and the comment text", () => {
    const comment: Comment = {
      id: "1",
      author: "Fabio Salimbeni",
      rating: 5,
      date: new Date().toLocaleDateString(),
      email: "fabio.salimbeni@gmail.com",
      comment: "This is great",
    }
    const { getByText } = render(<ProductComment singleComment={comment} />)
    expect(getByText(comment.comment)).toBeInTheDocument()
  })
})
