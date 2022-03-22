const validateForm: (
  name: string,
  email: string,
  rating: number,
  commentText: string
) => boolean = (name, email, rating, commentText) => {
  return (
    validateName(name) &&
    validateEmail(email) &&
    validateRating(rating) &&
    validateCommentText(commentText)
  )
}

const validateName: (name: string) => boolean = (name) => {
  return name.length > 0
}

const validateRating: (rating: number) => boolean = (rating) => {
  return rating >= 1 && rating <= 5
}

const validateCommentText: (comment: string) => boolean = (comment) => {
  return comment.length > 0
}

const validateEmail: (email: string) => boolean = (email) => {
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
  return emailRegexp.test(email)
}

export default validateForm
