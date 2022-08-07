To Start The FrontEnd Application:

*) Download the application folder.
*) Run command "npm install" in root folder of the application.
*) Run command "npm start" in root folder of the application.

To Deploye FrontEnd:

*) Open Heroku Dashbaord.
*) Click on "Create New App".
*) Type "Name Of Application" and click on Create App.
*) Then use the "heroku login" command to log into the Heroku dashboard.
*) Add command "git init"
*) Add command "heroku git:remote -a <app-name>"
*) Add command "heroku buildpacks:set mars/create-react-app". We first need to add the React buildpack through this command.
*) Add command git commit -am "my commit"
*) Add command "git push heroku main"
*) Add command "heroku open"

