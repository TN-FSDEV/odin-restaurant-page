import "./page-load.js"
import { display as initialize } from "components/content.js"

const content = document.querySelector("#content");

document.querySelector("nav>button:nth-child(1)").setAttribute("class", "highlight");
initialize(0, content);