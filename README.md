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
    -   [CV Sections](#cv-sections)
    -   [Themes](#themes)
    -   [Save Function](#save-function)
    -   [Download as PDF](#download-as-pdf)
    -   [Reset](#reset)
    -   [Responsive Design](#responsive-design)
-   **[Technologies](#technologies)**
-   **[Tools](#tools)**
-   **[Testing](#testing)**
    -   [Manual Testing](#manual-testing)
    -   [User Testing](#user-testing)
    -   [Known Bugs](#known-bugs)
-   **[Upcoming Features](#upcoming-features)**
-   **[Code Notes](#code-notes)**
-   **[Aknowledgments](#aknowledgments)**

---

## Description

"Ultimate Piccalo: The Game" is a drinking game that friends and/or family can use when they want to have a lovely night. The game asks for the names of the people who want to play and it then give these players randomly a question or task he or she has to compleet. These questions involve drinking so remember to drink responsible! Next to the game there is also an option to donate to the creator in the form of beers.

![responsive site](assets/images/piccalo-responsive.png)

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
-   All the data is stored in local storage so when a player refreshes the page the game won't be reset.

### Wireframes

Wireframes were created with balsamiq to ensure proper structure and organization of content on all device sizes.
The final version of the wireframes can be found [here](readme-files/CV-Builder-Wireframe.pdf)

### Design

Special care was put into making this cv builder an easy tool to use with intuitive controls and appropriate user feedback. This includes the following:

-   Editable text will blink when hovered
-   Editable text background and outline will change when being edited
-   Clear and colored buttons are displayed to add a new element or section, and to delete an element or section
-   Sections and element border change on hover to indicate section or element being accessed
-   Validation message when content has been saved
-   Confirmation popup when content is to be reset
-   Clear handle icon on objects that can be sorted
-   Cursor changes when sortable handle is hovered or grabbed
-   Clear placeholders when sortable element is moved to indicate the new placement to the user
-   Header changes color to emphasize theme change

---

## Features

### CV Sections

The information in the user's CV can be displayed in four types of sections.

-   **Info Section** would include the name and two tables of items for various contact information
    ![alt text](readme-files/info-section-example.png "Info Section")
-   **Listing Section** would be used for listings such as education or work experience
    ![alt text](readme-files/listing-section-example.png "Listing section")
-   **Block Section** would be used to display simple paragraphs of information
    ![alt text](readme-files/block-section-example.png "block Section")
-   **Three Column** would be used to list elements in three columns
    ![alt text](readme-files/three-col-section-example.png "Three Column Section")

Sections can be added or removed, and re-organized with drag and drop. This also applies to individual items within these sections.

### Themes

Additionally, the CV can be customized using 4 different themes that change the fonts and colors on the final product:

-   #### Default

![alt text](readme-files/theme-default-example.png "Default theme")

-   #### Modern

![alt text](readme-files/theme-modern-example.png "Modern theme")

-   #### Lavender

![alt text](readme-files/theme-lavender-example.png "Lavender theme")

-   #### Deco

![alt text](readme-files/theme-deco-example.png "Deco theme")

### Save Function

Any changes made to the CV or its theme can be saved to be updated at a later time.
When saved, the content of the page generates a JSON object which is stored in the browser's local storage. The theme chosen by the user is also saved to local storage.
Upon reload of the page, the saved data and theme are automatically displayed on the page. If no information is found in local storage, a default CV and theme will be displayed.

### Download as PDF

The CV builder uses html2pdf.js to convert the content of the CV into a PDF document, that can be downloaded to the user's device.

### Reset

A reset button at the bottom of the page enables the user to reset the CV's content and theme to their default values. I also clears the local storage. The user has to confirm the reset in a modal window before the content is reset.

### Responsive Design

This application is primarily meant to be used on computer sized screens but it has been optimized to work on mobile devices as well.
It was built responsively with the bootstrap framework, and uses JQuery UI Touch Punch to ensure all functionalities work on touch enabled devices.

---

## Technologies

-   HTML
-   CSS
-   Bootstrap
-   Javascript
-   [JQuery](https://jquery.com/)
-   [JQuery UI](https://jqueryui.com/): for effects on the page and the sortable function
-   JQuery UI Touch Punch: to make JQuery UI's sortable function touch device friendly
-   [html2pdf.js](https://github.com/eKoopmans/html2pdf.js): relies on HTML2canvas and jsPDF to convert the CV to a PDF file
-   [anchorme.js](https://alexcorvi.github.io/anchorme.js/): dynamically finds urls and email addresses on the CV and converts them to anchor tags

---

## Tools

-   VSCode: IDE used to create and edit code
-   Adobe Photoshop: Image editor used for section vignettes and favicon
-   Balsamiq: Used to create wireframes
-   [Font Awesome](https://fontawesome.com/): used for all icons throughout the site
-   [Google Fonts](https://fonts.google.com/): The following fonts were imported from Google fonts for the various themes: Montserrat, Open Sans, Raleway, Roboto, Lato, Jost
-   [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb): Chrome extension used to test site at different screen sizes
-   [Pingdom](https://tools.pingdom.com/): used to test site performance
-   [W3C HTML Validator](https://validator.w3.org/): used to validate HTML code
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): used to validate CSS

---

## Testing

### Manual Testing

The site was tested on various platforms and browsers to ensure proper display and functionality across different screen sizes, including touch devices.

As functionalities were added to the application, thorough testing was conducted to ensure proper behavior with no side-effects.

Google Chrome's dev tools were used extensively for debugging.

The HTML and CSS were validated on W3C Validators, and speed tested on Pingdom.

### User Testing

When the program was advanced enough to be usable, several users were asked to manipulate it to assess their experience and comfort with it. This highlighted the need for more consistent user feedback. The following changes came from this round of testing:

-   Header background color changes when theme changes
-   Placeholders on sortable items to notify user where the item will be positioned
-   Notification when content is saved to local storage, additionally a note was added to let users know the content would be lost if the browser's cache was cleared
-   Confirmation window when content is reset

### Known Bugs

-   When generated from a mobile device, the PDF has a different aspect than when generated from larger screen sized because of how html2pdf.js converts a page to a PDF file. By sending options to html2pdf.js, it is possible for the CV to be laid out as if on a larger screen size, however the page breaks on the PDF seem to be determined by the device's window height, resulting in uneven and unpredictable page breaks. For this reason, the choice was made to have the PDF appear differently when generated from different screen sizes, for now.

---

## Upcoming features

A number of new features will be implemented in the future.

-   A preview of the final PDF will be seen before download

-   More themes and granular customization options, such as a choice of fonts and colors.

-   New types of sections will be available for use

-   An interactive tutorial will be created to guide new users on how to use the platform

-   Currently, the fields that the user can edit are DIV elements with the attribute contenteditable set to "true". For the application to be more semantically accurate and accessible, these will be replaced with input fields.

---

## Code Notes

Initially when the CV was saved, the entire inner HTML of printable element was saved as a string. Measures were taken to instead translate the content of the html to an object, which allowed for more flexibility and scalability down the line.

---

## Aknowledgments

[The following Code Institute student project](https://github.com/sabinemm/fruit-game) helped me in creating and structuring this very readme file

Thank you to [Felipe Alarcon](https://github.com/felipe-alarcon) for brainstorming the initial idea for the project, for assistance in testing and for support and guidance along the way.

Many thanks to friends and family who helped testing the program.

Thanks to the CI Slack community for advice in things large and small, and for encouragement throughout the process.