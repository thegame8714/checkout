interface Comment {
    id: string
    author: string
    email: string
    date: string
    rating: number
    comment: string
}

interface InputProps<T> {
    name: string
    onInputChange: (value: T) => void
    value: T
  }

interface RatingProps {
    name: string
    onInputChange: (value: number) => void
    value: string
    checked: boolean
}

interface ProductCommentProps {
    singleComment: Comment
}

export type {
    Comment,
    InputProps,
    RatingProps,
    ProductCommentProps
}