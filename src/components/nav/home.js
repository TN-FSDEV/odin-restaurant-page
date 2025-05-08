export default function (content) {
    const home = document.createElement("div");
    const mainTitle = document.createElement("h1");
    const sideTitle = document.createElement("h2");
    const mainBody = document.createElement("div");
    const button = document.createElement("button");

    home.id = "home-container";
    mainTitle.id = "home-title";
    sideTitle.id = "home-side-title";
    mainBody.id = "home-body";
    button.id = "home-button";

    content.appendChild(home);
    home.append(mainTitle, sideTitle, mainBody, button);
    mainTitle.textContent = "DELICIOUS";
    sideTitle.textContent = "DRINK MENU";
    mainBody.textContent = "Savor rich, handcrafted coffee blends and comforting bites in a warm, welcoming space.";
    button.textContent="Get Your Coffee";
}
