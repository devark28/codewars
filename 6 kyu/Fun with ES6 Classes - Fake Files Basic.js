class File {
  #getsPosition = 0;
  #getcPosition = 0;
  #fullName;
  #filename;
  #extension;
  #contents;
  constructor(fullName, contents){
    this.#fullName = fullName;
    this.#filename = fullName.match(/(.+)\.(\w+)/)[1];
    this.#extension = fullName.match(/(.+)\.(\w+)/)[2];
    this.#contents = contents;
  }
  get fullName(){
    return this.#fullName;
  }
  get filename(){
    return this.#filename;
  }
  get extension(){
    return this.#extension;
  }
  getContents(){
    return this.#contents;
  }
  write(str){
//     this.#contents += '\n' + str;
//     this.#contents = this.#contents.trim();
    this.#contents += (this.#contents ? '\n' : '') + str;
  }
  gets(){
    return this.#contents.split('\n')[this.#getsPosition++];
  }
  getc(){
    return [...this.#contents][this.#getcPosition++];
  }
}

var example = new File("example.txt", "An example file");
console.log(example);
console.log(example.fullName, example.filename, example.extension);
console.log(example.fullName = 'Haah');
console.log(example.fullName); // example.txt
