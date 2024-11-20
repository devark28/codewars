function toWeirdCase(string){
  return string.split(' ').map((w) => {
    return w.split('').map((c, i) => {
      return  i% 2 == 0 ?  c.toUpperCase() : c.toLowerCase()
    }).join('')
  }).join(' ');
}
