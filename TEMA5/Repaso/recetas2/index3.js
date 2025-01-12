window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  const fetchData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
    xhr.send();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        const comida = data.meals;

        const titulo = document.createElement("h2");
        const imagen = document.createElement("img");
        const lista = document.createElement("ol");
        const enlace = document.createElement("a");

        comida.forEach((element) => {
          titulo.innerText = element.strMeal;
          imagen.src = element.strMealThumb;
          enlace.innerHTML = `ir a la receta de ${element.strMeal}`;
          enlace.href = element.strSource;
          enlace.target = "_blanck";

          for (let i = 1; i <= 20; i++) {
            if (
              element[`strIngredient${i}`] &&
              element[`strMeasure${i}`] !== null
            ) {
              const ingredientes = document.createElement("li");
              ingredientes.innerHTML = `${element[`strIngredient${i}`]} - ${
                element[`strMeasure${i}`]
              }`;
              lista.appendChild(ingredientes);
            }
          }

          container.appendChild(titulo);
          container.appendChild(imagen);
          container.appendChild(lista);
          container.appendChild(enlace);
        });
      }else {
        console.log(`Error al obtener la receta: ${xhr.status}`)
      }
    });
  };

  document.getElementById("btn").addEventListener("click", () => {
    container.innerHTML = "";
    fetchData();
  });
});
