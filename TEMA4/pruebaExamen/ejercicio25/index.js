window.addEventListener("DOMContentLoaded", () => {

  abrirVentana = () => {
    
    let input1 = parseInt(document.getElementById("segundos").value, 10);
    let resultado = document.getElementById("resultado");

    // Validamos que el input sea un número válido y positivo
    if (isNaN(input1) || input1 <= 0) {
      resultado.innerHTML = "Por favor, introduce un número válido de segundos.";
      return;
    }

    // Abrimos una nueva ventana emergente con las dimensiones especificadas
    const ventana1 = window.open("", "ventana1", "height=200,width=300");
    ventana1.document.body.innerHTML = `<p>La ventana se cerrará en <span id="cuenta"></span> segundos...</p>`;

    // Establecemos el contador de cuenta regresiva
    let tiempoRestante = input1;
    let cuenta = ventana1.document.getElementById("cuenta");
    cuenta.innerHTML = tiempoRestante;

    // Creamos un intervalo que actualiza la cuenta regresiva cada segundo
    let interval = setInterval(() => {
      tiempoRestante--;
      cuenta.innerHTML = tiempoRestante;

      // Si el tiempo se ha agotado, cerramos la ventana y mostramos el mensaje
      if (tiempoRestante <= 0) {
        clearInterval(interval);
        ventana1.close();
        resultado.innerHTML = `Ya han pasado ${input1} segundos y se ha cerrado la ventana emergente.`;
      }
    }, 1000);

  }
})