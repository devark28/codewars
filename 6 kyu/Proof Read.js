function proofread (str) { 
  return str.toLowerCase().replaceAll(/ie/g, 'ei').replaceAll(/^\w|\.\s(\w)/g, (s) => s.toUpperCase());
}
console.log(proofread("ShE deCIeved HiM.")); // "She deceived him."
