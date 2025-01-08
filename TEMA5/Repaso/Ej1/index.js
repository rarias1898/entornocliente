window.addEventListener("DOMContentLoaded", () => {

  const result = document.getElementById("result")

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      const comida = data.meals;

      comida.forEach((element) => {

        const titulo = document.createElement("h2")
        const img = document.createElement("img")
        const ul = document.createElement("ol")
        const enlace = document.createElement("a")
        
        for (let i = 1; i <= 20; i++) {
          if (element[`strIngredient${i}`]) {
            const li = document.createElement("li")
            li.innerText = `${element[`strIngredient${i}`]} - ${element[`strMeasure${i}`]}`
            ul.appendChild(li)
          }
        }

        titulo.innerText = element.strMeal
        img.src = element.strMealThumb
        enlace.innerText = element.strMeal
        enlace.href = element.strSource
        enlace.target = "_blanck"
        
        result.appendChild(titulo)
        result.appendChild(img)
        result.appendChild(ul)
        result.appendChild(enlace)
      });


      // console.log(comida);
    } catch (error) {
      console.log("Error al obtener la receta.")
    }
  };

  document.getElementById("btn").addEventListener("click", () => {
    result.innerHTML = ""
    fetchData();
  })

});
