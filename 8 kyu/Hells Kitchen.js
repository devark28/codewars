function gordon(a){
  return a.split(' ').map((w) => {
    return [...w.toUpperCase()].map((c) => {
      if(['U','I','O','E'].includes(c)){
        return '*'
      }else if(c === 'A'){
        return '@'
      }else{
        return c
      }
    }).join('') + '!!!!'
  }).join(' ')
}
