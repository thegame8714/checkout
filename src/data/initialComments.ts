import type { Comment } from "../interfaces/"

let initialComments: Comment[] = [
    {
      id: `${Math.random() * 10000}`,
      author: "Fabio Salimbeni",
      email: "fabio.salimbeni@gmail.com",
      date: new Date("2022/03/01").toLocaleString(),
      rating: 5,
      comment: "This is a great product",
    },
    {
      id: `${Math.random() * 10000}`,
      author: "Giada Zanotti",
      email: "fabio.salimbeni@gmail.com",
      date: new Date("2022/03/01").toLocaleString(),
      rating: 4,
      comment: "This product could be great",
    },
    {
      id: `${Math.random() * 10000}`,
      author: "Rocio",
      email: "fabio.salimbeni@gmail.com",
      date: new Date("2022/03/01").toLocaleString(),
      rating: 1,
      comment: "This is an awful product",
    },
  ]

  export default initialComments