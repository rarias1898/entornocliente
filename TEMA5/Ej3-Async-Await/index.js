window.addEventListener("DOMContentLoaded", () => {

  const fetchData = async () => {
    try {
      const response = await fetch("https://yesno.wtf/api")
      const data = await response.json()
      // console.log(data)

      const parrafo = document.getElementById("respuesta")
      parrafo.innerHTML = `<h1>${data.answer}</h1><img src=${data.image} alt="">`
    } catch (error) {
      console.log(error)
    }
  }

  document.getElementById("btn").addEventListener("click", () => {
    fetchData()
  })
})