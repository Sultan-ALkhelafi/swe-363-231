const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




// Requiring module
const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();

function authentication(req, res, next) {
	const authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		let err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	const auth = new Buffer.from(authheader.split(' ')[1],
		'base64').toString().split(':');
	const user = auth[0];
	const pass = auth[1];

	if (user == 'admin' && pass == 'password') {

		// If Authorized user
		next();
	} else {
		let err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running ");
})


const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes'); // Import the router

app.use('/', router); // Use the router

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

// Middleware to process form
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  res.send('Form submission received!');
});

