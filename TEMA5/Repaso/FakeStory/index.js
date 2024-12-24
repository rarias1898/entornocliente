window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();

    createElements(data);

    return data;
  };

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const singleData = await response.json();

    const returnButton = document.createElement("button")
    returnButton.innerText = "Atras"
    
    returnButton.addEventListener("click", (e) => {
      fetchData()
      returnButton.style.display = false
    })

    container.appendChild(returnButton)

    return singleData;
  };

  const createOneElement = (data) => {
    container.innerHTML = "";
    const card = document.createElement("div");
    const title = document.createElement("h1");
    const image = document.createElement("img");
    const price = document.createElement("h2");

    title.innerText = data.title;
    image.src = data.image;
    price.innerHTML = `${data.price}€`;

    card.className = "card";

    card.append(title, image, price);
    container.appendChild(card);
  };

  const createElements = (data) => {
    data.forEach((each) => {
      const card = document.createElement("div");
      const title = document.createElement("h1");
      const image = document.createElement("img");
      const price = document.createElement("h2");

      const button = document.createElement("button");

      title.innerText = each.title;
      image.src = each.image;
      price.innerHTML = `${each.price}€`;

      button.innerText = "Ver producto";

      card.className = "card";

      card.append(title, image, price, button);
      container.appendChild(card);

      button.addEventListener("click", () => {
        fetchSingleProduct(each.id);
        createOneElement(each);
      });
    });
  };

  fetchData();
});
