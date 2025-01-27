const dictionary = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function numbersOfLetters(integer) {
  const toString = (int) => [...int.toString()].map(num=>dictionary[num]).join('');
  const collection = [toString(integer)];
  while(collection.at(-1) !== toString(collection.at(-1).length)){
    collection.push(toString(collection.at(-1).length));
  }
  return collection;
}
