import fs from "fs";

function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "NodeJs Docs");
                    
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `©  ${new Date().getFullYear()} Nikolaj Skibsted`);

    const anchor = '<a href="https://github.com/SkibstedN/Node.js-Doc" target="_blank">Source code</a>';
    const footerWithAnchor = footer.replace("$SOURCE_CODE_ANCHOR", anchor);

    return navbar + page + footerWithAnchor;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}


export default {
    renderPage,
    readPage
};