// ! Ejercicio 1
// let fecha1 = new Date()
// let fecha2 = new Date(2024, 2, 15)

// let fullYear1 = fecha1.getFullYear()
// let fullYear2 = fecha2.getFullYear()

// console.log(fecha1)
// console.log(fecha2)
// console.log(fullYear1)
// console.log(fullYear2)

// let anoPasado = fecha1.setFullYear(2023)
// console.log(fecha1.toLocaleDateString())

// let fecha1Dia = fecha1.getDate()
// let fecha1Mes = fecha1.getMonth()
// let fecha1Year = fecha1.getFullYear()

// console.log(`${fecha1Dia}/${fecha1Mes}/${fecha1Year}`)

// ! Ejercicio 2
// let dateToday = new Date()
// let finalCurso = new Date(2025, 5, 30)

// let dayCount = 1000 * 60 * 60 * 24 
// let count = Math.abs(finalCurso - dateToday)
// count = Math.floor(count / dayCount)
// console.log(count)

// ! Ejercicio 3
// let birthDay = Number(prompt("Cual es el el día de tu cumple?"))
// let birthMonth = Number(prompt("De que mes?"))
// let birthYear = Number(prompt("Introduce el año"))

// let startDate = new Date(birthYear, birthMonth - 1, birthDay)
// let limitDate = new Date(2100, 0, 1)

// let count = 0
// let date = new Date(startDate)
// while (date < limitDate) {
//   if (date.getDay() === 0) {
//     count++
//   }
//   date.setFullYear(date.getFullYear() + 1)
// }

// console.log(`Cumples en domingo: ${count}`)

// ! Ejercicio 4
// let date1 = new Date().toLocaleDateString()
// let date2 = new Date().toDateString()
// let date3 = new Date().toLocaleString()
// let date4 = new Date().toLocaleTimeString()

// console.log(date1)
// console.log(date2)
// console.log(date3)
// console.log(date4)

// ! Ejercicio 5
// let birthDay = Number(prompt("Cual es el el día de tu cumple?"))
// let birthMonth = Number(prompt("De que mes?"))
// let birthYear = Number(prompt("De que año"))

// let dateToday = new Date()
// let yearToday = dateToday.getFullYear()
// let monthToday = dateToday.getMonth() + 1
// let dayToday = dateToday.getDate()

// let age = yearToday - birthYear

// if (monthToday < birthMonth) {
//   age--
// } else if (monthToday === birthMonth && dayToday < birthDay) {
//   age--
// }

// console.log(`Tienes ${age} años`)

// ! Ejercicio 6
// let dateToday = new Date()
// let day = dateToday.getDay()

// let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

// console.log(day)
// console.log(dias[day])


// ! Ejercicio 7
// let dateToday = new Date()
// let year = dateToday.getFullYear()
// let yearString = year.toString()
// let lastTwo = yearString.slice(-2)

// console.log(lastTwo)

// ! Ejercicio 8
// let moneda = Math.floor(Math.random() * (2 - 1 + 1)) + 1

// if(moneda === 1) {
//   console.log("Cara")
// } else {
//   console.log("Cruz")
// }

// ! Ejercicio 9
// let userNum = Number(prompt("Dame un numero"))
// let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1

// if(userNum == random) {
//   console.log(`Felicidades, has adivinado el numero`)
// } else {
//   console.log(`ERROR, el numero elegido era el ${random}`)
// }

// ! Ejercicio 10
// let suma = 0
// let random 

// for (let i = 0; i <= 10; i++) {
  
//     random = Math.floor(Math.random() * (20 - 1 + 1)) + 1
//     console.log(random)
//     suma += random
// }

// console.log(`La suma es: ${suma}`)

// ! Ejercicio 11
// let name = prompt("Digame su nombre")
// let dateToday = new Date()

// let hora = dateToday.getHours()

// if(hora >= 7 && hora < 12) {
//   console.log(`Buenos días ${name}`)
// }else if(hora >= 12 && hora < 20) {
//   console.log(`Buenas tardes ${name}`)
// }else if(hora >= 20) {
//   console.log(`Buenas noches ${name}`)
// }

// ! Ejercicio 12
// let dateNow = new Date()
// anoActual = dateNow.getFullYear()

// let randomDay = Math.floor(Math.random() * (30 - 1 + 1)) + 1
// let randomMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1
// let randomYear = Math.floor(Math.random() * (anoActual - 2000 + 1)) + 2000

// let NuevaFecha = new Date(randomYear, randomMonth, randomDay).toLocaleDateString()

// console.log(NuevaFecha)