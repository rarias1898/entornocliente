// let nuevaVentana = window.open("direccion URL", "nombre de la ventana", "parametros")

// ! Ejercicio 15
// let aceptar = confirm("Quieres abrir una nueva ventana?")

// if (aceptar) {
//   let nuevaVentana = window.open("", "Nueva Ventana", "width=200, height=80, top=500, left=500, resizable=true, scrollbars=true, toolbar=false")

//   nuevaVentana.document.write("<h1>Entorno cliente</h1>")
// }

// ! Ejercicio 16
// var segundaVentana;
// const openSegunda = () => {
//   segundaVentana = window.open("segunda.html", "Ventana secundaria", "width=300, height=400, top=400, left=400")
// }

// const mooveSegunda = () => {
//   if(segundaVentana){
//     segundaVentana.moveBy(200,100);
//     segundaVentana.focus();
//   }else {
//     alert("La ventana no está abierta")
//   }
// }

// const mooveSegunda2 = () => {
//   if(segundaVentana) {
//     segundaVentana.moveTo(500, 200)
//     segundaVentana.focus()
//   }else {
//     alert("La ventana no está abierta")
//   }
// }

// const aumentarTamano = () => {
//   if(segundaVentana) {
//     segundaVentana.resizeBy(100, 100)
//     segundaVentana.focus()
//   }else {
//     alert("La ventana no está abierta")
//   }
// }

// const cambiarTamano = () => {
//   if(segundaVentana) {
//     segundaVentana.resizeTo(100, 150)
//     segundaVentana.focus()
//   }else {
//     alert("La ventana no está abierta")
//   }
// }

// const getGreen = () => {
  
//   document.body.style.backgroundColor="green"
// }

// const getRed = () => {
//   window.opener.document.body.style.backgroundColor="red"

// }

// const closeWindow = () => {
//   window.close()
// }

// const closeAllWindows =() => {
//   window.close()
//   window.opener.close()
// }

// ! Ejercicio 17
// var nuevaVentana;

// const selectorColor = () => {
//   nuevaVentana = window.open("selector.html", "Selector", "width=600, height=600")
//   let color = nuevaVentana.prompt("Dame un color")
  
//   if(color) {
//     nuevaVentana.opener.document.body.style.backgroundColor=`${color}`
//     nuevaVentana.close()
//   }
// }

// ! Ejercicio 21
var primeraVentana;
var segundaVentana;

const openWindows = () => {
  primeraVentana = window.open("ventana1.html", "Ventana 1", "width=300, height=200, top=100, left=300")
  segundaVentana = window.open("ventana2.html", "Ventana 2", "width=300, height=200, top=500, left=300")
}

const closeWindows = () => {
  if(primeraVentana && segundaVentana) {
    primeraVentana.close()
    segundaVentana.close()
  }else {
    alert("Las ventanas no estan abiertas")
  } 
}

const changeColor1 = () => {
  if(primeraVentana && segundaVentana) {
    primeraVentana.document.body.style.backgroundColor="#FFECA1"
    primeraVentana.focus()
    segundaVentana.focus()
  }
}

const changeColor2 = () => {
  segundaVentana.document.body.style.backgroundColor="#EFC3CA"
  primeraVentana.focus()
  segundaVentana.focus()
}

const saludo = () => {
  window.opener.segundaVentana.document.body.innerHTML += "<p>La ventana 1 te saluda</p>"
}

const changeColorV2 = () => {
  window.opener.segundaVentana.document.body.style.backgroundColor="#7DDA58"
}

const saludoV2 = () => {
  window.opener.primeraVentana.document.body.innerHTML += "<p>La ventana 2 te saluda</p>"
}

const changeV2Color = () => {
  window.document.body.style.backgroundColor = "#5DE2E7"
}