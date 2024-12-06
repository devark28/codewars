function justify(text, width) {
  return text.split(" ").reduce((combo, word, i) => {
    if(combo.lines[combo.current]){
      if(
        combo.lines[combo.current].reduce((l, w) => l + w.length, 0) +
        word.length + 1 < width
      ){
        combo.lines[combo.current].push(word)
      }else{
        combo.lines[++combo.current] = [word]
      }
    }else{
      combo.lines[combo.current] = [word]
    }
    return combo
  }, {lines: [], current: 0}).lines.map(ln => {
    let missing_spaces = width - ln.reduce((l, w) => l + w.length, 0)
    return ln.reduce((str, w) => str + " ".repeat(missing_spaces) + w,"").trim()
  }).join("\n")
}
console.log(justify('123 45 6', 7))
console.log("--------")
console.log('123  45\n6')
