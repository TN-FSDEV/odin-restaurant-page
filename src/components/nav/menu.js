import { default as listOfDrinks } from "./submenu.js"
export default function (content) {
    const menuTitle = document.createElement("div");
    menuTitle.id = "menu-title";
    menuTitle.textContent = "MENU";
    const container = document.createElement("div");
    container.id = "menu";
    content.append(menuTitle, container);

    for (let i = 0; i < 6; i++){
        const choice = document.createElement("div");
        choice.setAttribute("class", "drink");
        choice.id = "choice-" + `${i+1}`;


        const name = document.createElement("h3");
        name.setAttribute("class", "name");
        name.textContent = listOfDrinks[i].name;
        const desc = document.createElement("p");
        desc.setAttribute("class", "description");
        desc.textContent = listOfDrinks[i].description;
        const img = document.createElement("img");
        img.setAttribute("class", "image");
        img.src = listOfDrinks[i].imageURL;
        img.alt = listOfDrinks[i].name;
        const price = document.createElement("div");
        price.setAttribute("class", "price");
        price.textContent = listOfDrinks[i].price;

        choice.append(name, desc, img, price);
        container.appendChild(choice);
    }

}
