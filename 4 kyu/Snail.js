const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// const array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 11, 12, 13],
//     [14, 15, 16, 17]
// ]
function getCellsAtLevel(level){
    let results = Array((4*(array.length-(2*level)))-4)
    for(let i=level; i<(array.length-level); i++){
        let N = (array.length-(2*level))
        x = level
        y = i
        
        let p1 = i - level
        let p2 = ((4*N)-4) - (i - level)
        if(x !== y){
            results[p1] = array[x][y]
            results[p2] = array[y][x]
        }else{
            results[p1] = array[x][y]
        }
    }
    for(let i=1+level; i<(array.length-level); i++){
        let N = (array.length-(2*level))
        x = i
        y = N-(1-level)
        
        let p1 = N + (i - (1+level))
        let p2 = ((4*N)-4) - (N + (i - (1+level)))
        if(x !== y){
            results[p1] = array[x][y]
            results[p2] = array[y][x]
        }else{
            results[p1] = array[x][y]
        }
    }
    return results
}

let results = []
for(let i=0; i<(Math.ceil(array.length/2));i++){
  results = results.concat(getCellsAtLevel(i))
}
console.log(results)


