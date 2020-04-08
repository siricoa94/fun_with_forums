# fun_with_forums
This application is designed for a user to log in and create a post for users to see, edit, and delete. Users are allowed to create a post which displays their name, post title, and content of post. Users credentials are saved to Firebase console as well as MySql forums table. When a user creates a post, it joins the username from the forums table with the post title and post content in the card container. Users can then Update their posts by hitting the edit button, or simply delete their post by hitting the delete button.

# Getting Started
To get started with this application first run "npm i" and then "npm init".

The dependencies you will want to add next will be

-express
-firebase
-mysql

to install these packages, simply type the following:

npm i express
npm i --save firebase
npm i mysql

Once the app is installed, simply run "npm start" to run the app or you can also type "node server.js". If an error occours you may have to "npm i" again.

# Deployment
To deploy this application to Heroku, simply go to the Heroku website. Under the New tab should be an option for create new app. This is what you want to select. Once you create an app you can navigate to the deployment options. You can select the GitHub method to deploy and it will allow you to select a project repo from github to deploy to Heroku.

# Possible issues to fix
There are some issues with this program that will need fixes in future updates

First: eventually, I would like users to not see the "edit" and "delete" button options for other users.

Second: Users can be added to the forum table without being added to firebase if a user enters in invalid credentials for firebase.
