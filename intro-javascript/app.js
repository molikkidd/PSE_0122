// This is example one
// const favorites = ["noodles" ,"bread","cheese","filet mignon"];
// let favorite_three = favorites[2];
// console.log(favorite_three);

// This is example two
// const a1 = [];
// const a2 = [14];
// const a3 = [29, 32];
// const a4 = [16, 99, -40];
// const a5 = [12, 28, 92, 23, 94, 23, 99, 99, 99, 92];


// let total = 0; 
//     for (let i = 0; i < a4.length; i++) {
//         total += a4[i]/(a4.length);   
//     }
// console.log(total);

// Example 3

const human = {
    firstName: "John",
    lastName: "Doe",
    age: 36,
    address: "1234 Park St."

}
// Exercise Objects
const mia = {
   p1: ["John","Doe",36,"1234 Park St."],   
   p2: ["Jane", "Sloe",44, "1234 Flanders St."],
   p3: ["Larry", "Doe", 36, "1234 Spark St."],
   p4: ["Mary", "Doe", 31, "1231 Park St."],
};

// use mia.p4.splice(3) to remove objects in your Array.
// or
// delete mia.p4[3]
// LOOPS EXERCISE 1
for (let i=0; i<100; i++){
    if ((i%3 === 0) && (i%5 === 0) ) {
        console.log("fizz-buzz")
    } else if (i%3 === 0){
        console.log("fizz")
    } else if ( i%5 === 0){
            console.log("buzz");
    } else {
        console.log(i)
    } 
}
// LOOPS EXERCISE 2
let i=0;
while ( i<100) { 
   
    if ((i%3 === 0) && (i%5 === 0) ) {
        console.log("fizz-buzz")
    } else if (i%3 === 0){
        console.log("fizz")
    } else if ( i%5 === 0){
            console.log("buzz");
    } else {
        console.log(i)
    } 
    i++;
}

// LOOPS EXERCISE 3
// Search for phonenumbers in a phonebook object
const phoneBook = {
    "Abe": "111-111-1111",
    "Bob": "222-222-2222",
    "Cam": "333-333-3333",
    "Dan": "444-444-4444",
    "Ern": "555-555-5555",
    "Fry": "111-111-1111",
    "Gil": "222-222-2222",
    "Hal": "333-333-3333",
    "Ike": "444-444-4444",
    "Jim": "555-555-5555",
    "Kip": "111-111-1111",
    "Liv": "222-222-2222",
    "Mia": "333-333-3333",
    "Nik": "444-444-4444",
    "Oli": "555-555-5555",
    "Pam": "111-111-1111",
    "Qiq": "222-222-2222",
    "Rob": "333-333-3333",
    "Stu": "444-444-4444",
    "Tad": "555-555-5555",
    "Uwe": "111-111-1111",
    "Val": "222-222-2222",
    "Wil": "333-333-3333",
    "Xiu": "444-444-4444",
    "Yam": "555-555-5555",
    "Zed": "111-111-1111"
  };

  for (let phnum in phoneBook) {
    //   console.log(phoneBook[phnum]);
      if (phoneBook[phnum] === "333-333-3333") {
          console.log(phnum);
      } else {
          console.log("no numbers matched");
      }
  }

  function consumeTwoPromises(){
    console.log("before promises");
    myPromise
        .then(function(firstRetrievedValue){
            return new Promise(function(resolve, reject){
                console.log("first retrived value: "+firstRetrievedValue);
                if(firstRetrievedValue){
                    resolve(firstRetrievedValue+"???")
                } else {
                    reject("firstRetrievedValue is falsey");
                }
            })
        })
        .then(function(secondRetrievedValue){ // will run if resolve() is called
            console.log("second retrieved value is:", secondRetrievedValue);
            // move console.log into the promise object chain
            console.log("after promises");
        }).catch(function(err){ // will run if reject() is called
            console.log("wah wah :( Error:", err);
        })
 
}

var valueToRetrieve = "!!!";
var myPromise = new Promise(myCallback);
consumeTwoPromises();

