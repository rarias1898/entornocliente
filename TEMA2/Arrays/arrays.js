// ! Ejercicio 1
const arr = [2, 3, 4, 5, 0]

let result = 0
const suma = () => {
  arr.forEach(element => {
    result += element
  })
  return result
}

const triple = () => {
  let triple = []
  arr.forEach(element => {
    triple.push(element * 3)
  })
  return triple
}

// console.log(suma())
// console.log(result / arr.length)
// console.log(triple())

// ! Ejercicio 2
// const palabras = []

// do {
//   let palabra1 = prompt("Introduce la primera palabra").toLocaleLowerCase()
//   palabras.push(palabra1)
//   let palabra2 = prompt("Introduce la segunda palabra").toLocaleLowerCase()
//   palabras.push(palabra2)
//   let palabra3 = prompt("Introduce la tercera palabra").toLocaleLowerCase()
//   palabras.push(palabra3)
// } while (palabras.length != 3)

// let palabrasFiltradas = palabras.filter((e) => e.startsWith("c"))

// console.log(palabras)
// console.log(palabrasFiltradas)

// ! Ejercicio 3
const personas = [
  { nombre: "Angel", edad: 28, ciudad: "Sevilla"},
  { nombre: "Angel", edad: 27, ciudad: "Huelva"},
  { nombre: "Angel", edad: 26, ciudad: "Cadiz"},
  { nombre: "Angel", edad: 25, ciudad: "Sevilla"},
  { nombre: "Angel", edad: 12, ciudad: "Sevilla"},
]

const mayoresDeEdad = (per) => {
  const mayores = per.filter((e) => e.edad >= 18 )
  return mayores
}

const deSevilla = (per) => {
  const sevillanos = per.filter((e) => e.ciudad == "Sevilla" )
  return sevillanos
}

// console.log(mayoresDeEdad(personas))
// console.log(deSevilla(personas))

// ! Ejercicio 4
const alumnos = [
  { nombre: "mesa", precio: 10, categoria: "moviliario"  },
  { nombre: "silla", precio: 7, categoria: "moviliario" },
  { nombre: "cuadro", precio: 5, categoria: "decoracion" },
  { nombre: "ordenador", precio: 60, categoria: "informatica" },
  { nombre: "teclado", precio: 21, categoria: "informatica" },
]

const soloProductos = (productos) => {
  const arrN = []
  productos.forEach((e) => {
    arrN.push(e.nombre)
  })
  // console.log(arrN)
  // return arrN
  return document.write(arrN.join(" - "))
}

// console.log(soloProductos(alumnos))

// ! Ejercicio 5
// const palabra = prompt("Introduce una palabra")