// EXERCISE 1

const lightsabers = function(num) {
    console.log('I have ' + num + ' lightsabers.');
}

lightsabers(2);

// the function will return "i have 2 lightsabers"

// second part
// add for in loop to search object and display key value pairs
const myLightsaberCollection = {
    blue: 1,
    green: 3
}

const lightsabers = function(lightsaberCollection) {
    for (let color in myLightsaberCollection) {
        console.log("I have " + myLightsaberCollection[color] + " " + color + " lightsaber");
    }
}

lightsabers(myLightsaberCollection);

// Output
// I have 1 blue lightsaber
// I have 3 green lightsabers

// Timing Functions EXERCISE 





var counter = 10;
var newYearCountdown = setInterval(function(){
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("HAPPY NEW YEAR!!");
    clearInterval(newYearCountdown);
  }
}, 1000);



function coutdown() {
    setInterval(function() {
        let i=10;
        
        for(i>0; i--;) {
            console.log(i);
            if (i === 1) {
                console.log("blast off");
                clearInterval(kids);
            }
            return i;
            
        }
       
    }, 1000);
    
};

function blastOff() {
    console.log("blast off");
    clearInterval(kids);
}
const kids = setInterval(coutdown, 1000);
setTimeout(blastOff, 10000);


// ITERATORS EXERCISES

// Example 1
const foods = ["pizza", "tacos", "ice cream"];

// your code he.re
foods.forEach((food) => {
console.log("i like " + food)
})
// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"

// Example 2

const foods = [
    {name: "Pizza", level: "very"},
    {name: "Tacos", level: "mostly"},
    {name: "Cottage Cheese", level: "not very"}
  ];
  
  // your code here
  
  foods.forEach((food)=>{
      console.log(food.name + " is " + food.level +  " delicious");
    //   ---- "is " + ----- "delicious"
  });
  // The output should be
  // > Pizza is very delicious
  // > Tacos is mostly delicious
  // > Cottage Cheese is not very delicious

//   Example 3

const names = ["tim wayward thompson", "ilias iliad", "elie el ellison", "markus wtf mourning"];

function splitName(fullName) {
  return {
    firstName: fullName.split(" ")[0], 
    middleName: fullName.split(" ")[1],
    lastName: fullName.split(" ")[2]
  }
}

const objNames = names.map(splitName);

console.log(objNames);

// Should output
// > [ { firstName: 'tim', lastName: 'thompson' },
//   { firstName: 'ilias', lastName: 'iliad' },
//   { firstName: 'elie', lastName: 'ellison' },
//   { firstName: 'markus', lastName: 'mourning' } ]


const names = ["tim toby thompson", "ilias iliad", "elie ellison", "markus mary mourning"];

function splitName(fullName) {
  const nameArr = fullName.split(" ");
  const nameObj = { firstName: nameArr[0] };
  if(nameArr.length === 3) {
    nameObj.middleName = nameArr[1];
    nameObj.lastName = nameArr[2];
  } else {
    nameObj.middleName = "N/A";
    nameObj.lastName= nameArr[1];
  }
  return nameObj;
}

const objNames = names.map(splitName);

// Should output
// > [ { firstName: 'tim', middleName: 'toby', lastName: 'thompson' },
//   { firstName: 'ilias', lastName: 'iliad' },
//   { firstName: 'elie', lastName: 'ellison' },
//   { firstName: 'markus', middleName: 'mary', lastName: 'mourning' } ]