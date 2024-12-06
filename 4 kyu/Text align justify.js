function justify(text, width) {
  return text.split(" ").reduce((combo, word, i) => {
    if(combo.lines[combo.current]){
      if(combo.lines[combo.current].length + word.length + 1 < width){
        combo.lines[combo.current] += " " + word
      }else{
        combo.current += 1
        combo.lines[combo.current] = word
      }
    }else{
      combo.lines[combo.current] = word
    }
    return combo
  }, {lines: [], current: 0}).lines.join("\n")
}
console.log(justify('123 45 6', 7))
console.log("--------")
console.log('123  45\n6')
