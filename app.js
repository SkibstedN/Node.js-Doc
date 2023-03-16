import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/login/login.html"));
});

app.get("/frontpage", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/nodeinfo", (req, res) => {
    res.sendFile(path.resolve("public/pages/nodeinfo/nodeinfo.html"));
});

app.get("/jstopics", (req, res) => {
    res.sendFile(path.resolve("public/pages/jstopics/jstopics.html"));
});

app.get("/npm", (req, res) => {
    res.sendFile(path.resolve("public/pages/npm/npm.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.resolve("public/pages/about/about.html"));
});

app.get("/apitext", (req, res) => {
    res.sendFile(path.resolve("public/pages/apitext/apitext.html"))
})

app.get("/express", (req, res) => {
    res.sendFile(path.resolve("public/pages/express/express.html"));
});

app.get("/git", (req, res) => {
    res.sendFile(path.resolve("public/pages/git/git.html"));
});

app.get("/nodemon", (req, res) => {
    res.sendFile(path.resolve("public/pages/nodemon/nodemon.html"));
});



const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});