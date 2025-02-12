export interface Usuarios {
  id: number,
  name: String,
  username: String
  email: String,
  address: {
    street: String,
    suite: String,
    city: String
  },
  company: {
    name: string,
    catchPhrase: String,
    bs: String
  }
}