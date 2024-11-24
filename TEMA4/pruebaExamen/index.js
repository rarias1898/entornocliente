window.addEventListener("DOMContentLoaded", () => {
  const objetotabla = [
    {
      id: "tr1",
      nombre: "nombre1",
      precio: 20,
      codigo: 2345
    },
    {
      id: "tr2",
      nombre: "nombre2",
      precio: 25,
      codigo: 6436
    },
    {
      id: "tr3",
      nombre: "nombre3",
      precio: 56,
      codigo: 7642
    },
    {
      id: "tr4",
      nombre: "nombre4",
      precio: 13,
      codigo: 8735
    },
  ]

  const cuerpoTabla = document.getElementById("cuerpoTabla")
  const theadTr = document.getElementsByTagName("table")[0].firstElementChild.firstElementChild
  
  for (let i = 0; i < 3; i++) {
    const tbodyTr = document.createElement("tr")
    const td = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    
    cuerpoTabla.appendChild(tbodyTr)
    
    tbodyTr.id = objetotabla[i].id
    td.innerText = objetotabla[i].nombre
    td2.innerText = objetotabla[i].precio
    td3.innerText = objetotabla[i].codigo

    tbodyTr.appendChild(td)
    tbodyTr.appendChild(td2)
    tbodyTr.appendChild(td3)
  }


  document.getElementById("botonAnadir").addEventListener("click", (e) => {
    e.preventDefault()
    const th = document.createElement("th")
    th.innerText = "Checkbox"
    theadTr.appendChild(th)

    for (let i = 1; i < 4; i++) {
      const td = document.createElement("td")
      const ck = document.createElement("input")
      ck.type = "checkbox"
      ck.id = `checkbox${i}`
      ck.name = "marcar"
      const tr = document.getElementById(`tr${i}`)
      
      tr.appendChild(td)
      td.appendChild(ck)
    }
  })

  document.getElementById("seleccionarCks").addEventListener("click", (e) => {
    e.preventDefault()
    
    for (let i = 1; i < cuerpoTabla.children.length + 1; i++) {
      const cks = document.getElementById(`checkbox${i}`)  
      
      if (cks.checked == false) {
        cks.checked = true
      }else {
        cks.checked = false
      }
    }

  })

  document.getElementById("deleteFila").addEventListener("click", (e) => {
    e.preventDefault()

    for (let i = 1; i < objetotabla.length + 1; i++) {
      const cks = document.getElementById(`checkbox${i}`)
      if (cks.checked == true) {
        cks.parentElement.parentElement.remove()
      }
    }
  })

  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault()
    
    const nombreN = document.getElementById("nombreN").value
    const precioN = document.getElementById("precioN").value
    const codigoN = document.getElementById("codigoN").value

    const tbodyTr = document.createElement("tr")
    const td = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    cuerpoTabla.appendChild(tbodyTr)
    tbodyTr.id = `tr${objetotabla.length + 1}`
    td.innerText = nombreN
    td2.innerText = precioN
    td3.innerText = codigoN

    tbodyTr.appendChild(td)
    tbodyTr.appendChild(td2)
    tbodyTr.appendChild(td3)

  })

  console.log(theadTr)
  console.log(cuerpoTabla)
}) 