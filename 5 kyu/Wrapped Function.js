Function.prototype.wrap = function(callback){
  return (yourName, myName) => {
    return callback(this, yourName, myName);
  }
}
