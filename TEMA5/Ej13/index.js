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
      const superpoderes = document.createElement("p")

      heroName.innerText = element.name
      secret.innerText = element.secretIdentity
      edad.innerText = element.age
      tituloPoderes.innerText = "SuperPoderes"

      element.powers.forEach(powers => {
        superpoderes.innerHTML += powers
      })
      
      heroDiv.appendChild(heroName)
      heroDiv.appendChild(secret)
      heroDiv.appendChild(edad)
      heroDiv.appendChild(tituloPoderes)
      heroDiv.appendChild(superpoderes)
      section.appendChild(heroDiv)
    });

  }

  fetchData()
})