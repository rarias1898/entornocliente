// ! Ejercicio 1
console.log("Binvenido")
document.write("\'Comillas simples\'")
document.write("\"Comillas dobles\"")
// alert("Angel Arias")
// let myName = "Angel Arias D"
// alert(myName)

// ! Ejercicio 2
// let texto = prompt("Escribe tu nombre")
// alert(`Tu nombre es ${texto}`)

// ! Ejercicio 3
// let edad = confirm("¿Eres mayor de edad?")
// console.log(edad)

// ! Ejercicio 4
let txt ="Hola Mundo";
let sub = txt.substring(5, 10)
let univer = txt.substring(0,4) + " universo"
let universoUpper = univer.toUpperCase()
let universoLower = univer.toLocaleLowerCase()

let text = "Cliente"
console.log(text.substring(0,3))
console.log(text.substring(3))

// ! Ejercicio 5
console.log(isNaN("Hola" * 5)) //true
console.log(isNaN("3" * 5)) //false

// ! Ejercicio 6
// let nombre = prompt("Escribe tu nombre")
// document.write(`<h1>${nombre}</h1>`)

// let email = prompt("Escribe tu email")
// document.write(`<h2>${email}</h2>`)

// ! Ejercicio 7
// let valor1 = prompt("Introduce el primer numero")
// let valor2 = prompt("Introduce el segundo numero")

// let suma = Number(valor1) + Number(valor2)
// let resta = valor1 - valor2

// let res = `El resultado de la suma de ${valor1} + ${valor2} es ${suma} y la resta es ${resta}`
// console.log(res)

// ! Ejercicio 8
// let precio = prompt("Introduce el precio del articulo")
// let cantidad = prompt("Introduce la cantidad")

// let res = precio * cantidad
// console.log(res.toFixed(2))

// ! Ejercicio 9
let numero = prompt("Escribe un numero")
console.log(`El número tiene ${numero.length} dígitos`)