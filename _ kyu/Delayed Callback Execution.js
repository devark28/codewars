function delay2seconds(callback){
  console.log("the other is 2 seconds away")
  setTimeout(() => callback(), 2000);
}

delay2seconds(() => console.log("from your cb!"))
