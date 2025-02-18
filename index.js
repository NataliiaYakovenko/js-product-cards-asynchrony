"use strict";

const productCards = "https://fakestoreapi.com/products?limit=20";

fetch(productCards)
  .then((response) => response.json())
  .then((data) => generateProductCards(data))
  .catch((err) => console.log("error:", err));

function generateProductCards(data) {
  const container = document.getElementById("product-container");


  data.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("card");
    container.append(card);
    

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.classList.add("image-product");
    card.append(image);


    const info = document.createElement('div');
    info.classList.add('information');
    card.append(info);

    const h2 = document.createElement("h2");
    h2.textContent = product.title;
    h2.classList.add("title-product");
    info.append(h2);

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.classList.add("price-product");
    info.append(price);


    const rateBox = document.createElement("div");
    rateBox.classList.add("rate-box");
    info.append(rateBox);

    const rate = document.createElement("span");
    rate.textContent = `${product.rating.rate}`;
    rate.classList.add("rate-product");
    rateBox.append(rate);

    const rateIcon = document.createElement("span");
    rateIcon.textContent = "⭐";
    rateIcon.classList.add("rate-icon");
    rateBox.append(rateIcon);
  });
}
