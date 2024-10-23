// ! Ejercicio 1
const inputMayus = (e) => {
  let texto = e.target.value

  e.target.value = texto.toUpperCase()
} 

document.getElementById('ejercicio1').addEventListener("blur", inputMayus);

// ! Ejercicio 2
