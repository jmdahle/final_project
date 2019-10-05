# Keep It Together

## About
Thanks to social media, we all believe that everyone _else_ seems to have it all together, and the rest of us are left feeling like we're stuggling just to keep it together.  Keep It Together was designed to help you build good habits without stressing you out.  The web application helps you select attainable goals, keep track of your progress, add new ones and level up with each goal completion.  And our visualizer helps you spot trends ranging days and weeks so you will be well on your way to being an adult in no time.

See the deployed example [on Heroku](https://keepittogether.herokuapp.com/)
See the [Codesource at github](https://github.com/jmdahle/final_project)
Additional documentation can be found on the [project wiki]()

## Team
The Keep It Together team:
* Violet Chang
* John Dahle
* Sara McMullin
* Andrew Peterson

### Installation
The Keep It Together app relies on Node.js to provide the web server, React to provide the renderer (React-DOM and React-Router-DOM) and component architechture (React), and scripts to run, build, and test the React app.  See the Technical Notes section for information about the create-react-app package used to initialize this project. 

1. [Download](https://nodejs.org/en/download/) and install Node.js
2. Use the Node.js package manager - npm - to install the required Node.js packages.  Running ```npm install``` from the command line will install the following Node.js packages:
    * [react](https://www.npmjs.com/package/react)
    * [react-dom](https://www.npmjs.com/package/react-dom)
    * [react-router-dom] (https://www.npmjs.com/package/react-router-dom)
    * [react-scripts](https://www.npmjs.com/package/react-scripts)
3. Other supporting npm packages used (also installed using ```npm install``):
    * [express](https://www.npmjs.com/package/express) - server routing for APIs
    * [axios](https://www.npmjs.com/package/axios) - accessing API routes from the client
    * [mongoose](https://www.npmjs.com/package/mongoose) - provides server access to the database and structure for data models
    * [moment](https://www.npmjs.com/package/moment) - manage date objects
    * [nodemailer](https://www.npmjs.com/package/nodemailer) - support for email
4. In development we used MongoDB; Heroku deployment uses MLab support for Mongo.

### Deployment
The app is deployed using Heroku linked to the git repository and supported by MLabs addon for mongodb.  Heroko automatically re-builds the application when pull request is merged into the master repository.

### Technical Notes
1. To add categories, goals, and tasks to the database, use the ```/admin``` page.  It contains forms for this purpose.
2. Email configuration is located in the ```emailController.js``` file.
