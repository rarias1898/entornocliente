window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      const comidas = data.meals;

      const titulo = document.createElement("h2");
      const imagen = document.createElement("img");
      const lista = document.createElement("ol");
      const enlace = document.createElement("a");

      comidas.forEach((element) => {
        titulo.innerText = element.strMeal;
        imagen.src = element.strMealThumb;
        enlace.innerHTML = `ir a la receta de ${element.strMeal}`
        enlace.href = element.strSource
        enlace.target = "_blanck"

        for (let i = 1; i <= 20; i++) {
          if (element[`strIngredient${i}`]) {
            const ingredientes = document.createElement("li");
            ingredientes.innerText = element[`strIngredient${i}`];
            lista.appendChild(ingredientes);
          }
        }

        container.appendChild(titulo);
        container.appendChild(imagen);
        container.appendChild(lista);
        container.appendChild(enlace)
      });
    } catch (error) {
      console.log("Error al obtener la receta" + error);
    }
  };

  document.getElementById("btn").addEventListener("click", () => {
    container.innerHTML = "";
    fetchData();
  });
});
