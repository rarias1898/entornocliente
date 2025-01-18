window.addEventListener("DOMContentLoaded", () => {
  const info = document.getElementById("informacionPersonaje");
  const infoPeli = document.getElementById("detallePeliculas");

  const fetchData = async () => {
    const idPersonaje = document.getElementById("personajeId").value;

    if (idPersonaje == "") {
      alert("Error, no se ha indicado ningún id");
      info.innerHTML = ""
      infoPeli.innerHTML = ""
      return;
    }

    if (idPersonaje < 1 || idPersonaje > 10) {
      alert("Error, El número tiene que estar entre 1 y 10");
      info.innerHTML = ""
      infoPeli.innerHTML = ""
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://lotrapi.co/api/v1/characters/${idPersonaje}`);
    xhr.send();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Éxito");

        const response = JSON.parse(xhr.responseText);

        const nombre = document.createElement("h2");
        const altura = document.createElement("p");
        const colorPelo = document.createElement("p");
        const colorOjos = document.createElement("p");
        const tituloArmas = document.createElement("h3");
        const listaArmas = document.createElement("ul");
        const tituloPeliculas = document.createElement("h4");
        const listaPeliculas = document.createElement("ul");

        nombre.innerText = response.name;
        altura.innerHTML = `Altura: ${response.height}`;
        colorPelo.innerHTML = `Color de pelo: ${response.hair_color}`;
        colorOjos.innerHTML = `Color de ojos: ${response.eye_color}`;

        tituloArmas.innerText = "Armas";
        response.weapons.forEach((element) => {
          const armas = document.createElement("li");
          armas.innerText = element;
          listaArmas.appendChild(armas);
        });

        tituloPeliculas.innerText = "Películas:";
        response.films.forEach((element) => {
          const peliculas = document.createElement("li");
          const enlace = document.createElement("a");

          enlace.innerText = element;
          enlace.href = element;

          peliculas.appendChild(enlace);
          listaPeliculas.appendChild(peliculas);

          enlace.addEventListener("click", async (e) => {
            e.preventDefault();
            infoPeli.innerHTML = "";
            try {
              const response = await fetch(element);
              const data = await response.json();

              const tituloPeli = document.createElement("h1");
              const fechaSalida = document.createElement("h2");
              const autor = document.createElement("h2");
              const tituloTotalPersonas = document.createElement("h3");
              const textoTotal = document.createElement("p");
              const tituloUlrPersonajes = document.createElement("h4");
              const listaPersonajes = document.createElement("ul");

              // const nombreDirector = data.director.slice(6, 19);
              const nombreDirector = JSON.parse(data.director)[0]
              const cantidadPersonajes = data.characters.length;

              tituloPeli.innerText = data.title;
              fechaSalida.innerHTML = `Fecha: ${data.release_date}`;
              autor.innerHTML = `Autor: ${nombreDirector}`;
              tituloTotalPersonas.innerText = "Número total de personajes:";

              if (cantidadPersonajes > 5) {
                textoTotal.innerHTML = `Hay más de 5 personajes`;
              } else {
                textoTotal.innerHTML = `Hay menos de 5 personajes`;
              }

              textoTotal.title = `Hay ${cantidadPersonajes} personajes`;

              tituloUlrPersonajes.innerText = "Url personajes:";

              data.characters.forEach((element) => {
                const personajes = document.createElement("li");
                const enlacePersonaje = document.createElement("a");
                enlacePersonaje.innerText = element;

                if (cantidadPersonajes > 9) {
                  enlacePersonaje.style.backgroundColor = "#be1283";
                } else {
                  enlacePersonaje.style.backgroundColor = "#ea82b6";
                }

                personajes.appendChild(enlacePersonaje);
                listaPersonajes.appendChild(personajes);
              });

              infoPeli.appendChild(tituloPeli);
              infoPeli.appendChild(fechaSalida);
              infoPeli.appendChild(autor);
              infoPeli.appendChild(tituloTotalPersonas);
              infoPeli.appendChild(textoTotal);
              infoPeli.appendChild(tituloUlrPersonajes);
              infoPeli.appendChild(listaPersonajes);
            } catch (error) {
              console.error(error);
            }
          });
        });

        info.appendChild(nombre);
        info.appendChild(altura);
        info.appendChild(colorPelo);
        info.appendChild(colorOjos);

        info.appendChild(tituloArmas);
        info.appendChild(listaArmas);
        info.appendChild(tituloPeliculas);
        info.appendChild(listaPeliculas);
      }else {
        console.log("Error")
        const messageError = xhr.statusText || "Ocurrio un Error en el servidor"
        xhr.innerHTML = `Error ${xhr.status}: ${messageError}`
      }
    });
  };

  document.getElementById("personaje").addEventListener("click", () => {
    info.innerHTML = "";
    fetchData();
  });
});
