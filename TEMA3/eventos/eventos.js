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