var maximumLength = function (s) {
    console.log(s)
    const characters = [...new Set(s)].map(c => ({base: c}))
    // console.log(characters)
    const occurences = characters.map((char) => {
        const found = {}
        for (let i = s.length; i > 0; i--) {
            const str = char.base.repeat(i)
            for(let j = 0; j < s.length; j++){
                if(s.indexOf(str, j) !== -1){
                    found[i] = found[i] ? found[i].concat(s.indexOf(str, j)) : [s.indexOf(str, j)]
                    // found[i] = found[i] ? ++(found[i]) : 1
                }
            }
        }
        // console.log(found)
        const cleaned = Object.fromEntries(Object.entries(found).map(([k,v])=>([k,[...new Set(v)]])))
        // console.log(cleaned)
        const filtered = Object.entries(cleaned).filter(e => e[1].length >= 3)
        // const sorted = filtered.sort((a,b)=>a[1].length-b[1].length)
        const sorted = filtered.sort((a,b)=>Number(b[0])-Number(a[0]))
        // console.log(sorted)
        // console.log(Object.fromEntries(sorted))
        char.repetitions = Number(sorted?.[0]?.[0]) || -1
        char.occurences = (sorted?.[0]?.[1] || []).length
        char.found_at = sorted?.[0]?.[1] || []
        return char
    })
    // console.log(occurences)
    const reduced = occurences.filter(
            (occu) => (occu.repetitions > 0 && occu.occurences > 0))
    // console.log(reduced)
    const biggest = reduced.reduce(
            (big, occu) => {
                // console.log(big)
                // console.log(occu)
                return Math.max(big.repetitions, occu.repetitions) !== big.repetitions ? occu : big
            },
        reduced[0])
    console.log(biggest)
    // const biggest = Math.max(...reduced)
    // console.log(biggest)
    return biggest?.repetitions || -1
};
console.log(maximumLength('aaaa'))
console.log(maximumLength('aaaabb'))
console.log(maximumLength('abcdef'))
console.log(maximumLength('abcaba'))
console.log(maximumLength('fafff'))
console.log(maximumLength('aaauuuxxxx'))
console.log(maximumLength('azzyyyyyyy'))
