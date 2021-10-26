1.. ran npm init -y to create the npm
2.. Loaded express using npm i express
3.. Loaded hbs (handlbar) with npm i hbs
4.. Loaded request using npm i request

To run the app use nodemon src/app.js -e js,hbs

5.. Make sure to install latest git on machine, go to git-scm.com
6.. Go to web-server folder and do git init
7.. Then do git add .
8.. Then git commit -m "Initial Commit"

9.. To create this in GitHub, go to the github website and create a repository
10.. Run the commands to upload an existing repository

git remote add origin https://github.com/robertmoss25/node3-weather-website.git
git branch -M main
git push -u origin main

To create a SSH key

1.. Run the command ssh-keygen -t rsa -b 4096 -C "robertmoss25@hotmail.com"
2.. Hit enter to all the questions
3.. Check ls -a -l ~/.ssh
 You should now see a id_rsa and id_rsa.pub file

4.. run the command eval $(ssh-agent -s) to make sure it works
5.. run the command ssh_add ~/.ssh/is_rsa to add the SSH key
6.. run the command cat ~/.ssh/id_rsa.pub to generate the key, and then go to Github and add the SSH key there
7.. Run the command ssh -T git@github.com to verify it all works

For heroku

1.. To create the app run heroku create steelcity-weather-application
2.. Use the generated url to look at the app


https://steelcity-weather-application.herokuapp.com/ 

To make changes to the app
1.. Once changes are made use git status to see them
2.. Then use git add . to add them
3.. Then use git push to push them to github
4.. Then use git push heroku main to push to heroku, wait 30 seconds and refresh the webpage