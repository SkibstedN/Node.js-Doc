const footerCopyrightP = document.getElementById("copyright-year");
const year = new Date().getFullYear();

const anchor = document.createElement("a");
anchor.href = "https://github.com/SkibstedN";
anchor.innerText = "       Source Code";

const textNode = document.createTextNode(`© ${year}`);
footerCopyrightP.appendChild(textNode);
footerCopyrightP.appendChild(anchor);