function sortArray(array) {
  // Extract and sort only the odd numbers
    const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    
    // Create a counter to track the current odd number
    let oddIndex = 0;
    
    // Map through the original array
    return array.map(num => {
        // If the number is odd, replace it with the next sorted odd number
        if (num % 2 !== 0) {
            return oddNumbers[oddIndex++];
        }
        // If the number is even, keep it the same
        return num;
    });
}
