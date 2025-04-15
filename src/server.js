const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
session.logged = false;

const indexRoute = require('../public/routes/indexRoutes');
const compassRoute = require('../public/routes/compassRoutes');
const aboutMeRoute = require('../public/routes/aboutMeRoutes');

app.use('/', indexRoute);
app.use('/', compassRoute);
app.use('/about-me', aboutMeRoute);

app.listen(8080, () => {
    console.log('Server listening on port http://localhost:8080/');    
});