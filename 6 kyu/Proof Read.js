function proofread (str) { 
  return str.toLowerCase().replaceAll(/ie/g, 'ei').replaceAll(/^\w|\.\s(\w)/g, (s) => s.toUpperCase());
}


// console.log(proofread("ShE deCIeved HiM.")); // "She deceived him."
console.log(proofread("SHe rEcieveD a pIegNor. ShE deCIeved HiM.")); // "She received a peignor. She deceived him."
