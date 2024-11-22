Function.prototype.wrap = function(callback){
  const originalMethodReference = this;
  return (yourName, myName) => {
    return callback(originalMethodReference, yourName, myName);
  }
}
