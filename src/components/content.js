import { default as displayHome } from "./nav/home.js"
import { default as displayMenu } from "./nav/menu.js"
import { default as displayContact } from "./nav/contact.js"
export { display };

function display(index, content) {
    if (index === 0) displayHome(content);
    if (index === 1) displayMenu(content);
    if (index === 2) displayContact(content);
}
