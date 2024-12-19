function sumOfABeach(beach) {
  const keywords = ['sand', 'water', 'fish', 'sun']
  let count = 0
  let given = beach.toLowerCase()
  while(keywords.some(w => given.indexOf(w) !== -1)){
    keywords.forEach((keyword) => {
      let found = given.indexOf(keyword)
      if(found !== -1){
        count += 1
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
