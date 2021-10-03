![](https://sa-2019.s3.amazonaws.com/media/images/Go_Space.2e16d0ba.fill-591x300.jpg)

Go Space Project - Nasa Space Apps Challenge
=======================

**Live Demo**: https://gospace.club/

Heroku link: https://mighty-woodland-52835.herokuapp.com/

Through a platform of knowledge, we develop and designed project for the young generation using science data provide by NASA. We create the correlations between the different areas Nasa's science and the public. This platform has an interface that fits the target audience with interactivity, and it's connected with the NASA directory database.

The benefit of this project is that it brings knowledge to various communities and shares the content in a soft way around the world, powered by NASA social media and reaching the public by their age range.

-------------
## [Nasa Space App Challenge Details](https://2021.spaceappschallenge.org/challenges/statements/discovering-science-connections/details])
-------------

## Layout
<h4 align="center">Home Page</h4>

![](https://raw.githubusercontent.com/jhonatantft/nasa-gospace-apps/main/layout/home.jpg)

<h4 align="center">Challenge Page</h4>

![](https://raw.githubusercontent.com/jhonatantft/nasa-gospace-apps/main/layout/challenge.jpg)

Wireframes
-------------

- [Click Here](https://github.com/jhonatantft/nasa-gospace-apps/tree/main/wireframes)


Prerequisites
-------------

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js 10+](http://nodejs.org)
- Command Line Tools

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/jhonatantft/nasa-gospace-apps.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node app.js
```


Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| .dockerignore                      | Folder and files ignored by docker usage.                    |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| .eslintrc                          | Rules for eslint linter.                                     |
| .gitignore                         | Folder and files ignored by git.                             |
| .travis.yml                        | Configuration files for continuous integration.              |
| app.js                             | The main application file.                                   |
| docker-compose.yml                 | Docker compose configuration file.                           |
| Dockerfile                         | Docker configuration file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.
Just don't forget to update `extends ../layout`  and corresponding
`res.render()` paths in controllers.

Docker
----------

You will need docker and docker-compose installed to build the application.

- [Docker installation](https://docs.docker.com/engine/installation/)

- [Common problems setting up docker](https://docs.docker.com/toolbox/faqs/troubleshoot/)

After installing docker, start the application with the following commands :

```
# To build the project for the first time or when you add dependencies
docker-compose build web

# To start the application (or to restart after making changes to the source code)
docker-compose up web

```

To view the app, find your docker IP address + port 8080 ( this will typically be http://localhost:8080/ ).  To use a port other than 8080, you would need to modify the port in app.js, Dockerfile, and docker-compose.yml.

