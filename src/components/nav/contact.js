export default function (content) {
    const title = document.createElement("h1");
    title.textContent = "CONTACT";
    title.id = "contact-title";
    content.appendChild(title);

    const infoID = ["contact-text","contact-phone", "contact-email"];
    const contactText = "Customer service is very important to us. If you have a question, we want to get it answered for you as fast as we possibly can. Reach out via phone, e-mail, or contact form and we'll get back to you someday"
    const infoStr = [contactText, "Phone: 555-555-5554", "Email: support@fakecoffee.com"];

    for (let i = 0; i < 3; i++) {
        const detail = document.createElement("div");
        detail.id = infoID[i];
        detail.textContent = infoStr[i];
        content.appendChild(detail);
    }
}
