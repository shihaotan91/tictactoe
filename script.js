var outerBox = document.getElementById('outerbox')
var instruct = document.querySelector('h1')
var box = document.getElementsByClassName('box')

var xScore = 0
var oScore = 0

var button = document.querySelector('button')

var clicks = 0

var gun = document.getElementById("gun");

function playAudio() {
  gun.play();
}

var horse = document.getElementById("horse");

function playAudio2() {
  horse.play();
}


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


// box.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0) {
//     var target = event.target
//     var img = document.createElement('img');
//     img.src = 'img/cross.png'; // path to the image
//     target.innerHTML = '';
//     img.style.margin = "14px";
//     target.appendChild(img);
//     clicks += 1;
//     instruct.innerHTML = "<h1>Player O's Turn!</h1>"
//     playAudio();
//     winConditionX();
//     document.getElementById('xScore').innerHTML = '<h1>' + xScore + '</h1>'
//     draw();
//   }
//
//   else
//   {
//   var target = event.target
//   var img = document.createElement('img');
//   img.src = 'img/circle.png'; // path to the image
//   target.innerHTML = '';
//   img.style.margin = "14px";
//   target.appendChild(img);
//   clicks += 1;
//   instruct.innerHTML = "<h1>Player X's Turn!</h1>"
//   playAudio2();
//   winConditionO();
//   document.getElementById('oScore').innerHTML = '<h1>' + oScore + '</h1>'
//   draw();
//      }
//    }
//  )

//  function cellClick(box)
// {
// document.getElementByClassName('box').removeAttribute('onClick');
// }

// var boxArray = [one, two, three, four, five, six, seven, eight, nine]
// box[i].addEventListener('click', function(changeStyling)


// function that is called when you click a box
// function boxClick(){}

//loop that adds the event listeners
for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function() {

  if (clicks == 0 || clicks % 2 == 0)

   {var target = box
    var img = document.createElement('img');
    img.src = 'img/cross.png'; // path to the image
    box.innerHTML = '';
    img.style.margin = "14px";
    box.appendChild(img);
    instruct.innerHTML = "<h1>Player O's Turn!</h1>"}

      else
     {var target = box
      var img = document.createElement('img');
      img.src = 'img/circle.png'; // path to the image
      box.innerHTML = '';
      img.style.margin = "14px";
      box.appendChild(img);
      instruct.innerHTML = "<h1>Player X's Turn!</h1>"
   }
 )
}
//  function changeStyling(event) {
//  var target = event.target
    //  }
      //  target.appendChild(img);
      //  clicks += 1;
      //  instruct.innerHTML = "<h1>Player X's Turn!</h1>";
      //  playAudio();
      //  winConditionX();
      //  document.getElementById('oScore').innerHTML = '<h1>' + xScore + '</h1>';
      //  draw();


      //  function changeStyling(event); {
      //  var target = event.target

        //  }

          //  clicks += 1;
          //  instruct.innerHTML = "<h1>Player X's Turn!</h1>";
          //  playAudio2();
          //  winConditionO();
          //  document.getElementById('oScore').innerHTML = '<h1>' + oScore + '</h1>';
          //  draw();}
 //     if (clicks == 0 || clicks % 2 == 0) {
 //       boxArray[i] = 1
 //     } else {
 //      boxArray[i] = 2
 //     }
 //  }
 //)

// function()


// one.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {one = 1}
//   else
//   {one = 2}
//  }
// )
// two.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {two = 1}
//   else
//   {two = 2}
//  }
// )
// three.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {three = 1}
//   else
//   {three = 2}
//  }
// )
// four.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {four = 1}
//   else
//   {four = 2}
//  }
// )
// five.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {five = 1}
//   else
//   {five = 2}
//  }
// )
// six.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {six = 1}
//   else
//   {six = 2}
//  }
// )
// seven.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {seven = 1}
//   else
//   {seven = 2}
//  }
// )
// eight.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {eight = 1}
//   else
//   {eight = 2}
//  }
// )
// nine.addEventListener('click', function(event) {
//   if (clicks == 0 || clicks % 2 == 0)
//   {nine = 1}
//   else
//   {nine = 2}
//   }
// )

function winConditionX() {
  if
  ((one == 1 && two == 1 && three == 1) ||
  (one == 1 && five == 1 && nine == 1) ||
  (three == 1 && five == 1 && seven == 1) ||
  (one == 1 && four == 1 && seven == 1) ||
  (two == 1 && five == 1 && eight == 1) ||
  (three == 1 && six == 1 && nine == 1) ||
  (four == 1 && five == 1 && six == 1) ||
  (seven == 1 && eight == 1 && nine == 1))
  {alert("X has won the game! The board will now reset."), xScore += 1, reset()}
}

function winConditionO() {
  if
  ((one == 2 && two == 2 && three == 2) ||
  (one == 2 && five == 2 && nine == 2) ||
  (three == 2 && five == 2 && seven == 2) ||
  (one == 2 && four == 2 && seven == 2) ||
  (two == 2 && five == 2 && eight == 2) ||
  (three == 2 && six == 2 && nine == 2) ||
  (four == 2 && five == 2 && six == 2) ||
  (seven == 2 && eight == 2 && nine == 2))
  {alert("O has won the game! The board will now reset."), oScore += 1, reset()}
}

  function draw() {
    if (clicks == 9)
    {alert("It's a draw! The board will now reset.", reset())}
  }
//


function drawCondition() {
  for (var i = 0; i < boxArray.length; i++)
  if (boxArray[i] == 1 || boxArray[i] == 2)
  alert("It's a draw game!")
}

button.addEventListener("click", function () {
    var outerBox = document.getElementsByTagName('outerbox');
    for(var i = 0; i < boxArray.length; i++) {
        boxArray[i].innerHTML = ''
        // boxArray[i] = 0
        clicks = 0
        one = 0
        two = 0
        three = 0
        four = 0
        five = 0
        six = 0
        seven = 0
        eight = 0
        nine = 0
    }
  }
)

function reset() {
  for(var i = 0; i < boxArray.length; i++) {
      boxArray[i].innerHTML = ''
      // boxArray[i] = 0
      clicks = 0
      one = 0
      two = 0
      three = 0
      four = 0
      five = 0
      six = 0
      seven = 0
      eight = 0
      nine = 0
    }
  }

  // function one (){}
  // function two (){}
  // function three (){}
  // function four (){}
  // function five (){}
  // function six (){}
  // function seven (){}
  // function eight (){}
  // function nine (){}

  // function drawCondition() {
  //   for (var i = 0; i < boxArray.length; i ++) {
  //   if
  //   // (boxArray[i] == 1 || boxArray[i] == 2)
  //   ((one == 1 || one == 2) &&
  //    (two == 1 || two == 2) &&
  //    (three == 1 || three == 2) &&
  //    (four == 1 || four == 2) &&
  //    (five == 1 || five == 2) &&
  //    (six == 1 || six == 2) &&
  //    (seven == 1 || seven == 2) &&
  //    (eight == 1 || eight == 2) &&
  //    (nine == 1 || nine == 2))
  //    {alert("It's a draw! The board will now reset.", reset())}
  //   }
  // }

// var xScore = document.getElementById('xScore').innerHTML = '<h1>' + xScore + '</h1>'
// var oScore = document.getElementById('oScore').innerHTML = '<h1>' + oScore + '</h1>'

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

 // var cross = new Image();
 // img.src = "img/cross.png";
 //
 // var circle = new Image();
 // img.src = "img/circle.png";
