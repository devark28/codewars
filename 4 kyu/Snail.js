snail = function(array) {
  let results = []
  for(let i=0; i<(Math.ceil(array[0].length/2));i++){
    results = results.concat(getCellsAtLevel(array, i))
  }
  return results
}

function getCellsAtLevel(array, level){
    let results = Array((4*(array.length-(2*level)))-4)
    let N = (array.length-(2*level))
    for(let i=level; i<(array.length-level); i++){
        let x = level
        let y = i
        let p1 = i - level
        let p2 = ((4*N)-4) - p1
        
        if(x !== y){
            results[p1] = array[x][y]
            results[p2] = array[y][x]
        }else{
            results[p1] = array[x][y]
        }
    }
    for(let i=1+level; i<(array.length-level); i++){
        let x = i
        let y = N-(1-level)
        let p1 = N + (i - (1+level))
        let p2 = ((4*N)-4) - p1
        
        if(x !== y){
            results[p1] = array[x][y]
            results[p2] = array[y][x]
        }else{
            results[p1] = array[x][y]
        }
    }
    return results
}
