//================================================================
// server.js submits the user to the chatengine.io server
//
//================================================================
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

console.log("LET THE GAMES BEGIN");

// THE SIGN IN REQUEST GET SUBMITTED  WHEN SENT TO THE '/signup' ROUTE
app.post("/signup", async (req, res) => {
	//we strip the username, secret, email, first_name, last_name from the request body
	const { username, secret, email, first_name, last_name } = req.body;
	// try to store a user-copy on chatengine.io using axios
	try {
		const r = await axios.post(
			"https://api.chatengine.io/users/",
			{ username, secret, email, first_name, last_name },
			{ headers: { "Private-Key": process.env.PRIVATE_KEY } }
		);
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.response.status).json(e.response.data);
	}
});

// THE LOGIN REQUEST GET SUBMITTED  WHEN SENT TO THE '/login' ROUTE
app.post("/login", async (req, res) => {
	//we strip the username, secret from the request body
	const { username, secret } = req.body;
	// Fetch this user from Chat Engine in this project
	try {
		const r = await axios.get("https://api.chatengine.io/users/me/", {
			headers: {
				"Project-ID": process.env.PROJECT_ID,
				"User-Name": username,
				"User-Secret": secret,
			},
		});
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.response.status).json(e.response.data);
	}
});

// Listening on port 3001
app.listen(3001);
