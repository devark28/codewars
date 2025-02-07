class Person {
  constructor(fn='John', ln='Doe', ag=0, gd='Male'){
    this.firstName = fn;
    this.lastName = ln;
    this.age = ag;
    this.gender = gd;
  }
  sayFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${raceName}`;
  }
}
