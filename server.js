const express = require('express');
const session = require('express-session');
const csp = require('express-csp-header');
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

const indexRoute = require('./public/routes/indexRoutes');
const compassRoute = require('./public/routes/compassRoutes');
const aboutMeRoute = require('./public/routes/aboutMeRoutes');

app.use('/', indexRoute);
app.use('/', compassRoute);
app.use('/about-me', aboutMeRoute);

const PORT = process.env.PORT || 8080;  // Default to 8080 locally, but use Heroku's $PORT in production
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use((req, res, next) => {
	res.setHeader(
	  'Content-Security-Policy',
	  "default-src 'none'; " +
	  // Allow scripts from cdnjs.cloudflare + dynamic loading
	  "script-src 'self' https://cdnjs.cloudflare.com 'unsafe-inline' 'unsafe-eval' 'strict-dynamic'; " +
	  // Allow Ant Design CSS
	  "style-src 'self' https://cdn.jsdelivr.net 'unsafe-inline'; " +
	  "img-src 'self' data:; " +
	  "connect-src 'self'; " +
	  "font-src 'self'; " +
	  "form-action 'self';"
	);
	next();
  });