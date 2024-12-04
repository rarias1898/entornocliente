window.addEventListener("DOMContentLoaded" ,() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/5")
      const data = await response.json()
      console.log(data)

      let usuario = document.getElementById("usuario");

      let nombre = document.createElement("h1");
      let user = document.createElement("p");
      let email = document.createElement("p");
      let direccion = document.createElement("p");
  
      nombre.innerText = `Nombre: ${data.name}`;
      user.innerText = `Usuario: ${data.username}`;
      email.innerText = `Email: ${data.email}`;
      direccion.innerText = `Direccion: ${data.address.street}, ${data.address.suite}. ${data.address.zipcode}, ${data.address.city}`;
  
      usuario.appendChild(nombre);
      usuario.appendChild(user);
      usuario.appendChild(email);
      usuario.appendChild(direccion)
    } catch (error) {
      console.error(error)
    }
  }

  fetchData()
})