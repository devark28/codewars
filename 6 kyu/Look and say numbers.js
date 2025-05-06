function lookAndSay(data, len){
  return Array.from({length: len-1}).reduce((acc, n, i, arr) => {
    acc.push(nextRow(acc[acc.length-1]))
    return acc
  }, [nextRow(data)])
}

const nextRow = (currentRow) => {
  return [...currentRow.matchAll(/(\d)\1*/g)].map(m => m[0].length + m[0][0]).join("")
}
