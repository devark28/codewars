function minValue(values){
  return +([...new Set(values)].sort().join(""))
}
