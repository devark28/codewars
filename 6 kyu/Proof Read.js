// function proofread (str) { 
//   sentence = str.toLowerCase().replaceAll(/ie/g, 'ei').split('.').map(s => s ? s.trim()[0]?.toUpperCase()+s.trim().substr(1) : "").filter(s => !!s).join(". ");
//   return sentence;
// }
function proofread (str) { 
  sentence = str.toLowerCase().replaceAll(/ie/g, 'ei');
  console.log(sentence);
  sentence = sentence.replaceAll(/^\w|\.\s(\w)/g, (s)=>s.toUpperCase());
  return sentence;
}


// console.log(proofread("ShE deCIeved HiM.")); // "She deceived him."
console.log(proofread("SHe rEcieveD a pIegNor. ShE deCIeved HiM.")); // "She received a peignor. She deceived him."
