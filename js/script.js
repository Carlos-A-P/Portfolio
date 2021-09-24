const projects = [
    {
        "title": "Coffee Roasters - Subscription",
        "image": "url(img/coffeeroasters-subscription.jpg)",
        "description": "This is a 3-page coffee subscription website. Users should be able to: View the optimal layout for each page depending on their device's screen size, See hover states for all interactive elements throughout the site, Make selections to create a coffee subscription and see an order summary modal of their choices.",
        "live": "https://cpwd-coffeeroasters.netlify.app/",
        "code": "https://github.com/Carlos-A-P/coffeeroasters-subscription-site",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This was a tough challenge that tested a lot of my javascript skills and organizational skills. It was a lot more than I expected but overall a very educational experience. I learned that there are many ways to do things, but some may be much easier and efficient than others. For example, my accordion was comprised of many buttons, but I first started by using div elements along with click event listeners. I later discovered that it was very tedious to make it accessible and decided to go with buttons instead, which comprised its own challenges with inner tags. Overall, I wanted to make an app that was mainly functional and accessible, so I didn't focus too much on transitions. I enjoyed this project, and I certainly learned a lot from it."
    },
    {
        "title": "Github User Search App",
        "image": "url(img/github-user-search-app.jpg)",
        "description": "This app allows users to search for a username from github. The app displays the user's username,. date joined, bio, links added, number of followers, number of repos, and number of following",
        "live": "https://cpwd-github-user-search-app.netlify.app/",
        "code": "https://github.com/Carlos-A-P/github-user-search-app",
        "made_with": "['HTML', 'CSS', 'JavaScript', 'API']",
        "preview": "",
        "longer_description": "This is my first API project where I made an app able to gather information from github to display user profile information. I also learned how to use Figma design files in order to provide the most accurate measurements possible."
    },
    {
        "title": "To-Do App",
        "image": "url(img/todo-app.jpg)",
        "description": "This is a todo list challenge from frontend mentor. Important things I learned from this project are theme changer mechanics, localStorage, and JSON",
        "live": "https://cpwd-todo-list.netlify.app/",
        "code": "https://github.com/Carlos-A-P/ToDo-List",
        "made_with": "['HTML', 'CSS', 'JavaScript', 'LocalStorage']",
        "preview": "",
        "longer_description": "This challenge proved to be difficult. I learned a lot about for loops and foreach methods. I tried to connect this to a backend server such as Azure db but I found it rather difficult and resulted to using local storage which also got the results that I wanted. I thought it was a lot easier to use for loops for this but quickly learned that in order to use them I have to keep changing the original array. As for saving the user's list, I saved the inner html of the todo wrapper and store it in a local storage every time it gets updated but some of the event handlers. Something that I'd like to improve on it learning how to implement a functional drag and drop without having to use an open source code."
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
    {
        "title": "",
        "image": "",
        "description": "",
        "live": "",
        "code": "",
        "made_with": "",
        "preview": "",
        "longer_description": ""
    },
]

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})