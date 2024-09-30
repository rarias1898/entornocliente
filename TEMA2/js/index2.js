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
// let num = Number(prompt("Introduce un número entero positivo"))

// if(num < 0 || isNaN(num)) {
//   alert("Introduce un número entero positivo")
// } else {
//   for(let i = 1; i <= num; i++) {
//     for(let j = 1; j <= i; j++) {
//       document.write("* ")
//     }
//     document.write("<br>")
//   }
// }

// ! Ejercicio 10
// for(let i = 5; i >= 1; i--) {
//   for(let j = i; j >= 1; j--) {
//     document.write(j)
//   }
//   document.write("<br>")
// }

// ! Ejercicio 11
// let nombre = prompt("Introduce tu nombre");
// let apellido1 = prompt("Introduce tu primer apellido");
// let apellido2 = prompt("Introduce tu segundo apellido");
// let salario = Number(prompt("Introduce tu salario"));
// let edad = Number(prompt("Introduce tu edad"));

// if (salario >= 1000 && salario <= 2000) {
//   if (edad > 45) {
//     console.log(`Nombre: ${nombre} ${apellido1} ${apellido2}`);
//     console.log(`Salario: ${(salario += salario * 0.03)}`);
//   } else {
//     console.log(`Nombre: ${nombre} ${apellido1} ${apellido2}`);
//     console.log(`Salario: ${(salario += salario * 0.1)}`);
//   }
// } else if (salario < 1000) {
//   if (edad < 30) {
//     console.log(`Nombre: ${nombre} ${apellido1} ${apellido2}`);
//     console.log(`Salario: ${(salario += 1100)}`);
//   } else if (edad >= 30 && edad <= 45) {
//     console.log(`Nombre: ${nombre} ${apellido1} ${apellido2}`);
//     console.log(`Salario: ${(salario += salario * 0.03)}`);
//   } else {
//     console.log(`Nombre: ${nombre} ${apellido1} ${apellido2}`);
//     console.log(`Salario: ${(salario += salario * 0.15)}`);
//   }
// }

// ! Ejercicio 12
// let cadena = "Hoy es viernes";
// let cadenaInvertida = "";

// for (let i = cadena.length - 1; i >= 0; i--) {
//   cadenaInvertida += cadena[i];
// }

// console.log(cadenaInvertida);

// ! Ejercicio 13
// let num1 = Number(prompt("Introduce el primer número"));
// let num2 = Number(prompt("Introduce el segundo número"));
// let num3 = Number(prompt("Introduce el tercer número"));

// let media = (num1 + num2 + num3) / 3;

// if (media >= 7) {
//   console.log("Promocionado");
// } else {
//   console.log("No promocionado");
// }

// ! Ejercicio 14
// let lado = Number(prompt("Introduce el lado del cuadrado"));

// let perimetro = lado * 4;

// console.log(`El perímetro del cuadrado es: ${perimetro}`);


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
let sueldo = Number(prompt("Introduce el sueldo"))
let antiguedad = Number(prompt("Introduce la antiguedad"))

if(sueldo < 500 && antiguedad >= 10) {
  console.log(sueldo += 20 * 10 /100)
}else {
  console.log(sueldo)
}
