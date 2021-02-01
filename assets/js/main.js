//function to show the price of 1 beer and change paypal link
$(".btn1beer").on("click", function(){
    $(".amountbeer").text("2 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/2";
});

//function to show the price of 6 beers and change paypal link
$(".btn6beer").on("click", function(){
    $(".amountbeer").text("5 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/5";
});

//function to show the price of 24 beers and change paypal link
$(".btn24beer").on("click", function(){
    $(".amountbeer").text("10 euro");
    document.getElementById("btn-link").href = "https://www.paypal.com/paypalme/RaymondHuisman/10";
});


var buttonGetName = document.getElementById("btnName");

buttonGetName.addEventListener("click", function(){
var player1 = document.getElementById('player1').value;
var player2 = document.getElementById('player2').value;
var player3 = document.getElementById('player3').value;
var player4 = document.getElementById('player4').value;
var player5 = document.getElementById('player5').value;
var player6 = document.getElementById('player6').value;
var player7 = document.getElementById('player7').value;
var player8 = document.getElementById('player8').value;
var hideNames = document.getElementById("formpage");
hideNames.innerHTML = "";

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

}); 