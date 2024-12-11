window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    const response = await fetch(`https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`)
    const data = await response.json()
    const miembros = data.members

    const header = document.getElementById("header")
    const section = document.getElementById("section")

    const nombreEquipo = document.createElement("h1")
    const ciudadFecha = document.createElement("p")
    

    nombreEquipo.innerHTML = data.squadName
    ciudadFecha.innerHTML = `${data.homeTown} - ${data.formed}`

    header.appendChild(nombreEquipo)
    header.appendChild(ciudadFecha)

    miembros.forEach(element => {
      const heroDiv = document.createElement("div")
      const heroName = document.createElement("h2")
      const secret = document.createElement("p")
      const edad = document.createElement("p")
      const tituloPoderes = document.createElement("p")
      const lista = document.createElement("ul")

      heroName.innerText = element.name
      secret.innerText = element.secretIdentity
      edad.innerText = element.age
      tituloPoderes.innerText = "SuperPoderes"

      element.powers.forEach(powers => {
        const li = document.createElement("li")
        li.innerHTML += powers
        lista.appendChild(li)
      })
      
      heroDiv.appendChild(heroName)
      heroDiv.appendChild(secret)
      heroDiv.appendChild(edad)
      heroDiv.appendChild(tituloPoderes)
      heroDiv.appendChild(lista)
      section.appendChild(heroDiv)
    });

  }

  fetchData()
})