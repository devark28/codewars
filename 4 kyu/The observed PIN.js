function getPINs(observed) {
    let adjacent = [];
    observed.split("").forEach((num) => {
        if(adjacent.length === 0){
            adjacent = getNeighbours(num);
        }else{
            adjacent = adjacent.flatMap(adj => {
                return getNeighbours(num).map(nei => adj + nei)
            })
        }
    });
    adjacent = adjacent.filter((comb, index) => index === adjacent.indexOf(comb))
    return adjacent;
}

function getNeighbours(number){
    switch(number){
        case "1":
            return ["1", "4", "2"]
        case "2":
            return ["2", "1", "3", "5"]
        case "3":
            return ["3", "2", "6"]
        case "4":
            return ["4", "1", "5", "7"]
        case "5":
            return ["5", "2", "4", "6", "8"]
        case "6":
            return ["6", "3", "5", "9"]
        case "7":
            return ["7", "4", "8"]
        case "8":
            return ["8", "5", "7", "9", "0"]
        case "9":
            return ["9", "6", "8"]
        case "0":
            return ["0", "8"]
    }
}

// console.log(getPINs("8"), "**");
// console.log(["5", "7", "8", "9", "0"], "<-")