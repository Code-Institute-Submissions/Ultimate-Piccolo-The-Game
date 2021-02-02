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
// when screen loads: code to skip the input field, add class and put the
// stored string back into a object.
window.addEventListener("load", function () {
    var playerStoredString = localStorage.getItem('names');
    var toRemove = document.getElementById('playerPage');
    if (playerStoredString.length > 0) {
        toRemove.innerHTML = "";
        delta();
    }
});

var buttonGetName = document.getElementById("btnPlayer");

//put the input data into a variable
buttonGetName.addEventListener("click", function () {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    var player3 = document.getElementById('player3').value;
    var player4 = document.getElementById('player4').value;
    var player5 = document.getElementById('player5').value;
    var player6 = document.getElementById('player6').value;
    var player7 = document.getElementById('player7').value;
    var player8 = document.getElementById('player8').value;

    //object to store the player names
    var listPlayers = {};

    listPlayers['name1'] = player1;
    listPlayers['name2'] = player2;
    listPlayers['name3'] = player3;
    listPlayers['name4'] = player4;
    listPlayers['name5'] = player5;
    listPlayers['name6'] = player6;
    listPlayers['name7'] = player7;
    listPlayers['name8'] = player8;

    //turn object into a string and put it in the local storage
    var listString = JSON.stringify(listPlayers)
    localStorage.setItem('names', listString);

    //delete the input field
    var hideNames = document.getElementById("playerPage");
    hideNames.innerHTML = "";

    delta();

});

function delta() {
    //get local data into a var
    var playerStoredString = localStorage.getItem('names');
    var playerStored = JSON.parse(playerStoredString);

    //get the div where the text needs to come into a var
    var output = document.getElementById('gamePage');
    
    //turn object into array and select random name
    var playerStoredArray = Object.values(playerStored);
    var randomPlayer = playerStoredArray[Math.floor(Math.random() * playerStoredArray.length)];
    
    //output (this still needs to be edited)
    textDiv.innerHTML += "<p>" + randomPlayer + ", " + "</p>";
    textDiv.innerHTML += `<p>The page was refreshed, so you and the person who has
         the phone in his/her hand have to take 2 sips. </p>`
}

//when the game starts, click on the screen and this will happen: 
    var clickNextDiv = document.getElementById('startGame');
    var textDiv = document.getElementById('gamePage');
    clickNextDiv.addEventListener("click", function () {
    var playerStoredArray = Object.values(JSON.parse(localStorage.getItem('names')));
    var randomPlayer = playerStoredArray[Math.floor(Math.random() * playerStoredArray.length)];
    textDiv.innerHTML += "<p>" + randomPlayer + "hoi hoe gaat het met je" + "</p>";

});