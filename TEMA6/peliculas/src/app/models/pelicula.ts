export interface Pelicula {
  id: Number,
  titulo: String,
  actores: Actor[]
}

export interface Actor {
  nombre: String,
  genero: String,
  edad: Number
}