function sumOfABeach(beach) {
  const keywords = ['sand', 'water', 'fish', 'sun']
  let count = 0
  let pointer = 0
  let given = beach.toLowerCase()
  for(let pointer = 0; pointer < given.length; pointer++){
    keywords.forEach((keyword) => {
      let found = given.indexOf(keyword)
      if(found !== -1){
        count += 1
//         pointer += keyword.length-1
        console.log(keyword, ' in ', given)
        given = given.replace(keyword, '')
      }
    })
  }
  return count
}

// console.log(sumOfABeach("WAtErSlIde")) //                    ==>  1
// console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")) //    ==>  3
// console.log(sumOfABeach("gOfIshsunesunFiSh")) //             ==>  4
// console.log(sumOfABeach("cItYTowNcARShoW")) //               ==>  0
console.log(sumOfABeach("sunsunsunsun")) //                  ==>  4
// console.log(sumOfABeach("sAnDsandwaTerwatErfishFishsunsunsandwater")) //==>  10
