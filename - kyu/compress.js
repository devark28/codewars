function compress(text){
  let result = text;
  
  [...new Set([...text])].forEach((c) => {
    const regex = new RegExp(`${c}+`, 'ig');
    
    result = result.replace(regex, (m) => {
      return `${c}${m.length}`;
    });
    
  });
  
  return result;
}

console.log(compress('AAAABBBCCDAA'))
