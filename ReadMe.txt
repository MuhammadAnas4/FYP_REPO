Title: RentBucket
Group Members: Muhammad Anas (1812120) Hafiz Syed Umer Ali (1812112)

To Start The BackEnd Application:

*) Download the application folder.
*) Run command "npm install" in root folder of the application.
*) Run command "nodemon start" in root folder of the application.

To Deploye Backend:

*) After you commit your changes to git, you can deploy your app to Heroku.
*) git add .
*) git commit -m "Any Commit"
*) heroku login then (Enter your Heroku credentials.)
*) heroku create
*) git push heroku main
*) To open the app in your browser, type "heroku open".

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

To Start The Mobile App:

*) Download the application folder.
*) Run command "npm install" in root folder of the application.
*) Run command "npm start" in root folder of the application.

To Make APK Of Mobile App:

*) First, open up your project or application on android studio that you want to import into an APK file.
*) Open the Build menu from the toolbar and select Generate Signed Bundle/APK.
*) This opens up a screen where you have to select between creating an Android App Bundle and creating an APK file. 
   Check the APK radio button and proceed to the next window.
*) You’ll be asked about your Key store path, Key store password, Key alias, and the Key password.
	*) Key Store Path: Project Android Folder.
	*) Key Store Password: android
	*) Key Alias: Empty
	*) Key Password: android
*) Select OK. You will then be directed back to the Generate Signed Bundle or APK screen.
*) Select Release and click on Finish.
*) You'll find the apk here (.../YourProject/app/build/outputs/apk/app-debug.apk)


