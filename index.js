import express from "express";
import axios from "axios";

const app = express();
const port = 4000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
	let catInfo = await axios.get("https://api.thecatapi.com/v1/images/search");
	res.render("index.ejs", {
		catImageURL: catInfo.data[0].url,
	});
});
app.post("/submit", (req, res) => {
	res.redirect("/");
});

app.listen(port, (req, res) => console.log(`Listening on port ${port}`));
