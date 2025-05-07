import imgURL_1 from "./assets/Espresso.jpg";
import imgURL_2 from "./assets/Drip-Coffee.jpg";
import imgURL_3 from "./assets/CMCoffee.jpg";
import imgURL_4 from "./assets/Latte.jpg";
import imgURL_5 from "./assets/Egg-Coffee.jpg";
import imgURL_6 from "./assets/Coconut-Coffee.jpg";


class Drink{
    constructor(name, description, imageURL, price) {
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.price = price;
    }
}

const choice_1_desc = "A strong, concentrated coffee made by forcing hot water through finely-ground coffee beans; the foundation of many coffee drinks.";
const choice_2_desc = "Traditional Vietnamese coffee brewed slowly using a metal drip filter (phin), often served over ice.";
const choice_3_desc = "A rich and sweet coffee beverage where strong brewed coffee is mixed with thick, sweetened condensed milk.";
const choice_4_desc = "A smooth espresso-based drink made with steamed milk and a small layer of milk foam, popular for its creamy texture.";
const choice_5_desc = "A Vietnamese specialty made by whipping egg yolks with sugar and pouring it over strong coffee, creating a rich, custardy foam.";
const choice_6_desc = "A tropical-style coffee drink that blends robust coffee with creamy coconut milk or coconut cream, often served iced.";

const choice_1 = new Drink("Espresso", choice_1_desc, imgURL_1, "$4");
const choice_2 = new Drink("Vietnamese Drip Coffee", choice_2_desc, imgURL_2, "$5");
const choice_3 = new Drink("Coffee with Condensed Milk", choice_3_desc, imgURL_3, "$6");
const choice_4 = new Drink("Latte", choice_4_desc, imgURL_4, "$4");
const choice_5 = new Drink("Egg Coffee", choice_5_desc, imgURL_5, "$6");
const choice_6 = new Drink("Coconut Coffee", choice_6_desc, imgURL_6, "$5");

export default [choice_1, choice_2, choice_3, choice_4, choice_5, choice_6];