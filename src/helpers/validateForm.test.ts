import validateForm from "./validateForm"

describe("Validate form", () => {
  it("should return true if all the input are valid", () => {
    const name = "Fabio"
    const email = "fabio.salimbeni@gmail.com"
    const rating = 5
    const commentText = "This is awesome"

    expect(validateForm(name, email, rating, commentText)).toBe(true)
  })

  it("should return false if the email is not valid", () => {
    const name = "Fabio"
    const email = "fabio.salimbeni"
    const rating = 5
    const commentText = "This is awesome"

    expect(validateForm(name, email, rating, commentText)).toBe(false)
  })

  it("should return false if the name is empty", () => {
    const name = ""
    const email = "fabio.salimbeni@gmail.com"
    const rating = 5
    const commentText = "This is awesome"

    expect(validateForm(name, email, rating, commentText)).toBe(false)
  })

  it("should return false if the rating is not between 1 and 5", () => {
    const name = ""
    const email = "fabio.salimbeni@gmail.com"
    const rating = 6
    const commentText = "This is awesome"

    expect(validateForm(name, email, rating, commentText)).toBe(false)
  })

  it("should return false if the commentText is empty", () => {
    const name = ""
    const email = "fabio.salimbeni@gmail.com"
    const rating = 4
    const commentText = ""

    expect(validateForm(name, email, rating, commentText)).toBe(false)
  })
})
