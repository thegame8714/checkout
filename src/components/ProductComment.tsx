import React from "react"
import { ProductCommentProps } from "../interfaces"
import styled from "styled-components"

const ProductComment: React.FC<ProductCommentProps> = ({ singleComment }) => {
  let starRating = ""

  for (let i = 0; i < singleComment.rating; i++) {
    starRating = starRating + "⭐"
  }

  const formatDate = (date: Date) => {
    return `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <StyledComment>
      <Rating>{starRating}</Rating>
      <CommentText>{singleComment.comment}</CommentText>
      <CommentMeta>
        By: {singleComment.author} on {formatDate(new Date(singleComment.date))}
      </CommentMeta>
    </StyledComment>
  )
}

const StyledComment = styled.div`
  width: 50%;
  margin-bottom: 5px;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
`

const Rating = styled.div`
  font-size: 12px;
`

const CommentText = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
`

const CommentMeta = styled.div`
  font-size: 12px;
`

export default ProductComment
