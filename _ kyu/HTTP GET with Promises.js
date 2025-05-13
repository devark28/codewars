function just_fetch(url){
  return new Promise((res, rej) => {
    fetch(url)
    .then((r) => {
      if(!r.ok){
        throw new Error("Not cool! " + r.status)
      }
      return r.json()
    })
    .then((d) => res(d))
    .catch((e) => rej(e))
  });
}
just_fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((d) => console.log(d))
  .catch((e) => console.log(e.message))
