const express = require("express")
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})



const PORT = 8080;
app.listen(8080, () => {
console.log("Running on port 8080.")
});