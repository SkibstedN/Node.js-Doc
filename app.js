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




const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});