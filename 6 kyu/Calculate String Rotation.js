function shiftedDiff(first,second){
  return (first.length !== second.length) ? -1 : ((first + first).indexOf(second) >= 0 ? (first.length - (first + first).indexOf(second)) % first.length : -1)
}
