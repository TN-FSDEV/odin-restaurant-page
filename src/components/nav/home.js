export default function (content) {
    const mainTitle = document.createElement("h1");
    const sideTitle = document.createElement("h2");
    const mainBody = document.createElement("div");
    const button = document.createElement("button");

    mainTitle.id = "home-title";
    sideTitle.id = "home-side-title";
    mainBody.id = "home-body";

    content.appendChild(mainTitle);
    content.appendChild(sideTitle);
    content.appendChild(mainBody);
    content.appendChild(button);

    mainTitle.textContent = "DELICIOUS";
    sideTitle.textContent = "DRINK MENU";
    mainBody.textContent = "Savor rich, handcrafted coffee blends and comforting bites in a warm, welcoming space.";
    button.textContent="Order Now";
}
