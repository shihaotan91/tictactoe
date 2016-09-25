var outerBox = document.getElementById('outerbox')

var instruct = document.querySelector('h1')

var box = document.getElementsByClassName('.box')

var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')

one = false
two = false
three = false
four = false
five = false
six = false
seven = false
eight = false
nine = false

var clicks = 0


// var imgArray = [cross, circle]
var boxArray = [one, two, three, four, five, six, seven, eight, nine]

// one.innerHTML = "<img src='img/cross.png'/>"

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
  }

  else {
  var target = event.target
  var img = document.createElement('img');
  img.src = 'img/circle.png'; // path to the image
  target.innerHTML = '';
  img.style.margin = "13px";
  target.appendChild(img);
  clicks += 1
  instruct.innerHTML = "<h1>Player X's Turn</h1>"
  box = true
     }
   }
 )

 console.log(one)

 // var cross = new Image();
 // img.src = "img/cross.png";
 //
 // var circle = new Image();
 // img.src = "img/circle.png";
