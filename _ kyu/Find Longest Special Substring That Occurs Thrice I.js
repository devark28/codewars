var maximumLength = function (s) {
    // console.log(s)
    const characters = [...new Set(s)].map(c => ({base: c}))
    const characters_details = characters.map((char) => {
        const found = {}
        for (let i = 1; i <= s.length; i++) {
            const str = char.base.repeat(i)
            if(s.indexOf(str) !== -1){
                for(let j = 0; j < s.length; j++){
                    if(s.indexOf(str, j) !== -1){
                        found[i] = found[i] ? found[i].concat(s.indexOf(str, j)) : [s.indexOf(str, j)]
                    }
                }
            }else{
                break;
            }
        }
        const cleaned = Object.entries(found).map(([k,v])=>([k,[...new Set(v)]]))
        const filtered = cleaned.filter(e => e[1].length >= 3)
        const sorted = filtered.sort((a,b)=>Number(b[0])-Number(a[0]))
        char.repetitions = Number(sorted?.[0]?.[0]) || -1
        char.occurences = (sorted?.[0]?.[1] || []).length
        char.found_at = sorted?.[0]?.[1] || []
        return char
    })
    const highest_repetition_character = characters_details.reduce(
            (high, char) => {
                return Math.max(high.repetitions, char.repetitions) !== high.repetitions ? char : high
            },
        characters_details[0])
    return highest_repetition_character.repetitions
};
console.log(maximumLength('aaaa'))
console.log(maximumLength('aaaabb'))
console.log(maximumLength('abcdef'))
console.log(maximumLength('abcaba'))
console.log(maximumLength('fafff'))
console.log(maximumLength('aaauuuxxxx'))
console.log(maximumLength('azzyyyyyyy'))
