class Cube {
  constructor(s){
    this.side = s ? Math.abs(s) : 0
  }
  
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
