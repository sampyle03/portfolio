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

app.use(csp.csp({
	policies: {
	  'default-src': [csp.constants.NONE],
	  'script-src': [
		csp.constants.SELF,
		'https://cdnjs.cloudflare.com',
		csp.constants.INLINE,
		'unsafe-eval'
	  ],
	  'style-src': [csp.constants.SELF, 'https://cdn.jsdelivr.net'],
	  'img-src': [csp.constants.SELF, 'data:']
	}
  }));