function my_function(callback){
  console.log("i'm cb based")
  setTimeout(() => callback(), 1000);
}

// cbb(() => console.log("from your cb!"))

async function promisify(my_function, callback){
  return new Promise((resolve) => {
    return my_function(resolve)
  }).then(() => callback());
}

promisify(my_function, () => console.log("from your cb!"))
