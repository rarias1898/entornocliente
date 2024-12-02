window.addEventListener("DOMContentLoaded", (e) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "./data.json")
  xhr.send()

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if(xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText)
      let response = json.students
      console.log(response)

      let tbody = document.getElementById("studentTable").lastElementChild
      
      response.forEach(element => {
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
    }
  })
})