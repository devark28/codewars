function getCount(words) {
  console.log(words)
  if(!words || !words?.split){
    return {vowels: 0, consonants: 0};
  }
  return words.split('').reduce((prev, letter) => {
    if(letter.match(/[aiuoe]/i)){
      prev.vowels++;
    }else if(letter.match(/[a-y]/i)){ // my last letter doesnt't work hence the y
      prev.consonants++;
    }
    return prev;
  }, {vowels: 0, consonants: 0})
}
