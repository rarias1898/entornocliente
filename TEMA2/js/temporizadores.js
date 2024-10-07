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
let counter = 0;
let ventana;

const interval1 = setInterval(() => {
  let randomTop = Math.floor(Math.random() * (800 - 1)) + 1;
  let randomLetft = Math.floor(Math.random() * (800 - 1)) + 1;
  ventana = window.open(
    "",
    "Prueba1",
    `width=50, height=50, top=${randomTop}, letft=${randomLetft}`
  );

  counter++;
}, 2000);

if (counter == 2000) {
  clearInterval(interval1);
}
