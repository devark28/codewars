function permutations(string) {
  const permutations = [...string].map((char, index, array) => {
//     console.log('*>',array)
    return array.map((c, i) => {
      let arr = [...array]
      arr.splice(index, 1)
      arr.splice(i, 0, char)
//       console.log('--',arr)
      return arr.join('')
    })
  })
  console.log('*',permutations)
  console.log('&',[...new Set(permutations.flat())])
	return [...new Set(permutations.flat())];
}
