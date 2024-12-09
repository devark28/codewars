function shiftedDiff(first,second){
  return (first.length !== second.length) ? -1 : (second + second).indexOf(first)
}
