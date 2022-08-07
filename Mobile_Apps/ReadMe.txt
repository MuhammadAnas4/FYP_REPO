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
