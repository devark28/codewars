class Cube {
  constructor(s=0){
    this.setSide(s)
  }
  
  getSide() {
    return this.side; 
  }
  setSide(n=0) {
    this.side = Math.abs(n);
  }
}
