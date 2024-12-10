var maximumLength = function (s) {
    // console.log(s)
    const characters = [...new Set(s)].map(c => ({base: c}))
    const characters_details = characters.map((char) => {
        const found = {}
        for (let i = s.length; i > 0; i--) {
            const str = char.base.repeat(i)
            for(let j = 0; j < s.length; j++){
                if(s.indexOf(str, j) !== -1){
                    found[i] = found[i] ? found[i].concat(s.indexOf(str, j)) : [s.indexOf(str, j)]
                }
            }
        }
        const cleaned = Object.fromEntries(Object.entries(found).map(([k,v])=>([k,[...new Set(v)]])))
        const filtered = Object.entries(cleaned).filter(e => e[1].length >= 3)
        const sorted = filtered.sort((a,b)=>Number(b[0])-Number(a[0]))
        char.repetitions = Number(sorted?.[0]?.[0]) || -1
        char.occurences = (sorted?.[0]?.[1] || []).length
        char.found_at = sorted?.[0]?.[1] || []
        return char
    })
    const filtered_characters_details = characters_details.filter(
            (char) => (char.repetitions > 0 && char.occurences > 0))
    const highest_repetition_character = filtered_characters_details.reduce(
            (high, char) => {
                return Math.max(high.repetitions, char.repetitions) !== high.repetitions ? char : high
            },
        filtered_characters_details[0])
    return highest_repetition_character?.repetitions || -1
};
console.log(maximumLength('aaaa'))
console.log(maximumLength('aaaabb'))
console.log(maximumLength('abcdef'))
console.log(maximumLength('abcaba'))
console.log(maximumLength('fafff'))
console.log(maximumLength('aaauuuxxxx'))
console.log(maximumLength('azzyyyyyyy'))
