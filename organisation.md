/uea-labour-society
│
├── /controllers
│   ├── announcementController.js
│   ├── blogController.js
│   ├── imageGalleryController.js
│   ├── userController.js
│   └── ... (other controllers as needed)
│
├── /models
│   ├── announcement.js
│   ├── blog.js
│   ├── image.js
│   ├── user.js
│   └── ... (other models as needed)
│
├── /views
│   ├── /announcements
│   │   ├── create.pug
│   │   ├── manage.pug
│   │   ├── read.pug
│   │   └── ... (other views for announcements)
│   │
│   ├── /blogs
│   │   ├── create.pug
│   │   ├── manage.pug
│   │   ├── read.pug
│   │   └── ... (other views for blogs)
│   │
│   ├── /images
│   │   ├── upload.pug
│   │   ├── manage.pug
│   │   ├── gallery.pug
│   │   └── ... (other views for images)
│   │
│   ├── /users
│   │   ├── register.pug
│   │   ├── login.pug
│   │   └── ... (other views for users)
│   │
│   ├── /partials
│   │   ├── header.pug
│   │   ├── footer.pug
│   │   ├── navbar.pug
│   │   └── ... (other partials as needed)
│   │
│   └── index.pug (or home.pug)
│
├── /public
│   ├── /css
│   │   ├── styles.css
│   │   └── ... (other CSS files)
│   │
│   ├── /js
│   │   ├── scripts.js
│   │   └── ... (other JS files)
│   │
│   ├── /images
│   │   └── ... (static images)
│   │
|   |
|   ├── /views
|   |   ├── /images
|   |   ├── index.pug
|   |   └── ...
|   |
│   └── /uploads
│       └── ... (uploaded images)
│
├── /routes
│   ├── announcementRoutes.js
│   ├── blogRoutes.js
│   ├── imageGalleryRoutes.js
│   ├── userRoutes.js
│   └── ... (other route files as needed)
│
├── /middlewares
│   └── ... (middleware files)
│
├── server.js
├── README.md
└── package.json
