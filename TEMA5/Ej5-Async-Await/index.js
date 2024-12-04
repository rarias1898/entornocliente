window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch("./data.json")
      const data = await response.json()
      const result = data.students
      
      let tbody = document.getElementById("studentTable").lastElementChild
      
      result.forEach(element => {
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        let nombre = document.createElement("td")
        let notas = document.createElement("td")
        let media = document.createElement("td")

        let suma = 0
        element.notas.forEach(nota => {
          suma += nota
        })

        id.innerText = element.id
        nombre.innerText = element.nombre
        notas.innerText = element.notas
        media.innerText = suma / element.notas.length

        tbody.appendChild(tr)
        tr.appendChild(id)
        tr.appendChild(nombre)
        tr.appendChild(notas)
        tr.appendChild(media)
      });

    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
})