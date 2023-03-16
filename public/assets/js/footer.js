const footerCopyrightP = document.getElementById("copyright-year");
const year = new Date().getFullYear();

const anchor = document.createElement("a");
anchor.href = "https://github.com/SkibstedN/Node.js-Doc";
anchor.innerText = "       Source Code";

const textNode = document.createTextNode(`© Nikolaj Skibsted ${year}`);
footerCopyrightP.appendChild(textNode);
footerCopyrightP.appendChild(anchor);