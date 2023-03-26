import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

import templateEngine from "./util/templateEngine.js";



const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Frontpage"
});

const nodeinfo = templateEngine.readPage("./public/pages/nodeinfo/nodeinfo.html");
const nodeinfoPage = templateEngine.renderPage(nodeinfo, {
    tabTitle: "Nodeinfo"
});

const jstopics = templateEngine.readPage("./public/pages/jstopics/jstopics.html");
const jstopicsPage = templateEngine.renderPage(jstopics, {
    tabTitle: "Jstopics"
});

const npm = templateEngine.readPage("./public/pages/npm/npm.html");
const npmPage = templateEngine.renderPage(npm, {
    tabTitle: "NPM"
});

const about = templateEngine.readPage("./public/pages/about/about.html");
const aboutPage = templateEngine.renderPage(about, {
    tabTitle:  "About"
});

const apitext = templateEngine.readPage("./public/pages/apitext/apitext.html");
const apiptextPage = templateEngine.renderPage(apitext, {
    tabTitle: "API info"
});

const expresspage = templateEngine.readPage("./public/pages/express/express.html");
const expresspagePage = templateEngine.renderPage(expresspage, {
    tabTitle: "Express"
});

const git = templateEngine.readPage("./public/pages/git/git.html");
const gitPage = templateEngine.renderPage(git, {
    tabTitle: "Git"
});

const nodemon = templateEngine.readPage("./public/pages/nodemon/nodemon.html");
const nodemonPage = templateEngine.renderPage(nodemon, {
    tabTitle: "Nodemon"
});

const SSR = templateEngine.readPage("./public/pages/SSR/SSR.html");
const SSRPage = templateEngine.renderPage(SSR, {
    tabTitle: "SSR"
});

const modules = templateEngine.readPage("./public/pages/modules/modules.html");
const modulesPage = templateEngine.renderPage(modules, {
    tabTitle: "Modules"
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/login/login.html"));
});

app.get("/frontpage", (req, res) => {
    res.send(frontpagePage);
});

app.get("/nodeinfo", (req, res) => {
    res.send(nodeinfoPage);
});

app.get("/jstopics", (req, res) => {
    res.send(jstopicsPage);
});

app.get("/npm", (req, res) => {
    res.send(npmPage);
});

app.get("/about", (req, res) => {
    res.send(aboutPage);
});

app.get("/apitext", (req, res) => {
    res.send(apiptextPage);
});

app.get("/express", (req, res) => {
    res.send(expresspagePage);
});

app.get("/git", (req, res) => {
    res.send(gitPage);
});

app.get("/nodemon", (req, res) => {
    res.send(nodemonPage);
});

app.get("/SSR", (req, res) => {
    res.send(SSRPage);
});

app.get("/modules", (req, res) => {
    res.send(modulesPage);
});



const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});