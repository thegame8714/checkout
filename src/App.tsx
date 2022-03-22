import React, { useState, useEffect } from "react"
import styled from "styled-components"
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import CustomInput from "./components/Input"
import Rating from "./components/Rating"
import TextArea from "./components/TextArea"
import initialComments from "./data/initialComments"
import ProductComment from "./components/ProductComment"
import type { Comment } from "./interfaces"
import validateForm from "./helpers/validateForm"

function App() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [rating, setRating] = useState<number>(0)
  const [commentText, setCommentText] = useState<string>("")
  const [commentList, setCommentList] = useState<Comment[]>(initialComments)
  const [formHasErrors, setErrorForm] = useState<boolean>(false)

  const RatingValues: string[] = ["1", "2", "3", "4", "5"]

  const handleNameChange: (value: string) => void = (value) => setName(value)
  const handleEmailChange: (value: string) => void = (value) => setEmail(value)
  const handleRatingValue: (value: number) => void = (value) => setRating(value)
  const handleCommentChange: (value: string) => void = (value) =>
    setCommentText(value)

  useEffect(() => {}, [commentList])

  const addComment = () => {
    const isRateValid = validateForm(name, email, rating, commentText)
    if (isRateValid) {
      const newComment = {
        id: `${Math.random() * 10000}`,
        author: name,
        email,
        date: new Date().toLocaleString(),
        rating,
        comment: commentText,
      }
      setCommentList([...commentList, newComment])
    } else {
      setErrorForm(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <CustomInput
          name="Name"
          onInputChange={handleNameChange}
          value={name}
        />
        <CustomInput
          name="Email"
          onInputChange={handleEmailChange}
          value={email}
        />
        <div>
          <VisibleLabel htmlFor="rating">Rate this product:</VisibleLabel>
          {RatingValues.map((ratingValue) => {
            return (
              <Rating
                key={ratingValue}
                name="rating"
                onInputChange={handleRatingValue}
                value={ratingValue}
                checked={parseInt(ratingValue) === rating}
              />
            )
          })}
        </div>
        <TextArea
          name="Comment"
          onInputChange={handleCommentChange}
          value={commentText}
        />
        <div>
          {formHasErrors && (
            <ErrorMessage>
              Please fill all the fields correctly before adding your comment!
            </ErrorMessage>
          )}
        </div>
        <div>
          <button onClick={addComment}>Add comment</button>
        </div>
        <LatestComment>
          <span>Latest comments:</span>
          <div data-testid="comments-chart">
            {commentList.map((latestComment) => (
              <ProductComment
                key={latestComment.id}
                singleComment={latestComment}
              />
            ))}
          </div>
        </LatestComment>
        {/* <div data-testid="comments-chart">
          <LineChart width={400} height={300} data={initialComments}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="rating" stroke="#8884d8" />
          </LineChart>
        </div> */}
      </main>
    </div>
  )
}

const VisibleLabel = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`

const ErrorMessage = styled.div`
  border: 1px solid red;
  padding: 5px;
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 600;
`

const LatestComment = styled.div`
  margin-top: 10px;
`

export default App
