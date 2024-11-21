decodeMorse = function(morseCode){
  return morseCode.trim().split("   ").map((word) => {
    return word.split(" ").map((char) => {
      return MORSE_CODE[char]
    }).join("")
  }).join(" ")
}
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
//should return "HEY JUDE"
