const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5");
xhr.send();

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) return;

  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("exito");

    let json = JSON.parse(xhr.responseText);
    console.log(json);

    let usuario = document.getElementById("usuario");

    let nombre = document.createElement("h1");
    let user = document.createElement("p");
    let email = document.createElement("p");
    let direccion = document.createElement("p");

    nombre.innerText = `Nombre: ${json.name}`;
    user.innerText = `Usuario: ${json.username}`;
    email.innerText = `Email: ${json.email}`;
    direccion.innerText = `Direccion: ${json.address.street}, ${json.address.suite}. ${json.address.zipcode}, ${json.address.city}`;

    usuario.appendChild(nombre);
    usuario.appendChild(user);
    usuario.appendChild(email);
    usuario.appendChild(direccion)
  }
});
