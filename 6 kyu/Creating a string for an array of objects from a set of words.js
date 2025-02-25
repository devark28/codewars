function wordsToObject(input) {
  let output = input.replaceAll(/(\S+)\s(\S+)/g, (_, name, id) => {
//     console.log(name, id);
    return `{name : '${name}', id : '${id}'}`;
  }).replaceAll(/\}\s/g, "}, ");
  return `[${output}]`;
}
