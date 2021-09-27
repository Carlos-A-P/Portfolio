# My Portfolio

- Live website -(https://carlospwd.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Play preview video for each of the project card
- See modal displaying information on project card selected
- Submit email form and send email out to the developer of the webs

### Expected bahaviour

- When

- If "Capsule" is selected for the first option
  - The "Want us to grind them?" section should be disabled and not able to be opened
- Order summary texts updates

  - If "Capsule" is selected, update the order summary text to:
    - "I drink my coffee **using** Capsules"
    - Remove the grind selection text
  - If "Filter" or "Espresso" are selected, update the order summary text to:
    - "I drink my coffee **as** Filter||Espresso"
    - Keep/Add the grind selection text
  - For all other selections, add the selection title in the blank space where appropriate

- Updating per shipment price (shown in "How often should we deliver?" section at the bottom) based on weight selected
  - If 250g weight is selected
    - Every Week price per shipment is $7.20
    - Every 2 Weeks price per shipment is $9.60
    - Every Month price per shipment is $12.00
  - If 500g weight is selected
    - Every Week price per shipment is $13.00
    - Every 2 Weeks price per shipment is $17.50
    - Every Month price per shipment is $22.00
  - If 1000g weight is selected
    - Every Week price per shipment is $22.00
    - Every 2 Weeks price per shipment is $32.00
    - Every Month price per shipment is $42.00
- Calculating per month cost for the Order Summary modal
  - If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month
  - If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month
  - If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month

## My process

### Screenshot

- The full end result of my portfolio

![carlospwd netlify app_](https://user-images.githubusercontent.com/85038929/134842106-3038347d-28ec-470e-b7cf-dc3f41b76616.png)

- Modal card displaying selected project information

![carlospwd netlify app_ (1)](https://user-images.githubusercontent.com/85038929/134842122-5fa12ef9-1afe-4af0-9056-3fa06ed9f5b6.png)

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript
- BootStrap
- JQuery

### What I learned

This was a tough challenge that tested a lot of my javascript skills and organizational skills. It was a lot more than I expected but overall a very educational experience. I learned that there are many ways to do things, but some may be much easier and efficient than others. For example, my accordion was comprised of many buttons, but I first started by using div elements along with click event listeners. I later discovered that it was very tedious to make it accessible and decided to go with buttons instead, which comprised its own challenges with inner tags. Overall, I wanted to make an app that was mainly functional and accessible, so I didn't focus too much on transitions. I enjoyed this project, and I certainly learned a lot from it.

- This portion of my JavaScript was my event listener for my cards within my accordion. Within the first portion I was setting up my variables for each option.

```JavaScript

```

- In the syntax below, I am checking to see if the user chose the option 'Filter' either for the first time or the second time in order to correctly fill in the blanks within the summery at the bottom of the page. If I didn't do this then the summery will fill in both lines for option 1 and option 4 before the user got to the 4th option.

```JavaScript

```

- After I prepared to place the correct variables in their appropriate lines through the following code.

- Here I created an array which comprises of the different choices picked by the user. in the first 'if' statement I placed a 'disabled' class on my checkout button depending on the first choice.
- I then made a 'for' loop which would cycle through my array, checking to see if its undefined. If it is I would place a empty span so keep the Underline in the values that haven't been assigned yet
- I removed the disabled class from the grind option incase the user chose the capsule option before the other two options for choice 1. I'd then insert a string via template literal along with my variables

```JavaScript

```

- in the case I ran the capsule option instead in my first choise, I essentially do the same thing but instead with fewer options and a different string is inserted in my summery.innerHTML

### Useful resources

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

email forum

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

icon page

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
