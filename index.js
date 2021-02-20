import express from "express"; // import exress

const app = express(); // initialize app to express object
const PORT = 3000; // set port to 3000

// send get req to check port
app.get("/", (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

// set express to listen on port 3000
app.listen(PORT, () => {
	console.log(`Your server is running on port ${PORT}`);
});
