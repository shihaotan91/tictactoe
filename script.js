var outerBox = document.getElementById('outerbox')
var instruct = document.querySelector('h1')
var box = document.getElementsByClassName('box')

var xScore = document.getElementById('xScore')
var oScore = document.getElementById('oScore')

var button = document.querySelector('button')

var clicks = 0

var xScore = 0
var oScore = 0

// xScore.innerHTML = '<h1>' + xScore + '</h1>'
// oScore.innerHTML = '<h1>' + oScore + '</h1>'


var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')

function one (){}
function two (){}
function three (){}
function four (){}
function five (){}
function six (){}
function seven (){}
function eight (){}
function nine (){}

outerBox.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0) {
    var target = event.target
    var img = document.createElement('img');
    img.src = 'img/cross.png'; // path to the image
    target.innerHTML = '';
    img.style.margin = "13px";
    target.appendChild(img);
    clicks += 1;
    instruct.innerHTML = "<h1>Player O's Turn</h1>"
    winConditionX();
  }

  else {
  var target = event.target
  var img = document.createElement('img');
  img.src = 'img/circle.png'; // path to the image
  target.innerHTML = '';
  img.style.margin = "13px";
  target.appendChild(img);
  clicks += 1;
  instruct.innerHTML = "<h1>Player X's Turn</h1>"
  winConditionO();
     }
   }
 )

 var boxArray = [one, two, three, four, five, six, seven, eight, nine]

//  for (i = 0; i < boxArray.length; i++) {
//    boxArray[i].addEventListener('click', function(event) {
//      if (clicks == 0 || clicks % 2 == 0)
//      {boxArray[i] = true;}
//
//      else
//      {boxArray[i] = false;}
//     }
//   )
// }


one.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {one = true}
  else
  {one = false}
 }
)
two.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {two = true}
  else
  {two = false}
 }
)
three.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {three = true}
  else
  {three = false}
 }
)
four.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {four = true}
  else
  {four = false}
 }
)
five.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {five = true}
  else
  {five = false}
 }
)
six.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {six = true}
  else
  {six = false}
 }
)
seven.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {seven = true}
  else
  {seven = false}
 }
)
eight.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {eight = true}
  else
  {eight = false}
 }
)
nine.addEventListener('click', function(event) {
  if (clicks == 0 || clicks % 2 == 0)
  {nine = true}
  else
  {nine = false}
  }
)

function winConditionX() {
  if
  ((one == true && two == true && three == true) ||
  (one == true && five == true && nine == true) ||
  (three == true && five == true && seven == true) ||
  (one == true && four == true && seven == true) ||
  (two == true && five == true && eight == true) ||
  (three == true && six == true && nine == true) ||
  (four == true && five == true && six == true) ||
  (seven == true && eight == true && nine == true))
  {alert("X has won the game!"), xScore += 1}
  {xScore.innerHTML = '<h1>' + xScore + '</h1>'}
}

function winConditionO() {
  if
  ((one == false && two == false && three == false) ||
  (one == false && five == false && nine == false) ||
  (three == false && five == false && seven == false) ||
  (one == false && four == false && seven == false) ||
  (two == false && five == false && eight == false) ||
  (three == false && six == false && nine == false) ||
  (four == false && five == false && six == false) ||
  (seven == false && eight == false && nine == false))
  {alert("O has won the game!"), oScore += 1 }
  {oScore.innerHTML = '<h1>' + oScore + '</h1>'}
}

button.addEventListener("click", function () {
    var outerBox = document.getElementsByTagName('outerbox');
    for(var i = 0; i < boxArray.length; i++) {
        boxArray[i].innerHTML = ''
        boxArray[i] = ""
    }
});

// reset.addEventListener('click', function(event) {
//   var remove = event.remove
//   outerBox.removeChild(remove)
//  }
// )

// outerBox.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0) {
//     var target = event.target
//     var img = document.createElement('img');
//     img.src = 'img/cross.png'; // path to the image
//     target.innerHTML = '';
//     img.style.margin = "13px";
//     target.appendChild(img);
//     clicks += 1;
//     instruct.innerHTML = "<h1>Player O's Turn</h1>"
//     winConditionX();
//   }


// box.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {box = "cross"}
//   else
//   {box = "circle"}
// }
// )

// one = false
// two = false
// three = false
// four = false
// five = false
// six = false
// seven = false
// eight = false
// nine = false

 // var cross = new Image();
 // img.src = "img/cross.png";
 //
 // var circle = new Image();
 // img.src = "img/circle.png";
