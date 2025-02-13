export interface Result {
  results: User[]
}

export interface User {
  name: {
    title: String,
    first: String,
    last: String
  },
  email: String,
  location: {
    city: String
  },
  picture: {
    medium: String
  }
}