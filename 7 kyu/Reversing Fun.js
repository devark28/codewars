function flipNumber(n)
{
//   let input = n.split("");
//   return n.split("").reduce((prev) => {
// //     input.reverse();
// //     prev += input.shift();
// //     prev += input.reverse().shift();
// //     prev = prev + input.reverse().shift();
//     return prev + input.reverse().shift();;
//   }, "");
  
  return ((input) => {
    return [...n].reduce((prev) => {
      return prev + input.reverse().shift();;
    }, "");
  })([...n]);
}
