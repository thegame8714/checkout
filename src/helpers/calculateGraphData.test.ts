import { Comment } from "../interfaces"
import calculateGraphData from "./calculateGraphData"

const initialComments: Comment[] = [
  {
    id: `${Math.random() * 10000}`,
    author: "Fabio Salimbeni",
    email: "fabio.salimbeni@gmail.com",
    date: "01/03/2022",
    rating: 5,
    comment: "This is a great product",
  },
  {
    id: `${Math.random() * 10000}`,
    author: "Giada Zanotti",
    email: "fabio.salimbeni@gmail.com",
    date: "01/03/2022",
    rating: 4,
    comment: "This product could be great",
  },
  {
    id: `${Math.random() * 10000}`,
    author: "Rocio",
    email: "fabio.salimbeni@gmail.com",
    date: "01/03/2022",
    rating: 1,
    comment: "This is an awful product",
  },
  {
    id: `${Math.random() * 10000}`,
    author: "Rocio",
    email: "fabio.salimbeni@gmail.com",
    date: "04/03/2022",
    rating: 3,
    comment: "This is an ok product",
  },
]

describe("calculateGraphData", () => {
  it("should do its job", () => {
    const graphDate = calculateGraphData(initialComments)
    expect(graphDate).toEqual([
      {
        date: "01/03/2022",
        avgRating: "3.33",
      },
      {
        date: "04/03/2022",
        avgRating: "3.00",
      },
    ])
  })
})
