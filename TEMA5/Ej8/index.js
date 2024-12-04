window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10")
      const data = await response.json()
      const result = data.results

      result.forEach((element, i) => {
        if (i == 0) {
          i++
        }

        const usuarios = document.getElementById("usuarios")

        const div = document.createElement("div")
        const imagen = document.createElement("img")
        const nombre = document.createElement("p")
        const email = document.createElement("p")
        const direccion = document.createElement("p")
        const ciudad = document.createElement("p")
        const boton = document.createElement("button")

        div.id = `div${i}`
        imagen.src = element.picture.large
        nombre.innerText = `${element.name.title}. ${element.name.first} ${element.name.last}`
        email.innerText = element.email
        direccion.innerText = `${element.location.street.name}, ${element.location.street.number}`
        ciudad.innerText = `${element.location.city}`
        boton.innerText = "Cambiar"
        boton.id = `cambiar${i}`

        usuarios.appendChild(div)
        div.appendChild(imagen)
        div.appendChild(nombre)
        div.appendChild(email)
        div.appendChild(direccion)
        div.appendChild(ciudad)
        div.appendChild(boton)

        boton.addEventListener("click", async () => {
          try {
            const nuevoResponse = await fetch("https://randomuser.me/api/?results=1")
            const nuevoData = await nuevoResponse.json()
            const nuevoUsuario = nuevoData.results[0]
            // console.log(nuevoUsuario)

            imagen.src = nuevoUsuario.picture.large;
            nombre.innerText = `${nuevoUsuario.name.title}. ${nuevoUsuario.name.first} ${nuevoUsuario.name.last}`;
            email.innerText = nuevoUsuario.email;
            direccion.innerText = `${nuevoUsuario.location.street.name}, ${nuevoUsuario.location.street.number}`;
            ciudad.innerText = nuevoUsuario.location.city;
          } catch (error) {
            console.log(error)
          }
        })
      });

    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
})