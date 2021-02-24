## the footer
#### the footer is made with help of the CodeInstitute CV project.

## color chooses
we have choosen for the yellow color (#F7DE6A) because it is a drinking game and beer is yellow.
The dark color we use is #343A40. To decide the 3th color we used Adobe color wheel to find the oppesite color of
the yellow color. That color was the purple #6A6BF7.

---------------------------------

![Ultimate Piccalo: the game logo](assets/images/logo.png)

## Table of Contents

-   **[Description](#description)**
-   **[Deployment and Live Demo](#deployment-and-live-demo)**
    -   [Download](#download)
    -   [Clone with Git](#clone-with-git)
    -   [Live Demo](#live-demo)
-   **[UX](#ux)**
    -   [User Stories](#user-stories)
    -   [Wireframes](#wireframes)
    -   [Design](#design)
-   **[Features](#features)**
    -   [Diffent Sections](#different-sections)
    -   [Colors](#colors)
    -   [Save Function](#save-function)
    -   [Add and delete players function](#add-and-delete-players-function)
    -   [Reset Game](#reset-game)
    -   [Responsive Design](#responsive-design)
-   **[Technologies](#technologies)**
-   **[Tools](#tools)**
-   **[Testing](#testing)**
    -   [Manual Testing](#manual-testing)
    -   [User Testing](#user-testing)
    -   [Known Bugs](#known-bugs)
-   **[Upcoming Features](#upcoming-features)**
-   **[Aknowledgments](#aknowledgments)**

---

## Description

"Ultimate Piccalo: The Game" is a drinking game that friends and/or family can use when they want to have a lovely night. The game asks for the names of the people who want to play and it then give these players randomly a question or task he or she has to compleet. These questions involve drinking so remember to drink responsible! Next to the game there is also an option to donate to the creator in the form of beers.

![responsive site](assets/images/readme/piccalo-responsive.png)

---

## Deployment and Live Demo

The game can be used locally by cloning or downloading the repository from [github](https://github.com/waterrot/Ultimate-Piccolo-The-Game).

### Download

1. Click on "Clone or download" under the repository name.

2. Click on "Download ZIP"

3. Choose directory to download it to and unzip file

4. Access the CV-builder-master folder

5. Open index.html into your browser to open the CV Builder

### Clone with Git

In your local IDE:

1. Open a new terminal window

2. Change the current working directory to the location where the cloned directory to be created.

3. Enter the following line in the console:

    `git clone https://github.com/waterrot/Ultimate-Piccolo-The-Game`

4. Press enter

### Live Demo

The live demo of the cv builder has been deployed to Github Pages and is accessible [here](https://waterrot.github.io/Ultimate-Piccolo-The-Game/).

---

## UX

### User Stories

_Generic User / Player_

-   I want to play a game with my friends.
-   I want to be able to donate money to the creator.
-   I want to email the creator if I have any questions.
-   I want to reset a game when I am playing one.
-   I want to add players to the game.
-   I want to delete players from the game.
-   I want to close the game and later open it when I open the browser again.

These goals are accomplished in the following way:

-   The game can be played when the player gives the names to the game and presses enter.
-   Players can donate money through a modal which links to Paypal.
-   In the footer of the site the email addresse of the creator is visible so people can get in touch.
-   When the players are playing a game the reset button will be visible under in the screen.
-   when the player is on the "add players" screen there is an option to add and delete players using a button. 
-   All the data is stored in local storage so when a player refreshes the page the game won't be

### Wireframes

The wireframe was made by hand. The final version of the wireframes can be found [here](assets/images/readme/wireframe.png)

### Design

When the game was made the design was focussed on mobile first. the following things got some extra attention: 

-   What should I put here?

---

## Features

### different Sections

The website can be divided into four main sections:

-   **Welcome Section** This section is a card designed section where people read about the game and continue to another page.
    ![welcome section](assets/images/readme/welcome-section.png)
-   **Donate Section** This section is creates a possibility so that people can donate to the creator.
    ![donate section](assets/images/readme/donate-section.png)
-   **Players Section** Here players can be added and deleted. and there is an information modal on this section.
    ![players section](assets/images/readme/players-section.png)
-   **Game Section** there the randomly selected name and the randomly selected question will be displayed.
    ![game section](assets/images/readme/game-section.png)

Sections are responsive and have dynamic element with them. 

### colors

The yellow color was manually selected because it is the color of beer and then the oppesite color (the pink color) was selected with the help of [Adobe Color Wheel](https://color.adobe.com/nl/create/color-wheel).
In the picure below you can see the home screen with the 2 main colors:

![home screen](assets/images/readme/home-screen.png)

### Save Function

The game make use of the local storage so it is not a problem when players refresh the page.
The names that where filled in by the players are stored in an array in the local storage and are randomly selected when you click on the screen.
The questions and card are also stored in an array in the local storage. Every time the player clicks on the screen a random other item from the array will be selected and the old one will be deleted from local storage.
Any changes made to the CV or its theme can be saved to be updated at a later time.
In the picture down below you can see the local storage with the 2 saved arrays:

![local storage](assets/images/readme/local-storage.png)

### Add and delete players function

In the players section there are 2 buttons to add and delete players. The add button is made with the help of a "for loop" and the delete button deletes the newest input field.

### Reset Game

The reset button on in the game section deletes the local storage and refreshes the page. before this is done the player will be asked if he or she want to continue with it.
When the page is refeshed the player will get the same question if he or she would like to continue the game or start a new one. On the picture below you can see this notification in the modal.

![reset notification](assets/images/readme/reset-notification.png)

### Responsive Design

This application is build mobile first because it will mostly be used on small gatherings where most people do not have a laptop with them.
With the help of Bootstrap the screens on different screen sizes could easily be editted.

---

## Technologies

-   HTML
-   CSS
-   Javascript
-   [JQuery](https://jquery.com/)
-   [Bootstrap](https://getbootstrap.com/)
---

## Tools

-   Pen and paper to create the wireframe
-   [Canva](https://canva.com) to create the logo
-   [Font Awesome](https://fontawesome.com/): used for all icons throughout the site
-   [Google Fonts](https://fonts.google.com/): All the fonts were imported from Google Fonts
-   [ResponsiveDesign.is](http://ami.responsivedesign.is/): used to make a photo of how the website will look in different screen sizes.
---

## Testing

### Manual Testing

The site was tested on diffent platforms and browsers to ensure a good display and functionality across different screen sizes.

Google Chrome's dev tools were used extensively for debugging.

Furthermore the site was tested by 5 friends of my to see if anything was unclear. This resulted in some feedback which I fixed.

### User Testing

When the program was advanced enough to be usable, several users were asked to manipulate it to assess their experience and comfort with it. The following changes came from this round of testing:

-   Added a reset button to make the user experience better
-   Added information modals to the game to answer all the main questions
-   changed the home page to be more focussed on the game and not on donating
-   When the page refreshes the user will get a question if he or she would like to continue

### Known Bugs

-   When somebody want to donate a curtain amout but instead of clicking on the number of beers first dirrectly presses the Paypal button the will come on my paypal account where they can type in their own number they want to donate. This is not that

---

## Upcoming features

A number of new features will be implemented in the future.

-   Multible packages of questions so an user can select a question pack based on a theme. 

-   A form where users can upload their own questions to us so that we could add it to one of the packages.

-   A Function where people can make their own question packs with their own questions and pre made questions.

---

## Aknowledgments

[The following Code Institute student project](https://github.com/jumboduck/CV-Builder) helped me in to create this readme file.

Thanks to [Felipe Alarcon](https://github.com/felipe-alarcon) for helping me with brainstorming on how to code curtain things and for helping me reflect on my own work.

Thanks [Slack Overflow](https://stackoverflow.com/) for giving me code idea's when I was not curtain on how to code something.

Thanks [Code Pen IO](https://codepen.io/rsherry/pen/QwoqyO) for giving me tips on how to make the add and remove players Javascript code.