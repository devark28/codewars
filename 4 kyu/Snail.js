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
const N = array.length

function getCellsAtLevel(level){
    let results = Array((4*(array.length-(2*level)))-4)
    // console.log(results)
    for(let i=level; i<(N-level); i++){
        let N = (array.length-(2*level))
        x = level
        y = i
        
        // console.log([x, y])
        let p1 = i - level
        let p2 = ((4*N)-4) - (i - level)
        // console.log()
        // console.log([p1, p2])
        if(x !== y){
            // console.log(array[x][y])
            // console.log(array[y][x])
            
            results[p1] = array[x][y]
            results[p2] = array[y][x]
        }else{
            // console.log(array[y][x])
            
            results[p1] = array[x][y]
        }
    }
    for(let i=1+level; i<(N-level); i++){
        let N = (array.length-(2*level))
        x = i
        y = N-(1-level)
          
        // console.log([x, y])
        let p1 = N + (i - (1+level))
        let p2 = ((4*N)-4) - (N + (i - (1+level)))
        // console.log()
        // console.log([p1, p2])
        if(x !== y){
            // console.log(array[x][y])
            // console.log(array[y][x])
            
            results[p1] = array[x][y]
            results[p2] = array[y][x]
        }else{
            // console.log(array[y][x])
            
            results[p1] = array[x][y]
        }
    }
    return results
}

console.log(getCellsAtLevel(0).concat(getCellsAtLevel(1)))
// console.log(getCellsAtLevel(0))
// console.log(getCellsAtLevel(1))
// getCellsAtLevel(1)



