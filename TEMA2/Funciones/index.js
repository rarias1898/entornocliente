// ! Ejercicio 1
function cuadrado1(num) {
  return num*num;
}

let cuadrado2 = function(num) {
  return num*num;
} 

let cuadrado3 = (num) => {
  return num*num;
}

// console.log(cuadrado1(2))
// console.log(cuadrado2(2))
// console.log(cuadrado3(2))

// ! Ejercicio 2
const factorial = (num) => {
  // Factorial de de 5 es 1 * 2 * 3 * 4 * 5

  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
}

// console.log(factorial(5))

// ! Ejercicio 3
const esPar = (num) => {
  if(num % 2 == 0) {
    return "Es par"
  }else {
    return "Es inpar"
  }
}

const aleatorio = () => {
  for (let i = 0; i <= 500; i++) {
    const numAleatorio = Math.floor(Math.random() * (10000 - 1 + 1)) + 1
    console.log(`${i} --> ${numAleatorio} ${esPar(numAleatorio)}`)
    
  }
}

// console.log(aleatorio())

// ! Ejercicio 4
const sumatorio = (num) => {
  // Sumatorio de 5 es 5+4+3+2+1

  let total = 0;

  for (let i = 0; i <= num ; i++) {
    total += i
    
  }
  return total
}

// console.log(sumatorio(5))

// ! Ejercicio 5
const dibujarTabla = (filas = 10, columnas = 4, colorBorde = "black") => {
  const tabla = document.createElement("table");
  tabla.className = "tabla";
  tabla.style.border = `3px solid ${colorBorde}`;
  
  for (let i = 0; i < filas; i++) {
      const fila = document.createElement("tr");
      for (let j = 0; j < columnas; j++) {
          const celda = document.createElement("td");
          celda.style.border = `1px solid ${colorBorde}`;
          fila.appendChild(celda);
      }
      tabla.appendChild(fila);
  }

  document.body.appendChild(tabla);
}

dibujarTabla();

dibujarTabla(20, 10);

for (let i = 0; i < 10; i++) {
  dibujarTabla(5, 4, "green");
}

// ! Ejercicio 6
const esFinde = () => {
  let finde = new Date().getDay()

  if( finde == 0 || finde == 6) {
    primeraVentana = window.open("", "Ventana 1", "width=400, height=400")
    primeraVentana.document.write("😊😊")
  }else {
    segundaVentana = window.open("", "Ventana 2", "width=400, height=400")
    segundaVentana.window.document.write("😢😢")
  }
}

// ! Ejercicio 7
const abrirVentana = () => {
  nuevaVentana = window.open("", "Ventana 3", "width=700, height=300")
  let numero = nuevaVentana.window.prompt("Introduce un numero del 1 al 20")

  if (numero) {
    nuevaVentana.close()
  }

  if (nuevaVentana.closed) {
    imptNumeros(numero)
  }
}

const imptNumeros = (num) => {
  let resultado = ""

  for (let i = 1; i <= num; i++) {
    resultado = `<ul><li style="list-style-type: none">${i}</li></ul>`
    document.write(resultado)
  }
}