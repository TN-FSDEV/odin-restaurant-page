import { display } from "./content.js";

const menu_1 = document.querySelector("nav > button:nth-child(1)");
const menu_2 = document.querySelector("nav > button:nth-child(2)");
const menu_3 = document.querySelector("nav > button:nth-child(3)");
const content = document.querySelector("#content");

const nav = [menu_1, menu_2, menu_3];

nav.forEach((menu) => menu.addEventListener("click", (e) => {
    nav.forEach(btn => btn.classList.remove("highlight"));
    const menuNum = nav.findIndex((el) => el === e.target);
    content.innerHTML = "";
    e.target.setAttribute("class", "highlight");
    display(menuNum, content);
}))
