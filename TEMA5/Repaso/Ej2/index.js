window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/`)
      const data = await response.json()
      const results = data.results

      const div = document.getElementById("character-row")
      
      results.forEach(element => {
        const perDiv = document.createElement("div")
        perDiv.className = "character-container"

        const img = document.createElement("img")
        img.className = "character-image"
        img.src = element.image

        const info = document.createElement("div")
        info.className = "character-info"

        const id = document.createElement("p")
        const nombre = document.createElement("p")
        const estado = document.createElement("p")
        const especie = document.createElement("p")
        const totalEp = document.createElement("p")

        id.innerHTML = `<b>ID: ${element.id}</b>`
        nombre.innerHTML = `<b>Nombre: ${element.name}</b>`
        estado.innerHTML = `<b>Nombre: ${element.status}</b>`
        especie.innerHTML = `<b>Nombre: ${element.species}</b>`
        totalEp.innerHTML = `<b>Nombre: ${element.episode.length}</b>`

        perDiv.appendChild(img)
        perDiv.appendChild(info)
        info.append(id, nombre, estado, especie, totalEp)
        div.appendChild(perDiv)
      });

      console.log(results)
    } catch (error) {
      console.log(error)
    }  
  }
  
  document.getElementById("btn").addEventListener("click", () => {
    fetchData()
  })
})