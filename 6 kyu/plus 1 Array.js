function upArray(arr){
  console.log(arr)
  arr = arr.reverse()
  if(!arr || arr.length === 0 || arr.find(num => (num < 0 || num >= 10))){
    return null
  }
  index = 0
  arr[index] += 1
  while(arr[index]){
    if(arr[index] >= 10){
      let remainder = arr[index] % 10
      let leading = Math.floor(arr[index] / 10)
      arr[index] = remainder
      arr[index+1] = arr[index+1] ? arr[index+1] + leading : leading
    }
    index++
  }
  return arr.reverse()
}

console.log(upArray([9, 9]))
console.log(upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]))
console.log(upArray([2,3,9,9]))
