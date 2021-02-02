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
    var outputLoaded = document.getElementById('gamePage');
    if (playerStoredString.length > 0) {
        var players = JSON.parse(playerStoredString);
        toRemove.innerHTML = "";
        outputLoaded.classList.add("startGame");
        //show username stored in object
        outputLoaded.innerHTML += "<p>" + players['name1'] + "</p>";
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
    listPlayers['name5'] = player4;
    listPlayers['name6'] = player4;
    listPlayers['name7'] = player4;
    listPlayers['name8'] = player4;

    //turn object into a string and put it in the local storage
    var listString = JSON.stringify(listPlayers)
    localStorage.setItem('names', listString);

    //delete the input field
    var hideNames = document.getElementById("playerPage");
    hideNames.innerHTML = "";

    //turn string who is stored in local storages into object and display it on screen (need some editting later)
    var playerStored = JSON.parse(localStorage.getItem('names'));
    var output = document.getElementById('gamePage');
    output.classList.add("startGame");

    output.innerHTML += "<p>" + playerStored['name1'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name2'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name3'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name4'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name5'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name6'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name7'] + "</p>";
    output.innerHTML += "<p>" + playerStored['name8'] + "</p>";
}); 