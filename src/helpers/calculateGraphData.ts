import { GraphData, Comment } from "../interfaces"

const calculateGraphData: (comments: Comment[]) => GraphData[] = (comments) => {
  const result: GraphData[] = []

  const commentsDate = comments.map((comment) => {
    return comment.date
  })

  const commentSet = new Set(commentsDate)
  commentSet.forEach((commentDate) => {
    const commentsWithCurrentDate = comments.filter(
      (comment) => comment.date === commentDate
    )
    const totRating = commentsWithCurrentDate.reduce((current, newValue) => {
      return current + newValue.rating
    }, 0)

    result.push({
      date: commentDate,
      avgRating: parseFloat(
        `${totRating / commentsWithCurrentDate.length}`
      ).toFixed(2),
    })
  })

  return result
}

export default calculateGraphData
