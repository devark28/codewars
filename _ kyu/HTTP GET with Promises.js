function just_fetch(){
  return fetch("https://jsonplaceholder.typicode.com/");
}

just_fetch().then((d) => console.log(d))
