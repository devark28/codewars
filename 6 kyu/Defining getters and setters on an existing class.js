Object.defineProperty(Person.prototype, 'name', {
  get(){
    return this.firstName + ' ' + this.lastName;
  },
  set(name){
    [this.firstName, this.lastName] = name.split(" ");
  }
});

Object.defineProperty(Person.prototype, 'name', {
  get: this.prototype.getName,
  set(name){ [this.firstName, this.lastName] = name.split(" "); }
});

