// ! Ejercicio 1
const arr = [2, 3, 4, 5, 0];

let result = 0;
const suma = () => {
  arr.forEach((element) => {
    result += element;
  });
  return result;
};

const triple = () => {
  let triple = [];
  arr.forEach((element) => {
    triple.push(element * 3);
  });
  return triple;
};

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
  { nombre: "Angel", edad: 28, ciudad: "Sevilla" },
  { nombre: "Angel", edad: 27, ciudad: "Huelva" },
  { nombre: "Angel", edad: 26, ciudad: "Cadiz" },
  { nombre: "Angel", edad: 25, ciudad: "Sevilla" },
  { nombre: "Angel", edad: 12, ciudad: "Sevilla" },
];

const mayoresDeEdad = (per) => {
  const mayores = per.filter((e) => e.edad >= 18);
  return mayores;
};

const deSevilla = (per) => {
  const sevillanos = per.filter((e) => e.ciudad == "Sevilla");
  return sevillanos;
};

// console.log(mayoresDeEdad(personas))
// console.log(deSevilla(personas))

// ! Ejercicio 4
const alumnos = [
  { nombre: "mesa", precio: 10, categoria: "moviliario" },
  { nombre: "silla", precio: 7, categoria: "moviliario" },
  { nombre: "cuadro", precio: 5, categoria: "decoracion" },
  { nombre: "ordenador", precio: 60, categoria: "informatica" },
  { nombre: "teclado", precio: 21, categoria: "informatica" },
];

const soloProductos = (productos) => {
  const arrN = [];
  productos.forEach((e) => {
    arrN.push(e.nombre);
  });
  // console.log(arrN)
  // return arrN
  return document.write(arrN.join(" - "));
};

// console.log(soloProductos(alumnos))

// ! Ejercicio 5
const contarVocales = () => {
  const palabra = prompt("Introduce una palabra").toLowerCase().split("");
  let contador = 0;
  palabra.forEach((e) => {
    if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
      contador++;
    }
  });
  return `La palabra ${palabra.join("")} tiene ${contador} vocales`;
};

// console.log(contarVocales())

// ! Ejercicio 6
const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const longPalabra = (array) => {
  array.forEach((e) => {
    console.log(`La palabra ${e} tiene ${e.length} letras`);
  });
}

const masLarga = (array) => {
  let palabraLarga = "";
  array.forEach((e) => {
    if (e.length > palabraLarga.length) {
      palabraLarga = e;
    }
  });
  return `La palabra ${palabraLarga} es la más larga`;
}

// longPalabra(diasSemana)
// console.log(masLarga(diasSemana))

// ! Ejercicio 7
const invertirPalabra = () => {
  let palabra = "";
  do {
    palabra = prompt("Introduce una palabra");
  } while (palabra == "");

  let invertida = palabra.split("").reverse().join("");
  return `La palabra ${palabra} invertida es ${invertida}`;
};

// console.log(invertirPalabra())

// ! Ejercicio 8
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrVacio = []
const string1 = "Hola"

const isOdd = (array) => {
  let parArr = []
  let imparArr = []

  // if (!array.isArray) {
  //   alert("No es un array")
  //   return
  // }

  if (array.length == 0) {
    alert("El array no puede estar vacio")
    return
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      parArr.push(array[i])
    }else{
      imparArr.push(array[i])
    }
  }
  console.log(parArr)
  console.log(imparArr)
}

// console.log(isOdd(array1))

// ! Ejercicio 9
const factura = {
  "numero": 1,
  "cliente": "cliente1",
  "divisa": "EUR",
  "subtotal": 25,
  "iva": 1.25,
  calculoTotal:  function() {
    let result = this.subtotal + this.iva
    return(`El resultado total es ${result}`)
  }
}

// console.log(factura.calculoTotal())
// console.log(`La factura ${factura.numero} tiene un importe de ${factura.subtotal} ${factura.divisa}`)

// ! Ejercicio 10
const user = { }

user.name = "John"
user.surname = "Smith"
user.name = "Peter"
delete user.name
// console.log(user)

// ! Ejercicio 11
const productos = [
  { nombre: "producto1", cantidad: 10, precio: 25 },
  { nombre: "producto2", cantidad: 30, precio: 13 },
]

const productos2 = []

const valorTotal = (obj, obj2) => {
  
  obj.forEach(element => {
    total = element.cantidad * element.precio
    obj2.nombre = element.nombre
    obj2.total = total
  });
}

