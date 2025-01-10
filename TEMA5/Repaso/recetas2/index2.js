window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  const fetchData = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => data.meals)
      .then((comida) => {
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
            if (element[`strIngredient${i}`] && element[`strMeasure${i}`] !== null) {
              const ingredientes = document.createElement("li");
              ingredientes.innerHTML = `${element[`strIngredient${i}`]} - ${element[`strMeasure${i}`]}`;
              lista.appendChild(ingredientes);
            }
          }

          container.appendChild(titulo);
          container.appendChild(imagen);
          container.appendChild(lista);
          container.appendChild(enlace);
        });
      })
      .catch(error => console.log("Error al obtener la receta" + error))
  };

  document.getElementById("btn").addEventListener("click", () => {
    container.innerHTML = "";
    fetchData();
  });
});
