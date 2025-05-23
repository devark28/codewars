function getPINs(observed) {
    return [...new Set(observed.split("").reduce((prev, num) => {
        if (prev.length === 0) {
            return getNeighbours(num);
        } else {
            return prev.flatMap(adj => {
                return getNeighbours(num).map(nei => adj + nei)
            })
        }
    }, []))];
}

function getNeighbours(number) {
    const neighbourMap = {
        "1": ["1", "2", "4"],
        "2": ["1", "2", "3", "5"],
        "3": ["2", "3", "6"],
        "4": ["1", "4", "5", "7"],
        "5": ["2", "4", "5", "6", "8"],
        "6": ["3", "5", "6", "9"],
        "7": ["4", "7", "8"],
        "8": ["5", "7", "8", "9", "0"],
        "9": ["6", "8", "9"],
        "0": ["0", "8"]
    };

    return neighbourMap[number];
}

console.log(getPINs("8"), "**");
console.log(["5", "7", "8", "9", "0"], "<-")