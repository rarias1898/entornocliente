// ! Ejercicio 1
// let text = prompt("Introduzca su nota")

// if (text >= 5) {
//   document.write(`<h1>APROBADO</h1>`)
// } else {
//   document.write(`<h1>SUSPENDIDO</h1>`)
// }

// ! Ejercicio 2
// do {
//   let num = Number(prompt("Introduce un número entre 0 y 23"))

//   if(num >= 6 && num <= 11) {
//     document.write("Buenos días")
//   } else if(num >= 12 && num <= 20) {
//     document.write("Buenas tardes")
//   } else {
//     document.write("Buenas noches")
//   }
// } while(num < 0 || num > 23)

// ! Ejercicio 3
// let toppings = prompt("Introduce un topping: ")

// switch (toppings) {
//   case toppings = "oreo":
//     document.write(`El helado con oreo cuesta 2.90`)
//     break;
//   case toppings = "kitkat":
//     document.write(`El helado con kitkat cuesta  1.50`)
//   case toppings = "brownie":
//     document.write(`El helado con brownie cuesta 0.75`)
//   case toppings = "lacasitos":
//     document.write(`El helado con lacasitos cuesta 0.95`)
//   default:
//     document.write(`El helado sin toppings cuesta 1.90`)
//     break;
// }

// ! Ejercicio 4
// let motor = Number(prompt("Introduce un número del 1 al 4"));

// switch (motor) {
//   case (motor = 0):
//     document.write(
//       "No hay establecido un valor definido para el tipo de bomba"
//     );
//     break;
//   case (motor = 1):
//     document.write("La bomba es una bomba de agua");
//     break;
//   case (motor = 2):
//     document.write("La bomba es una bomba de gasolina");
//     break;
//   case (motor = 3):
//     document.write("La bomba es una bomba de hormigón");
//     break;
//   case (motor = 4):
//     document.write("La bomba es una bomba de pasta alimenticia");
//   default:
//     document.write("No existe un valor valido para tipo de bomba");
//     break;
// }

// ! Ejercicio 5
// for(let i = 0; i <= 100; i++) {
//   console.log(i)
// }

// ! Ejercicio 6
// for(let i = 100; i >= 0; i--) {
//   console.log(i)
// }

// ! Ejercicio 7
// let num = Number(prompt("Introduce un numero", 4))

// if(num == 0 || isNaN(num)) {
//   alert("Introduce un número válido.")
// } else {

//   for(let i = num; i <= num + 100; i++) {
//     if(i % 2 !== 0) {
//       console.log(`${i} es inpar`)
//     }
//   }
// }


// ! Ejercicio 8
// let num = prompt("Intruduce un numero")

// if(isNaN(num)) {
//   alert("Es un número")
// } else {
//   alert("No es un número")
// }

// ! Ejercicio 9
let num = Number(prompt("Introduce un numero"))

do {
    num = Number(prompt("Introduce un numero"))

    for(let i = 0; i < num; i++){
      for(let j = 0; j <= j; j++) {
        document.write("*")
      }
      document.write(`</br>`)
    }
} while(num < 0)

// ! Ejercicio 19
// let num1 = Number(prompt("Introduce el primer número"))
// let num2 = Number(prompt("Introduce el segundo número"))
// let num3 = Number(prompt("Introduce el tercer número"))

// if(num1 < 10 || num2 < 10 || num3 < 10) {
//   document.write("Alguno de los números es mejor a 10")
// }else {
//   document.write("Ningún número es menor a 10")
// }

// ! Ejercicio 20
// let sueldo = Number(prompt("Introduce el sueldo"))
// let antiguedad = Number(prompt("Introduce la antiguedad"))

// if(sueldo < 500 && antiguedad >= 10) {
//   console.log(sueldo += 20 * 10 /100)
// }