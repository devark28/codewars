/*
  Write a javascript function that displays a number every
  two seconds and stops displaying after 5 seconds
*/
function print_from(num){
  console.log("setting up...")
  const interval = setInterval(() => {
      console.log(num++);
    }, 2000);
  setTimeout(() => {
    clearInterval(interval)
    console.log("cleaning up...")
  }, 5000);
}

print_from(1)

/*
  Write a function that takes a URL and fetches data from
  that URL but aborts when the request takes more than 10ms
*/
async function abort_in_2(url){
  return new Promise((resolve, reject) => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if(!res.ok){
          throw new Error("http error with code "+res.status);
        }
        return res.json()
      })
      .then(data => resolve(data))
      .catch((e) => reject(e));
    setTimeout(() => {
       abortController.abort()
       reject("request timed out!")
    }, 2000)
  })
}

abort_in_2("https://jsonplaceholder.typicode.com/todos")
.then((d) => console.log(d))
.catch((e) => console.log(e))


function abort_in_2_1(url){
  const {promise, resolve, reject} = Promise.withResolvers();
  const abortController = new AbortController();
  fetch(url, { signal: abortController.signal })
    .then((res) => {
      if(!res.ok){
        throw new Error("http error with code "+res.status);
      }
      return res.json()
    })
    .then(data => resolve(data))
    .catch((e) => reject(e));
  setTimeout(() => {
     abortController.abort()
     reject("request timed out!")
  }, 2000)
  return promise
}

abort_in_2_1("https://jsonplaceholder.typicode.com/todos")
.then((d) => console.log(d))
.catch((e) => console.log(e))
