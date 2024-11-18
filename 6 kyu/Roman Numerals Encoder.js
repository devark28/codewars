function solution(num){
  // Define Roman numeral mapping
    const romanMap = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'], 
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    
    // Build Roman numeral string
    let result = '';
    for (const [value, symbol] of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}
