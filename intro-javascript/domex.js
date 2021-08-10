const myDiv = document.getElementById('hello');

console.log(myDiv);

const theSquares = document.getElementsByClassName("square");

console.log(theSquares[0]);
console.log(theSquares[1]);

const theDivs = document.getElementsByTagName("div")

console.log(theDivs[0]);
console.log(theDivs[1]);


// SELECTING ELEMENTS BY CSS

const myDiv2 = document.querySelector('#gb');

console.log(myDiv2);

const mySquares2 = document.querySelectorAll('.square')
;

console.log(mySquares2[0]);
console.log(mySquares2[1]);

const myDivs2 = document.querySelectorAll('div');

console.log(myDivs2[0]);
console.log(myDivs2[1]);

myDiv.innerText = "I love WDI";
myDiv2.innerHTML = "<h2>I love GA</h2>";

for(let i = 0; i<theSquares.length; i++) {
    theSquares[i].style.border = "dashed 2px black";
  }
// ADDEVENTLISTENER TO PAGE FOR FIRST ELEMENT
//   document.addEventListener('DOMContentLoaded', function(){

//     const helloDiv = document.getElementById("hello");

//     const alertClick = function() {
//         console.log("HELLO WAS CLICKED");
//     }

//     helloDiv.addEventListener("click", alertClick);

// });

document.addEventListener('DOMContentLoaded', function(){

    const helloDiv = document.getElementById("hello");

    const goodbyDiv = document.getElementById("gb");
    

    const alertClick = function() {
        console.log("HELLO WAS CLICKED");
    }

    helloDiv.addEventListener("click", alertClick);

    goodbyDiv.addEventListener("click", function() {
        console.log("removing event listener!");
        helloDiv.removeEventListener("click", alertClick);
    });
// hover over the element and console.log a Message
    goodbyDiv.addEventListener('mousemove', e => {
        
     console.log("get off my element");

});

// DOM MANIPULATION EXERCISE
// var a = document.createElement("a");
// a.href = "http://hackertyper.com/";
// a.textContent = "Hack!";

// document.body.appendChild(a);

// // obtain a reference to where we'll add it
// var list = document.getElementById("my-favorite-movies");

// // CREATE
// var newMovie = document.createElement("li");

// // MODIFY
// newMovie.textContent = "Pirates of Silicon Valley";

// // ATTACH
// list.appendChild(newMovie);



let button = document.getElementById('brunch');

button.addEventListener("click", function(){
    // Reference
    let bkfood = document.getElementById("breakfast-foods");
    let lhfood = document.getElementById("lunch-foods");
 
    let listItem = bkfood.childNodes;
    console.log(listItem);

    let rmfood = bkfood.removeChild(listItem);
    console.log(rmfood)

    // Attach
    lhfood.appendChild(rmfood);

});
});



