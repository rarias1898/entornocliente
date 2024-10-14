// ! Ejercicio 18
// var color = "blue"

// const cambioColor = () => {
//   if(color == "blue") {
//     document.body.style.backgroundColor="orange"
//     color = "orange"
//   }else{
//     document.body.style.backgroundColor="blue"
//     color = "blue"
//   }
// }

// let intervalo = setInterval(cambioColor, 1000)

// const detenerColor = () => {
//   clearInterval(intervalo)
// }

// ! Ejercicio 19
// document.write("Nos vamos!")
// const locTime = setTimeout(() => {
//   window.open("https://www.google.es", "google", "")
// }, 5000);

// ! Ejercicio 20
// const donQui = setInterval(() => {
//   console.log("En un lugar de la Mancha")
// }, 2000);

// const pararDonq = () => {
//   clearInterval(donQui)
// }

// const hanPasado = () => {
//   const segundos = setTimeout(() => {
//     console.log("Han pasado 3 segundos")
//   }, 3000);
// }

// var ventana1;
// const openVentana = () => {
//   ventana1 = window.open("", "Ventana1", "width=400, height=400")

//   let interval1 = setInterval(() => {
//     let timeNow = new Date().toLocaleTimeString()
//     ventana1.document.write(`<p>${timeNow}</p>`)

//   }, 1000);

//   setTimeout(() => {
//     clearInterval(interval1)
//   }, 5000)

//   setTimeout(() => {
//     ventana1.close()
//   }, 10000)
// }

// ! Ejercicio 22
// var counter = 0;
// var ventana;

// let interval1 = setInterval(() => {
//   let randomTop = Math.floor(Math.random() * (800 - 100)) + 100;
//   let randomLeft = Math.floor(Math.random() * (800 - 200)) + 200;
//   let randomColor = Math.floor(Math.random() * (999999 - 0)) + 200;

//   ventana = window.open(
//     "",
//     "Prueba1",
//     `width=50, height=50, top=${randomTop}, left=${randomLeft}`
//   );
//     ventana.document.body.style.backgroundColor=`#${randomColor}`
//     counter++;

// }, 2000);

// let interval2 = setInterval(() => {
//   ventana.close()
// }, 3000);

// ! Ejercicio 23
// var ventana;
// var timer = 10;

// const abirVentanaSec = () => {
//   ventana = window.open("", "Ventana", "width=400, height=200, left=400, top=400")
//   ventana.document.write("Esto es la ventana 1")

//   ventana.opener.document.body.innerHTML += `<h1>La ventana se cerrara en ${timer}</h1>`

//   let interval1 = setInterval(() => {
//     timer--
//     ventana.opener.document.body.innerHTML = `<h1>La ventana se cerrará en ${timer}</h1>`

//     if (timer == 0) {
//       ventana.close()
//       clearInterval(interval1)
//       ventana.opener.document.body.innerHTML = `<h1>La ventana se ha cerrado</h1>`
//       timer = 10
//     }

//   }, 1000);

//   console.log(timer)
// }

// ! Ejercicio 24
// var ventana;

// const abirVentanaSec2 = () => {
//   var timer = Number(document.getElementById("segundos").value)
//   ventana = window.open("", "Ventana", "width=400, height=200")
//   ventana.document.write("Esto es la ventana 1")

//   ventana.opener.document.body.innerHTML += `<h1>${timer}</h1>`

//   let interval1 = setInterval(() => {
//     timer--
//     ventana.opener.document.body.innerHTML = `<h1>La ventana se cerrará en ${timer}</h1>`

//     if (timer == 0) {
//       ventana.close()
//       ventana.opener.document.body.innerHTML = `<h1>La ventana se ha cerrado</h1>`
//       clearInterval(interval1)
//     }

//   }, 1000);

//   console.log(timer)
// }

// ! Ejercicio 25
// var ventana;

// const abrirVentana = () => {
//   ventana = window.open("", "Venatana", "width=400, height=200");
//   let result = document.getElementById("resultado");
//   let timer = Number(document.getElementById("segundos").value);

//   ventana.document.body.innerHTML += `${timer}`;

//   let timerInterval = setInterval(() => {
//     timer--;
//     ventana.document.body.innerHTML = `${timer}`;

//     if (timer == 0) {
//       ventana.close();
//       clearInterval(timerInterval);
//       result.innerHTML = `Han pasado ${document.getElementById("segundos").value} segundos desde que se abrio la ventana`
//     }
//   }, 1000);
// };

// ! Ejercicio 26
var ventana;

const abrirVentana = () => {
  ventana = window.open("emergente.html", "Venatana", "width=400, height=200");
  let result = document.getElementById("cuentaAtras")
  let timer = Number(document.getElementById("segundos").value);

  ventana.document.innerHTML += `${timer}`

  let timerInterval = setInterval(() => {
    timer--
    ventana.document.body.innerHTML = `${timer}`

    if (timer == 0) {
      ventana.close()
      clearInterval(timerInterval)
      result.innerHTML = `Han pasado ${document.getElementById("segundos").value} segundos desde que se abrio la ventana`
    }
  }, 1000);
}
