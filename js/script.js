const projects = `[
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
        "title": "Tip Calculator",
        "image": "url(img/tip-calculator.jpg)",
        "description": "This is a tip calculator app from frontend mentor. This project was completed with the help of HTML, CSS, and JavaScript",
        "live": "https://carlospwd-tip-calculator.netlify.app/",
        "code": "https://github.com/Carlos-A-P/tip-calculator-app",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This was an extremely fun challenge where I got to practice more javascript functions and understand how to efficiently implement it in my projects. I also used the data attribute to link my grid buttons to my script.js file. I generally reserve the class attribute for my css and my id attributes for JavaScript, however, in this case I had multiple buttons so I used the data attribute. As far as what I learned in CSS, I learned how to used the focus pseudo-class to let the user see the tip percentage they are using."
    },
    {
        "title": "Room Homepage",
        "image": "url(img/room-homepage.jpg)",
        "description": "A Frontend mentor project completed with HTML, CSS, and JavaScript. This project contains an interactive nav bar with a slideshow",
        "live": "https://cpwd-room-homepage.netlify.app/",
        "code": "https://github.com/Carlos-A-P/room-homepage",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This challenge really tested my grid-layout skills and I tried to use the least amount of code possible. This is also the first project where I added animations and transitions which was really fun to play around with. Lastly, I was able to add smooth transitions between slides and header images smoothly in multiple screens."
    },
    {
        "title": "Launch Countdown Timer",
        "image": "url(img/launch-countdown-timer.jpg)",
        "description": "This is a countdown timer challenge that I completed using HTML, CSS, and JavaScript. I used most of the javascript and css for the timer from this code: https://codepen.io/shshaw/pen/vKzoLL So I mainly focused on styling the countdown timer as if I were in a situation where I would really have an html and had to prioritize my CSS over the timer…",
        "live": "https://cpwd-count-down-timer.netlify.app/",
        "code": "https://github.com/Carlos-A-P/launch-countdown-timer",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "In this challenge I used the a javascript code from Website CodePen Home Flip Clock & Countdown which is a clock made without a HTML so I mainly focused on prioritizing my CSS and changing styles using Devtools. I also added a few changes to the javascript to remove the second timer."
    },
    {
        "title": "Time Tracking DashBoard",
        "image": "url(img/time-tracking-dashboard.jpg)",
        "description": "This is a Front End mentor project. User can toggle between viewing Daily, Weekly, and Monthly stats",
        "live": "https://cpwd-time-tracking-dashboard.netlify.app/",
        "code": "https://github.com/Carlos-A-P/time-tracking-dashboard",
        "made_with": "['HTML', 'CSS', 'JavaScript', 'JSON']",
        "preview": "",
        "longer_description": "In this challenge I learned how to utilize a JSON file into my JavaScript. At first I thought that I would have to somehow link the data.json file to my javascript and somehow import the content. What I found to be most helpful was to change the file into a script.js file or simply copy and paste the object into quotation marks. I then set the object to a variable in order to use it in my function."
    },
    {
        "title": "Testimonial Grid Section",
        "image": "url(img/testimonial-grid-section.JPG)",
        "description": "A Frontend Mentor project. This is a project where I used grid to position each card component in their own position with different heights",
        "live": "https://cpwd-testimonial-grid-section.netlify.app/",
        "code": "https://github.com/Carlos-A-P/testimonial-grid-section",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This challenge tested my position skills. It helps me improve on grid layout."
    },
    {
        "title": "Interactive Pricing Component",
        "image": "url(img/interactive-pricing-component.jpg)",
        "description": "A Frontend Mentor project, this is a project where users are able to slide a bar and change the prices depending on the position of the slider. I used Javascript, CSS, and HTML to complete this project",
        "live": "https://app.netlify.com/sites/cpwd-interactive-pricing-component/settings/general",
        "code": "https://github.com/Carlos-A-P/interactive-pricing-component-main",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This challenged taught me some new ways to use the ::before and ::after pseudo classes and how to implement the equivalent of media queries in javascript."
    },
    {
        "title": "Fylo Data Storage Component",
        "image": "url(img/fylo-data-storage-component.jpg)",
        "description": "A Frontend Mentor project. I storage component that shows the amount of space left.",
        "live": "https://cpwd-fylo-storage-component.netlify.app/",
        "code": "https://github.com/Carlos-A-P/fylo-data-storage-component",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This is project is a challenge to test my css skills. What I found most helpful was the clip-path style property and position property.  I used HTML and CSS to complete the project"
    },
    {
        "title": "Fylo Dark Theme Landing Page",
        "image": "url(img/fylo-dark-theme-landing-page.jpg)",
        "description": "A challenge from front end mentor. This is a landing page made with CSS, HTML, and a bit of JavaScript. This is a main landing page for Fylo company",
        "live": "https://cpwd-fylo-dark-theme-landing-page.netlify.app/#",
        "code": "https://github.com/Carlos-A-P/fylo-dark-theme-landing-page",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This challenge tested my position skills. It helped me improve my flex-box, grid and absolute positioning skills for my elements and background element. It was one of the biggest projects I've made so I had to make sure I maintained clean and organized code."
    },
    {
        "title": "Pricing component with toggle",
        "image": "url(img/pricing-component-with-toggle.JPG)",
        "description": "This project is a pricing component where the use is able to see display cards and toggle between prices using a slider. I used JavaScript to incorporate a slider between two options and display them within my HTML",
        "live": "https://cpwd-pricing-component-with-toggle.netlify.app/",
        "code": "https://github.com/Carlos-A-P/Pricing-component-with-toggle",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This challenged helped me get familiar with event listeners and it helped test my css skills to make a slider."
    },
    {
        "title": "Sunnyside Agency Landing Page",
        "image": "url(img/sunnyside-agency-landing-page.JPG)",
        "description": "This is a challenge from frontend mentor. I used HTML, CSS, and JavaScript to complete this project and learned how to make a mobile dropdown nav bar using JavaScript",
        "live": "https://carlospwd-sunnyside-agency-landing-page-main.netlify.app/",
        "code": "https://github.com/Carlos-A-P/sunnyside-agency-landing-page-main",
        "made_with": "['HTML', 'CSS', 'JavaScript']",
        "preview": "",
        "longer_description": "This was a difficult challenge that really tested my CSS skills. I found it difficult to provide a flexible layout for all screen sizes so I limited the display to 375px mobile view and 1440px desktop view. However, I was more than happy to achieve a result that looked very similar to the end goal. In this challenge I learned about the filter property to change the color of my svg icons. I also learned how to implement a drop down navigation menu for mobile users."
    }
]`

// {
//     "title": "",
//     "image": "",
//     "description": "",
//     "live": "",
//     "code": "",
//     "made_with": "",
//     "preview": "",
//     "longer_description": ""
// }

console.log(JSON.parse(projects).title)

// ============modal for card description
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

