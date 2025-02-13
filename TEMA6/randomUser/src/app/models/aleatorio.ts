export interface Response {
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
    city: String,
    street: {
      name: String,
      number: Number
    }
  },
  picture: {
    medium: String
  },
}