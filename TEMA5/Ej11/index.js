window.addEventListener("DOMContentLoaded", () => {
  const fetchData = async () => {

    const api = prompt("API Key") // EdYf10arT9u3TbV8Mryen3PEPjDrpCf5t0kugzbM
    
    document.getElementById("fecha").addEventListener("change", async () => {
      const fecha = document.getElementById("fecha").value
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${fecha}`)
      const data = await response.json()

      const div = document.getElementById("imagen")
      div.innerHTML = ""
      const img = document.createElement("img")

      img.src = data.url

      div.appendChild(img)
    })
  }

  fetchData()
})