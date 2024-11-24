window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("abrirVentana").addEventListener("click", () => {
    let resultado = document.getElementById("resultado").innerHTML
    let ventana1 = window.open("", "ventana 1", "width=600, height=400");
    let contador = 10

    let timer = setInterval(() => {
      contador--;
      document.getElementById("resultado").innerHTML = contador;

      if (contador === 0) {
        clearInterval(timer);
        ventana1.close();
      }

    }, 1000);
  });

  document.getElementById("ull").addEventListener("mouseover", (e) => {
    e.target.body.color = "red";

    // cambiar de color el texto de los li
  })
  let lis = document.querySelectorAll("li");

  lis.forEach((li) => {
    li.style.color = "red";
  });


  document.getElementById("abrirVentana").addEventListener("mouseover", (e) => {
    e.target.style.color = "blue";

    if (e.target.style.color === "blue") {
      e.target.style.color = "red";
    }
  }
  );
});
