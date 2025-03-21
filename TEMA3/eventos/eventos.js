// ! Ejercicio 1
const inputMayus = (e) => {
  let texto = e.target.value

  e.target.value = texto.toUpperCase()
} 

// document.getElementById('ejercicio1').addEventListener("blur", inputMayus);

// ! Ejercicio 2
// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// input1.style.color = "red"
// input2.style.color = "red"

const inputColor = (e) => {
  e.target.style.color = "black"
}

// input1.addEventListener("blur", inputColor)
// input2.addEventListener("blur", inputColor)

const pulsame = (e) => {
  e.target.style.color = "red"
}

const cambiame = (e) => {
  e.target.style.borderColor = "blue"
}

const cambiameNaranja = (e) => {
  e.target.style.borderColor = "orange"
}

// document.getElementById('button1').addEventListener("click", pulsame)
// document.getElementById('button2').addEventListener("mouseover", cambiame)
// document.getElementById('button2').addEventListener("mouseout", cambiameNaranja)

// ! Ejercicio 3
const validar = () => {
  let ej3Checkbox = document.getElementsByName("ej3")
  let counter = 0

  for (let i = 0; i < ej3Checkbox.length; i++) {
    if (ej3Checkbox[i].checked) {
      counter++
    }
  }

  if (counter === 3) {
    alert("Has seleccionado 3 o más checkbox")
  }

}

// ! Ejercicio 4
// let numero = Number(document.getElementById("numero").innerText)

// const sumar = () => {
//   numero++
//   document.getElementById("numero").innerText = numero
// }

// const restar = () => {
//   numero--
//   document.getElementById("numero").innerText = numero

//   if (numero == 3) {
//     document.getElementById("numero").innerText += " Alcanzado valor 3"
//   }
// }

// ! Ejercicio 5
// const mostrarValor = (e) => {
//   e.preventDefault()
//   const valor = document.getElementById("valor")
//   const valorBoton = e.target.value

//   valor.innerText = `El valor del boton es: ${valorBoton}`
// }

// for (let i = 0; i < 10; i++) {
  
//   document.getElementById(`boton${i}`).addEventListener("click", mostrarValor)

// }

// ! Ejercicio 6 y 7
// const validando = (e) => {
//   e.preventDefault()
//   const nombre = document.getElementById("nombre").value
//   const apellidos = document.getElementById("apellido").value
//   const errorNombre = document.getElementById("error-nombre")
//   const errorApellido = document.getElementById("error-apellido")
//   let Val = 0

//   if (nombre.charAt(0) != 'a' && nombre.charAt(0) != 'e' && nombre.charAt(0) != 'i' && nombre.charAt(0) != 'o' && nombre.charAt(0) != 'u' ) {
//     errorNombre.innerText = `El campo no comienza con una vocal`
//     errorNombre.style.color = "red"
//     Val++
//   }
  
//   if (!apellidos.trim().includes(" ")) {
//     errorApellido.innerText = `El campo tiene que tener 2 o mas palabras`
//     errorApellido.style.color = "red"
//     Val++
//   }

//   if (Val === 0) {
//     window.location.href = "https://ceu.es"
//   }
// }

// document.getElementById("validar").addEventListener("click", validando)

// ! Ejercicio 8
// const enviarDatos = (e) => {
//   e.preventDefault()
//   const nombre = document.getElementById("nombre").value.trim()
//   const apellidos = document.getElementById("apellidos").value.trim()
//   const edad = document.getElementById("edad").value
//   const provincia = document.getElementById("provincia").value
  
//   const resultado = document.getElementById("resultado")
//   resultado.style.color = "red"

//   if (nombre == "") {
//     resultado.innerText = "El nombre no puede estar vacio"
//     return
//   }

//   if (apellidos == "") {
//     resultado.innerText = "Los apellidos no pueden estar vacios"
//     return
//   }

//   if (edad == "" ||isNaN(edad) || Number(edad) < 0 || Number(edad) > 106) {
//     resultado.innerText = "La edad no puede estar vacia"
//     return
//   }

//   if (provincia == 0) {
//     resultado.innerText = "Seleccione una provincia"
//     return
//   }

//   if (resultado.innerText == "") {
//     const enviar = confirm("Quieres enviar el formulario?")

//     if (enviar) {
//       document.getElementById("formulario").submit();
//     }else {
//       resultado.innerText = "Envío cancelado por el usuario"
//     }
//   }
// }

// const limpiarDatos = (e) => {
//   e.target.reset()
// }

// document.getElementById("enviar").addEventListener("click", enviarDatos)
// document.getElementById("limpiar").addEventListener("click", limpiarDatos)

// ! Ejercicio 9
// var ventanaDatos;
// const botonVentana = document.getElementById("abrirPagina").addEventListener("click", () => {
//   ventanaDatos = window.open("", "datos.html", "width=400, height=300")

//   ventanaDatos.document.write('<label for="nombre">Nombre:</label>')
//   ventanaDatos.document.write('<input type="text" name="nombre" id="nombre" />')

//   ventanaDatos.document.write('<label for="apellido">Apellido:</label>')
//   ventanaDatos.document.write('<input type="text" name="apellido" id="apellido" />')

//   ventanaDatos.document.write('<label for="fecha">Fecha:</label>')
//   ventanaDatos.document.write('<input type="date" name="fecha" id="fecha" />')

//   ventanaDatos.document.write('<button id="botonMostrar">Mostrar</button>')

//   ventanaDatos.document.getElementById("botonMostrar").addEventListener("click", (e) => {
    // const resultado = ventanaDatos.opener.document.getElementById("resultado")

//     const nombre = ventanaDatos.document.getElementById("nombre").value
//     const apellido = ventanaDatos.document.getElementById("apellido").value
//     const fecha = ventanaDatos.document.getElementById("fecha").value

//     resultado.innerHTML += `${nombre} ${apellido}, ${fecha}`
//     ventanaDatos.close() 
//   })
// });

// ! Ejercicio 10
var temporizador;
const iniciarContador = (e) => {
  let contador = document.getElementById("temporizador").innerHTML

  temporizador = setInterval(() => {
    contador--
    document.getElementById("temporizador").innerHTML = contador
  }, 1000);
}

const pausarContador = (e) => {
  clearInterval(temporizador)
}

const reiniciarContador = (e) => {
  document.getElementById("temporizador").innerHTML = 30
  clearInterval(temporizador)
}

const iniciar = document.getElementById("iniciar").addEventListener("click", iniciarContador)
const pausar = document.getElementById("pausar").addEventListener("click", pausarContador)
const reiniciar = document.getElementById("reiniciar").addEventListener("click", reiniciarContador)
