window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    const id = document.getElementById("buscar").value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()

    const pokeDiv = document.getElementById("pokemon")
    pokeDiv.innerHTML = ""
    const nombre = document.createElement("h2")
    const img = document.createElement("img")
    const img2 = document.createElement("img")
    const ul = document.createElement("ul")

    nombre.innerText = data.name
    img.src = data.sprites.other.showdown.front_default
    img.style.width = "200px"
    img2.src = data.sprites.other.showdown.front_shiny
    img2.style.width = "200px"

    data.moves.forEach(each => {
      const li = document.createElement("li")
      li.innerText = each.move.name
      ul.appendChild(li)
    })

    pokeDiv.appendChild(nombre)
    pokeDiv.appendChild(img)
    pokeDiv.appendChild(img2)
    pokeDiv.appendChild(ul)

    // console.log(data)
  }

  document.getElementById("btn").addEventListener("click", () => {

    fetchData()
  })
})