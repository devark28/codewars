class Cube{
  constructor(length){
    this.length = length;
  }
  get volume(){
    // return this.length ** 3;
    return Math.pow(this.length, 3);
  }
  set volume(volume){
    // this.length = volume ** (1/3);
    this.length = Math.cbrt(volume);
  }
  get surfaceArea(){
    // return 6 * (this.length ** 2);
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(area){
    this.length = Math.sqrt(area / 6);
  }
}
