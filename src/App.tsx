import React, { useState } from "react"
import styled from "styled-components"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

function App() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>("")

  const handleRatingValue: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    setRating(parseInt(e.target.value))
  }

  const latestComments = [
    {
      id: "1",
      name: "Fabio Salimbeni",
      comment: "This payment system is the best",
      rating: 5,
    },
  ]

  const data = [
    {
      name: "Fabio Salimbeni",
      rating: 5,
    },
    {
      name: "Giada Zanotti",
      rating: 4,
    },
    {
      name: "Rocio",
      rating: 1,
    },
  ]

  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <Label htmlFor="rating">Rating</Label>
          <Input
            type="radio"
            id="rating"
            name="1"
            value="1"
            checked={rating === 1}
            onChange={handleRatingValue}
          />{" "}
          1
          <Input
            type="radio"
            id="rating"
            name="2"
            value="2"
            checked={rating === 2}
            onChange={handleRatingValue}
          />{" "}
          2
          <Input
            type="radio"
            id="rating"
            name="3"
            value="3"
            checked={rating === 3}
            onChange={handleRatingValue}
          />{" "}
          3
          <Input
            type="radio"
            id="rating"
            name="4"
            value="4"
            checked={rating === 4}
            onChange={handleRatingValue}
          />{" "}
          4
          <Input
            type="radio"
            id="rating"
            name="5"
            value="5"
            checked={rating === 5}
            onChange={handleRatingValue}
          />{" "}
          5
        </div>
        <div>
          <Label htmlFor="comment">Comment</Label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
          />
        </div>
        <div>
          <span>Latest comments:</span>
          <div>
            {latestComments.map((latestComment) => {
              return <span key={latestComment.id}>{latestComment.name}</span>
            })}
          </div>
        </div>
        <div data-testid="comments-chart">
          <LineChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="rating" stroke="#8884d8" />
          </LineChart>
        </div>
      </main>
    </div>
  )
}

const Label = styled.label`
  display: none;
`

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  line-height: 16px;
  font-size: 12px;
`

export default App
