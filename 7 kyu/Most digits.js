function findLongest(array){
  return array.reduce((prev, next) => {
    return (String(next).length > String(prev).length) ? next : prev
  }, array[0]);
}
