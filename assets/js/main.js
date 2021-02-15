//code for the give us a beer modal
//function to show the price of 1 beer and change paypal link
$(".btn1beer").on("click", function () {
    $(".amountbeer").text("2 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/2";
});

//function to show the price of 6 beers and change paypal link
$(".btn6beer").on("click", function () {
    $(".amountbeer").text("5 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/5";
});

//function to show the price of 24 beers and change paypal link
$(".btn24beer").on("click", function () {
    $(".amountbeer").text("10 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/10";
});

// code for the player and game page.
var clickNextDiv = document.getElementById('startGame');    //select the whole card div
var output = document.getElementById('gamePage');           //select the div where the game text will come in
var toRemove = document.getElementById('playerPage');       //select the player names input div

//code for when screen loads
window.addEventListener("load", function () {
    var playerStoredString = localStorage.getItem('names');     //get player name data from local storage and put it in a string
    var playerStoredObject = JSON.parse(playerStoredString);    //transform the player name data from a string to an object
    var playerStoredArray = Object.values(playerStoredObject);  //transform the player name data from an object to an array
    if (playerStoredString.length > 0) {          //this code becomes active when player names are allready filled in.
        toRemove.innerHTML = "";                  //remove html of input field

        var randomPlayer = playerStoredArray[Math.floor(Math.random() * playerStoredArray.length)]; //select random player name

        //output for when a player refreshes the page
        output.innerHTML += "<p><b>" + randomPlayer + "</b>, " + "</p>";
        output.innerHTML += `<p>The page was refreshed, so you and the person who has
        the phone in his/her hand have to take 2 sips. </p>`;
    }
});

//code to add a player button
var addPlayer = document.getElementById("addPlayer");

addPlayer.addEventListener("click", function () {
    var input = document.createElement("input");
    var toTheNextLine = document.createElement("br");
    var playerId = "player";
    var i = 0;
    var x = document.getElementsByTagName("INPUT").length + 1;

    for (i = 0; i < x; i++) {
        i;
    }

    input.setAttribute("id", playerId + i);
    input.setAttribute("name", "playerNameTag");
    input.type = "text";
    input.classList = "mb-2";
    var playerlist = document.getElementById("input-player-list");
    playerlist.appendChild(input);
    playerlist.appendChild(toTheNextLine);
});

//code to remove a player button
var removePlayer = document.getElementById("removePlayer");
removePlayer.addEventListener("click", function () {
    $("#input-player-list input:last").remove();
    $("#input-player-list br:last").remove();

});

//uploading data to local storage
var buttonGetName = document.getElementById("btnPlayer");

//function to put the player names data into a variable
buttonGetName.addEventListener("click", function () {
    var getPlayerNames = document.getElementsByName('playerNameTag');
    var listPlayers = [];
    //a loop to put all the player names into an array
    for (let i = 0; i < getPlayerNames.length; i++) {
        var playerName = getPlayerNames[i].value;
        listPlayers.push(playerName);
    }
    
    //turn array into a string and put it in the local storage
    var listString = JSON.stringify(listPlayers);
    localStorage.setItem('names', listString);

    toRemove.innerHTML = "";                  //remove html of input field

});

//when the game starts, click on the screen and this will happen: 
clickNextDiv.addEventListener("click", function () {
    var playerStoredString = localStorage.getItem('names');     //get player name data from local storage and put it in a string
    var playerStoredObject = JSON.parse(playerStoredString);    //transform the player name data from a string to an object  
    var playerStoredArray = Object.values(playerStoredObject);  //transform the player name data from an object to an array
    var randomPlayer = playerStoredArray[Math.floor(Math.random() * playerStoredArray.length)];     //select random player name

    //array with all the questions
    var questions = ["choose one other player, he or she will be your drinking budy for the rest of the game.",
        "clean your drink if have you have ever been caught at cheating on a test.",
        "take 3 sips if you have shoplifted something with a value of 10 euros or more.",
        "take 1 sip of your drink for every time you use the word 'I' until the end of the game.",
        "name your favourite music artist, the first person the name a song of this artist can give away 2 sips.",
        "you start this game. Name a movie where Leonardo Dicaprio plays in. the first person who doesn't know a movie has to clean his/her drink.",
        "give 3 sips to the person who you know the longest.",
        "give 3 sips to the person who you know the shortest.",
        "give 2 sips to the person who was the latest person to arrive at the party today.",
        "you have 2 chooses: take 2 sips or let everyone else take 4 sips. What will it be?"];
    if (localStorage.getItem('theQuestions') === null) {
        var b = questions.slice();
        var newArr = []; //this is the destination of the randomly selected item

        //for loop to select a random question and splice it of the array
        for (let i = 0; i < 1; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];

            let index = b.indexOf(arr);                             //find the index of the randomly selected question
            questions.splice(index, 1);                             //splice the randomly selected question of the array
            newArr.push(arr);                                       //push the randomly selected question to the new array to show it
            var questionsString = JSON.stringify(questions);        //make a string of the new array
            localStorage.setItem("theQuestions", questionsString);  //upload the string to the local storage
        }
    } if (JSON.parse(localStorage.getItem('theQuestions')).length === 0) {
        var newArr = "you are done"; //this will be displayed when the array in local storage is out of items and the game is finished
    } else {
        var questionsStoredString = localStorage.getItem('theQuestions');       //get questions from local storage in string form
        var questionsStoredObject = JSON.parse(questionsStoredString);          //transform the questions data from a string to an object  
        var questions = Object.values(questionsStoredObject);                   //transform the questions data from an object to an array

        var b = questions.slice();
        var newArr = []; //this is the desitination of the randomly selected item

        //for loop to select a random question and splice it of the array
        for (let i = 0; i < 1; i++) {
            let arr = b[Math.floor(Math.random() * b.length)];

            let index = b.indexOf(arr);                             //find the index of the randomly selected question
            questions.splice(index, 1);                             //splice the randomly selected question of the array
            newArr.push(arr);                                       //push the randomly selected question to the new array to show it
            var questionsString = JSON.stringify(questions);        //make a string of the new array
            localStorage.setItem("theQuestions", questionsString);  //upload the string to the local storage
        }
    }

    //the new output text
    output.innerHTML = "";                  //remove text from old output text
    output.innerHTML += "<p><b>" + randomPlayer + "</b>, </p>";
    output.innerHTML += "<p>" + newArr + "</p>";
});
