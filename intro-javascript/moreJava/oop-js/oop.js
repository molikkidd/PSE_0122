/**
 * Accessing Github API
 * @todo using fetch
 * @todo make 2 examples of how to get data ( .then() vs async/await )
*/

// .then()
// const getRomeData = function () {
//     fetch('https://api.github.com/users/romebell')
//     .then(responseFromGithub => {
//         console.log('response:', responseFromGithub); // {object} -> { status: 200, ok: true, ... }
//         if (responseFromGithub.status === 200) {
//             // return the json from response
//             return responseFromGithub.json(); // data -> {object}
//         }
//     })
//     .then(data => {
//         console.log('data:', data); // {object}
//         console.log('name:', data.name); // {string} -> Rome Bell
//         console.log('bio:', data.bio); // {string} -> Backend Engineer, Instructor
//     });
// }

// getRomeData();

// const getMoData = function () {
//     fetch('https://api.github.com/users/molikkidd')
//     .then(responseFromGhub => {
//         console.log('response :', responseFromGhub);
//         if (responseFromGhub.status === 200) {
//             return responseFromGhub.json();
//         }
//     })
//     .then(data => {
//         console.log('data :', data);
//         console.log('name :', data.name);
//         console.log('bio :', data.bio);
//     });
// }

// getMoData();

// // async/await
// async function getMoreData(username) {
//     // await for function ( fetch ) to return promise
//     let responseFromGithub = await fetch(`https://api.github.com/users/${username}`); // {object} -> { status: 200, ok: true, ... }
//     if (responseFromGithub.status === 200) {
//         const data = await responseFromGithub.json(); // {object}
//         console.log('data:', data);
//     }
// }
// getMoreData('molikkidd');

// async function getSomeMoreData(userNom) {
//     let githubResponse = await fetch(`https://api.github.com/users/${userNom}`);
//     if (githubResponse.status === 200) {
//         const data = await githubResponse.json();
//         console.log('data: ', data);
//     }
// }

// getSomeMoreData('RomeBell');

// Code Along js oop

// class Dog {

//     static totalDogs = 0;
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         Dog.totalDogs++;
//     }

//     barkHello() {
//         console.log(`woooff! I am a called ${this.name} and I am ${this.age} human-years old.`);
//         console.log(`There are ${Dog.totalDogs} dogs in this room!`);
//     }
// }

// const rocks = new Dog('Rocks', 3);
// // const shorty = new Dog('Shorty', 15);
//       rocks.barkHello();

// class Retriever extends Dog {
//     constructor(name, age) {
//         super(name, age);
//     }

//     fetch() {
//         console.log(`Woof! Here is the ball, you going to throw again or should I?`)
//     }
// }

// const lassie = new Retriever('Lass-Dog', 6);
//       lassie.barkHello();
//       lassie.fetch();


// OOOPPP EXERCISE

class BankAccount {

    static totalFunds = 0;
    static overdraftFees = 0;

    constructor (accountType, amount) {
        this.accountType = accountType
        this.amount = amount
        BankAccount.totalFunds++;
    }
    
    deposit(balance){
        console.log('you have made a deposit');
        if(balance < 0) {

            console.log('you should probably sell something');
        } else if (balance > 0) {
            console.log('you have money');
            balance += this.amount
            console.log(balance += this.amount);
        }
    }

    withdraw(balance) {
        console.log('you depleted your funds');

        if (balance < 0) {
            overdraftFees = -20;
           console.log(balance -= overdraftFees); 
        } else if (balance > 0) {
            balance -= this.depoWith
            console.log(balance -= this.depoWith);
        }
    }
}

class Account extends BankAccount {

    static balance = 0;
    // static overdraftFees = 0;

    constructor (accountType) {
        super(accountType);
        if(accountType === 'savings') {
            console.log('this is your savings account');
        }
        else if(accountType === 'checking') {
            console.log('this is your checking account');
        } else console.log('whats the issue here?');
    }  
    
    
}

// class ChildBankAccount {

// }


let afriBank = new BankAccount('savings', 80);
let crenshawBank = new Account('checking');
afriBank.deposit(80);
crenshawBank.deposit('checking', 80)