function flipNumber(n)
{
  return ((input) => {
    return [...n].reduce((prev) => {
      return prev + input.reverse().shift();;
    }, "");
  })([...n]);
}
