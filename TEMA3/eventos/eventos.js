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
const form = document.createElement("form")

for (let i = 0; i < 9; i++) {
  const button = document.createElement("button")
  button.setAttribute("class", "boton")

  form.appendChild(button)
}

document.body.appendChild(form)

const botones = document.getElementById("boton").addEventListener("click",)