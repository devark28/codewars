function sortString(s){
  let codec = [...s].map((char, index) => ({
    char,
    index,
    code: ((ch, cd = ch?.toLowerCase()?.charCodeAt()) => (cd >= 97 && cd <= 122) ? cd : undefined)(char),
  }));
  let undefinedIndices = new Set([codec.reduce((acc, charDetails) => !charDetails.code ? acc.concat(charDetails.index) : acc, [])]);
  let groupedCodec = codec.reduce((acc, charDetails) => {
    acc[charDetails.code] = acc[charDetails.code] ? acc[charDetails.code].concat(charDetails) : [charDetails];
    return acc;
  }, {});
  let groupedCodecValues = Object.values(groupedCodec).flat();
//   let stitchedChars = groupedCodecValues.reduce((acc, charDetails, index, grpdCdcVal) => {
//     if(undefinedIndices[0] === index){
//       acc.push(grpdCdcVal.find((c) => c.index === undefinedIndices.shift())?.char);
//       acc.push(charDetails.char);
//     }else if(!undefinedIndices.includes(charDetails.index)){
//       acc.push(charDetails.char);
//     }
//     return acc;
//   }, []);
//   console.log(groupedCodecValues);
  let stitchedChars = [];
  let pointer = 0;
  while(pointer < groupedCodecValues.length-1){
    if(!undefinedIndices.has(pointer)){
      stitchedChars.push(groupedCodecValues[pointer].char);
      pointer++;
    }else if(groupedCodecValues[pointer].code){
//       stitchedChars.push(groupedCodecValues.find((chr) => chr.index === pointer)?.char);
      stitchedChars.push(groupedCodecValues.find((chr) => chr.index === pointer)?.char);
      undefinedIndices.delete(pointer);
    }
  }
  console.log(stitchedChars);
}
// sortString("cba")
// sortString("cCBbAa")
sortString("c b a")
