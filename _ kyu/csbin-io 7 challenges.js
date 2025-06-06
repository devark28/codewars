// Challenge 1

function sayHello() {
  return setTimeout(() => console.log('Hello!'), 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Resolved!'), 1000);
});

// Should print out "Resolved!"
// promise.then(console.log)
promise.then((d) => console.log(d))


// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject('Rejected!');
})

// Should print out "Reject!"
// promise.catch(console.log)
promise.catch((d) => console.log(d))


// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve('Promise has been resolved!');
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");


// Challenge 5
async function delay(){
  const {promise,resolve,reject} = Promise.withResolvers();
  setTimeout(resolve, 1000);
  return promise;
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var secondPromise = Promise.resolve('Second!');
var firstPromise = Promise.resolve(secondPromise).then((d) => console.log(d))


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  Promise.all(Array.from({length: 3}, (_, i) => fakeAPICall(i)))
    .then((d) => console.log(d))
  setTimeout(() => console.log("Hello"), 1000);
}

getAllData();
