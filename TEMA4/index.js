// ! Ejercicio 1
// const myDiv = document.getElementById("myDIV")
// myDiv.firstElementChild.setAttribute("style", "background-color: yellow; color: red;")
// myDiv.lastElementChild.setAttribute("style", "background-color: orange; color: red;")

// ! Ejercicio 2 y 3
// const div1 = document.getElementById("div1")
// const ref = document.getElementById("p1")

// const newP = document.createElement('p')
// const newNewP = document.createElement('p')

// newP.id = "p3"
// newP.textContent = "Soy el nuevo"
// div1.insertBefore(newP, ref)

// newNewP.textContent = "Soy el primero ahora"
// div1.insertBefore(newNewP, newP)

// ! Ejercicio 4
// const elemP = document.getElementsByTagName("p")[0]
// document.body.removeChild(elemP)

// ! Ejercicio 5
// const elemP = document.getElementsByTagName("p")[0].textContent = "reemplazado"

// ! Ejercicio 10
// const miBoton = document.getElementById("miBoton").addEventListener("click", (e) => {
//   const miLista = document.getElementById("lista")

//   const nuevoLi = document.createElement("li")
//   nuevoLi.textContent = "Nuevo elemento"
//   miLista.appendChild(nuevoLi)
// })

// ! Ejercicio 11
// const titulo = document.createElement("h1")
// titulo.textContent = "Estaciones del año"

// const estaciones = ["primavera", "verano", "otono", "invierno"]
// const continentes = ["europa", "africa", "america", "asia", "oceania"]

// const ulEstaciones = document.createElement("ul")
// const ulContinentes = document.createElement("ul")

// for (let i = 0; i < estaciones.length; i++) {
//   const liEstaciones = document.createElement("li")
//   liEstaciones.textContent += `${estaciones[i]}`
//   ulEstaciones.appendChild(liEstaciones)
// }

// for (let i = 0; i < continentes.length; i++) {
//   const liContinentes = document.createElement("li")
//   liContinentes.textContent += `${continentes[i]}`
//   ulContinentes.appendChild(liContinentes)
// }

// document.body.appendChild(titulo)
// document.body.appendChild(ulEstaciones)
// document.body.appendChild(ulContinentes)

// ! Ejercicio 12
// const enlace1 = document.getElementById("enlace_1").addEventListener("click", (e) => {
//   const p1 = document.getElementById("contenidos_1")
//   const e1 =document.getElementById("enlace_1")
  
//   if(p1.style.display==""){
//     p1.style.display="none";
//     e1.textContent = "Mostrar contenido"
//   }else{
//     p1.style.display="";
//   }
// })

// const enlace2 = document.getElementById("enlace_2").addEventListener("click", (e) => {
//   const p2 = document.getElementById("contenidos_2")
//   const e2 =document.getElementById("enlace_2")

//   if(p2.style.display==""){
//     p2.style.display="none";
//     e2.textContent = "Mostrar contenido"
//   }else{
//     p2.style.display="";
//   }
// })

// const enlace3 = document.getElementById("enlace_3").addEventListener("click", (e) => {
//   const p3 = document.getElementById("contenidos_3")
//   const e3 =document.getElementById("enlace_3")

//   if(p3.style.display==""){
//     p3.style.display="none";
//     e3.textContent = "Mostrar contenido"
//   }else{
//     p3.style.display="";
//   }
// })

// ! Ejercicio 17
const objetoTabla = [
  {
    id: "tr1",
    nombre: "nombre1",
    precio: 27,
    codigo: 4267
  },
  {
    id: "tr2",
    nombre: "nombre2",
    precio: 46,
    codigo: 7533
  },
  {
    id: "tr3",
    nombre: "nombre3",
    precio: 76,
    codigo: 3746
  },
  {
    id: "tr4",
    nombre: "nombre4",
    precio: 189,
    codigo: 9349
  },
];

const cuerpoTabla = document.getElementById("cuerpoTabla")


for (let i = 0; i < objetoTabla.length; i++) {
  const td = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")
  const tr = document.createElement("tr")

  cuerpoTabla.appendChild(tr)

  td.innerText = `${objetoTabla[i].nombre}`
  td2.innerText = `${objetoTabla[i].precio}`
  td3.innerText = `${objetoTabla[i].codigo}`

  tr.appendChild(td)
  tr.appendChild(td2)
  tr.appendChild(td3)
}
