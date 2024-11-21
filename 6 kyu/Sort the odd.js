// forfaited
function sortArray(array) {
    const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return array.map(num => {
        return (num % 2 !== 0) ? oddNumbers.shift() : num;
    });
}