valorTotal(productos, productos2)
// console.log(productos2)

// ! Ejercicio 12
let salarios = {
  John: 100,
  Ann: 160,
  Peter: 130
}

const sumaSalarios = (salarios) => {
  let total = 0

  if(salarios.length == 0) {
    return total
  }

  for (let key in salarios) {
    total += salarios[key]
  }
  return total
}

// console.log(sumaSalarios(salarios));

// ! Ejercicio 13
const userEdades = [
  {nombre: "Angel", edad: 28},
  {nombre: "Pepe", edad: 17},
  {nombre: "Diego", edad: 20},
  {nombre: "Raul", edad: 15}
]

const mayorEdad = (user) => {
  const mayores = []
  for(let i in user) {
    if(user[i].edad >= 18) {
      mayores.push(user[i].nombre + " (" + user[i].edad + " años)")
    }
  }

  return mayores
}

// console.log(mayorEdad(userEdades))

// ! Ejercicio 14
const libros = [
  { titulo: "titulo1", numeroPaginas: 350 },
  { titulo: "titulo2", numeroPaginas: 700 },
  { titulo: "titulo3", numeroPaginas: 245 },
  { titulo: "titulo4", numeroPaginas: 500 }
]

const masDeX = (libros) => {
  const masDe300 = libros.filter(e => {
    if(e.numeroPaginas > 300) {
      return true
    }
  })

  const soloNombre = masDe300.forEach(element => {
    console.log(element.titulo)
  })

  return soloNombre
}

// masDeX(libros)

// ! Ejercicio 15

/** Tienes un array de objetos que representan estudiantes. Cada objeto de estudiante tiene un nombre y un
array de calificaciones. Utiliza las funciones de arrays para realizar las siguientes tareas:
1. Calcular el promedio de calificaciones para cada estudiante. Para cada estudiante, calcular su
media. Debe devolver un array con objetos con el nombre y la media. Imprimir.
2. Del array obtenido en el punto 1, filtrar los estudiantes que tienen un promedio superior a 7.
3. Imprimir el nombre de los estudiantes que cumplen con el criterio de promedio anterior.
 */

const estudiantes = [
  { nombre: "Angel", calificaciones: [5, 7, 9, 5, 4] },
  { nombre: "Pedro", calificaciones: [10, 7, 7, 9, 7] },
  { nombre: "Diego", calificaciones: [5, 7, 9, 5, 4] },
  { nombre: "Raul", calificaciones: [10, 7, 7, 9, 7] }
]

const promedio = (estudiantes) => {
  let total = 0
  let media = 0
  let arr = []

  for(let i in estudiantes) {
    let calif = estudiantes[i].calificaciones

    for(let j in calif) {
      total += calif[j]
    }

    media = total / calif.length
    arr.push({nombre: estudiantes[i].nombre, media: media})
  }

  return arr
}

const filtrar = (estudiantes) => {
  const filtrados = estudiantes.filter(e => e.media > 7)
  return filtrados
}

const soloNombre = (estudiantes) => {
  const nombres = estudiantes.forEach(e => {
    console.log(e.nombre)
  })
  return nombres
}


// console.log(promedio(estudiantes))
// console.log(filtrar(promedio(estudiantes)))
// soloNombre(filtrar(promedio(estudiantes)))

// ! Ejercicio 16
const products = [
  { nombre: "product1", precio: 20, categoria: { nombre: "categoria1", descripcion: "descripcion1" } },
  { nombre: "product2", precio: 30, categoria: { nombre: "categoria2", descripcion: "descripcion2" } },
  { nombre: "product3", precio: 56, categoria: { nombre: "categoria1", descripcion: "descripcion3" } }
]

const filtrarCategoria = (product) => {
  const filtrados = product.filter(e => e.categoria.nombre == "categoria1")
  console.log(filtrados)
}

// filtrarCategoria(products)

// ! Ejercicio 17
const crearObjeto = () => {
  const taxi = {
    tipoMotor: "motor1",
    numeroPasajeros: 5,
    carga: 50,
    velocidad: 200,
    ruedas: 4,
    saludar: function() {
      console.log(`Hola soy un taxi de ${this.ruedas} ruedas y ${this.numeroPasajeros} pasajeros`) 
    }
  }

  taxi.saludar()
}
