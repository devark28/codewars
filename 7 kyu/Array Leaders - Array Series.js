function arrayLeaders(numbers){
  return numbers.reduceRight((acc, num, index) => {
    if(num > acc.sum){
      acc.leads.push(num);
    }
    acc.sum += num;
    return acc;
  }, {leads:[],sum:0}).leads.reverse();
}

// building an object directly
function _arrayLeaders(numbers){
  return numbers.reduceRight((acc, num) => {
    return ({leads: (num > acc.sum) ? acc.leads.concat(num) : acc.leads, sum: acc.sum + num});
  }, {leads:[],sum:0}).leads.reverse();
}
