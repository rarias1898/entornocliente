// ! Ejercicio 1
// const parrafo1 = document.getElementsByTagName("p")

// if (confirm("Quieres cambiar el texto?")) {
//   parrafo1[0].innerText = "Texto Cambiado"
// }else if(confirm("Quieres cambiar el color?")) {
//   parrafo1[0].style.color = "orange"
// }

// ! Ejercicio 2
// document.getElementById('boton1').addEventListener('click', (e) => {
//   const nombreUsuario = prompt("¿Cuál es tu nombre?");

//   if (nombreUsuario) {
//       document.getElementById('input1').value = nombreUsuario;
//       e.target.value = "Pulsado"
//   }
// })

// ! Ejercicio 3
// document.getElementById("botonMarcar").addEventListener("click", (e) => {
//   document.getElementById("chk1").checked = "checked"
// })

// ! Ejercicio 4
// document.getElementById("botonMarcar2").addEventListener("click", (e) => {

//   let suma = 0

//   for (let i = 0; i < 4; i++) {
//     const checkbox  = document.getElementById(`ck${i}`)

//     if (checkbox && checkbox.checked) {
//       suma += parseInt(checkbox.value);
//     }
//   }

//   alert(suma)

//   for (let i = 0; i < 4; i++) {
//     document.getElementById(`ck${i}`).checked = false;
//   }
// })

// ! Ejercicio 5
// document.getElementById("botonRadios").addEventListener("click", () => {
//   const radios = document.getElementsByName("rad1");
//   let seleccion = null;

//   for (let radio of radios) {
//       if (radio.checked) {
//           seleccion = radio.value;
//           break;
//       }
//   }

//   if (seleccion) {
//       alert("La opción seleccionada es: " + seleccion);
//   } else {
//       alert("No se ha seleccionado ninguna opción.");
//   }
// });

// ! Ejercicio 6
// document.getElementById("miForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const radios = document.getElementsByName("rad1");
//   let seleccion = null;

//   for (let radio of radios) {
//       if (radio.checked) {
//           seleccion = radio.value;
//           break;
//       }
//   }

//   if (seleccion) {
//       alert("La opción seleccionada es: " + seleccion);
//   } else {
//       alert("No se ha seleccionado ninguna opción.");
//   }
// });

// ! Ejercicio 9
// document.getElementById("boton1").addEventListener("click", (e) => {
//     e.preventDefault()

//     let texto = document.getElementById("name")
//     let datos = document.getElementById("datos")

//     datos.innerText = texto.value
//     datos.setAttribute("class", "resultado")

//     texto.value = ''
//     texto.focus()
// })

// ! Ejercicio 10
// document.getElementById("enviarDatos").addEventListener("click", (e) => {
//   e.preventDefault();
//   let select = document.getElementById("prov");

//   let opciones = select.options;

//   alert(
//     select.selectedIndex +
//       " - " +
//       select.value +
//       " - " +
//       opciones[select.selectedIndex].text
//   );
// });

// document.getElementById("enviarDatos2").addEventListener("click", (e) => {
//   e.preventDefault();

//   let select = document.getElementById("prov2");
//   let opciones = select.options;

//     for (let i = 0; i < opciones.length; i++) {
//       if(select[i].selected) {
//         console.log(select.text)
//       }
//     }
// });

// ! Ejercicio 11
document.getElementById("mayorDeEdad").addEventListener("click", (e) => {
  e.preventDefault();

  let edad = document.getElementById("edad").value;
  let resultado = document.getElementById("resultado");

  if (!isNaN(edad)) {
    if (edad >= 18) {
      resultado.innerText = "Es mayor de edad";
      resultado.setAttribute("class", "verde")
    } else {
      resultado.innerText = "Es menor de edad";
      resultado.setAttribute("class", "rojo")
    }
  } else {
    resultado.innerText = "No es un numero";
    resultado.setAttribute("class", "rojo")
  }
});
