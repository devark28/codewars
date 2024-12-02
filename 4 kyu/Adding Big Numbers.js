// for some reason 'BigInt' was disabled
//   return (BigInt(a) + BigInt(b)).toString();
function add(a, b) {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');
  const result = [...a].reduceRight((result, digit, i) => {
    const digitSum = Number(digit) + Number(b[i]) + (result.carry || 0);
    return {
      carry: Math.floor(digitSum / 10),
      sum: (digitSum % 10) + result.sum
    };
  }, { sum: '', carry: 0 });
  return result.carry > 0 ? result.carry + result.sum : result.sum
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
// "91002328220491911630239667963"
