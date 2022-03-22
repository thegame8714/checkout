import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import CustomInput from "./components/Input"
import Rating from "./components/Rating"
import TextArea from "./components/TextArea"
import initialComments from "./data/initialComments"
import ProductComment from "./components/ProductComment"
import { Comment, GraphData } from "./interfaces"
import validateForm from "./helpers/validateForm"
import calculateGraphData from "./helpers/calculateGraphData"

function App() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [rating, setRating] = useState<number>(0)
  const [commentText, setCommentText] = useState<string>("")
  const [commentList, setCommentList] = useState<Comment[]>(initialComments)
  const [formHasErrors, setErrorForm] = useState<boolean>(false)
  const [graphData, setGraphData] = useState<GraphData[]>([])

  const RatingValues: string[] = ["1", "2", "3", "4", "5"]

  const handleNameChange: (value: string) => void = (value) => setName(value)
  const handleEmailChange: (value: string) => void = (value) => setEmail(value)
  const handleRatingValue: (value: number) => void = (value) => setRating(value)
  const handleCommentChange: (value: string) => void = (value) =>
    setCommentText(value)

  useEffect(() => {
    setGraphData(calculateGraphData(commentList))
  }, [commentList])

  const addComment = () => {
    const isRateValid = validateForm(name, email, rating, commentText)
    if (isRateValid) {
      const currentDate = new Date()
      const newComment = {
        id: `${Math.random() * 10000}`,
        author: name,
        email,
        date: `${currentDate.getUTCDate()}/${
          currentDate.getMonth() + 1
        }/${currentDate.getFullYear()}`,
        rating,
        comment: commentText,
      }
      const newCommentList = [...commentList, newComment]
      setCommentList(newCommentList)
      setGraphData(calculateGraphData(newCommentList))
    } else {
      setErrorForm(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <ContentWrapper>
          <FormWrapper>
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
                  Please fill all the fields correctly before adding your
                  comment!
                </ErrorMessage>
              )}
            </div>
            <div>
              <Button onClick={addComment}>Add comment</Button>
            </div>
          </FormWrapper>
          <div data-testid="comments-chart">
            <BarChart width={400} height={300} data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgRating" fill="#8884d8" />
            </BarChart>
          </div>
        </ContentWrapper>
        <LatestComment>
          <span>Latest comments:</span>
          <div>
            {commentList.map((latestComment) => (
              <ProductComment
                key={latestComment.id}
                singleComment={latestComment}
              />
            ))}
          </div>
        </LatestComment>
      </main>
    </div>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

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

const Button = styled.button`
  background-color: rgb(43, 212, 219);
  width: 150px;
  border-radius: 5px;
  color: black;
  font-weight: 600;
  border: 1px solid black;
  padding: 5px 5px;
`

const LatestComment = styled.div`
  margin-top: 10px;
`

export default App
