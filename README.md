## Project Time and Date

<img src="/calendar.png" width="100"  />

### The goal of this project is to practice working with JavaScript and the DOM

We will use HTML, CSS and JavaScript for our project.

**Basic functionality:** we want our programme to get the current date and current time, and show this in the browser. A very simple example is:  

<img src="/time_date.png" width="250" />

---

### For starters

1. Create a new folder on your local computer with the name: project-time-date
1. Track your code with Git by using git init in the terminal
1. Create an index.html file with the general template code
1. Create a style.css file and add this to your HTML file as `<link>` (check how to add CSS to an HTML file)
1. Make sure you have *Time and Date* as the title (this will show in the tab when your app runs in the browser)
1. Build the page according to the example: the page should show the date as day-month-year and the time as hour-minutes-seconds
1. The time has to run 'live' in your page: the seconds have to be updates in line with the actual time
1. If you want to challenge yourself, try to make the page more attractive 

---

### For more advanced students

1. Build this project as React app
1. Use create-react-app, create components and write the code for the functionality explained above
1. Challenge yourself: use different time zones and build the time and date functionality for each zone
1. Add images of the world map with each time zone
1. Make it into an attractive app

---

### For graduates

1. Add a timer function to the app: 
  * user can enter desired time in a field
  * user has to be able to set a time in minutes
  * user clicks a button and time starts to run (choose if you want it to decrease second by second from the set time to zero, or increase counting from zero up to the set time)
  * user can stop the timer
  * user can reset the timer
2. Challenge yourself and add a few nice details:
  * a sound that is played when the timer expires
  * start button that is disabled when the time starts running
  * reset should clear the values in the time field
  * count-down of the time is visible in the tab of the page

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). It is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`. 

To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.


---
