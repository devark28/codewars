class Cuboid {
  constructor(...args){
    [this.length, this.width, this.height] = args;
  }
  get surfaceArea(){
    return 2 * (this.length * this.width + this.width * this.height + this.length * this.height);
  }
  get volume(){
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(l){
    super(l, l, l);
  }
}
