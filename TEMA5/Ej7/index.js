window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const result = data.results;

      const div = document.getElementById("usuario");
      div.innerHTML = ""

      result.forEach((element) => {
        const nombre = document.createElement("h1");
        const email = document.createElement("h2");
        const ciudad = document.createElement("p")
        const imagen = document.createElement("img")

        nombre.innerText = `${element.name.title} ${element.name.first} ${element.name.last}`;
        email.innerText = element.email
        ciudad.innerText = `${element.location.city} - ${element.location.state}, ${element.location.country}`
        imagen.src = element.picture.large

        div.appendChild(nombre);
        div.appendChild(email)
        div.appendChild(ciudad)
        div.appendChild(imagen)
      });
    } catch (error) {
      console.log(error);
    }
  };

  document.getElementById("btn").addEventListener("click", () => {
    fetchData();
  });
});
