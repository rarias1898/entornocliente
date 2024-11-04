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
document.getElementById("miForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const radios = document.getElementsByName("rad1");
  let seleccion = null;

  for (let radio of radios) {
      if (radio.checked) {
          seleccion = radio.value;
          break;
      }
  }

  if (seleccion) {
      alert("La opción seleccionada es: " + seleccion);
  } else {
      alert("No se ha seleccionado ninguna opción.");
  }
});