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


function getUserName() {
var player1 = document.getElementById('player1').value;
var result = document.getElementById('result');

if (player1.length < 3) {
    result.textContent = 'Username must contain at least 3 characters';
    //alert('Username must contain at least 3 characters');
} else {
    result.textContent = 'Your username is: ' + player1;
    //alert(nameField);
}
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false); 

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  }};