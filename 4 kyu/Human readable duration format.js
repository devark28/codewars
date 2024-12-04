function formatDuration (secs) {
  if(secs === 0){
    return 'now'
  }
  let years = Math.trunc(secs / (60*60*24*365));
  let days = Math.trunc(secs / (60*60*24)) - (years * 365);
  let hours = Math.trunc(secs / (60*60))   - (days * 24)    - (years * 365*24);
  let minutes = Math.trunc(secs / 60)    - (hours * 60)   - (days * 60*24)  - (years * 365*24*60);
  let seconds = Math.trunc(secs / 1)     - (minutes * 60) - (hours * 60*60) - (days * 60*60*24) - (years * 365*24*60*60);
//   timestamp_array
  return [
    {value: years, label: " year"},
    {value: days, label: " day"},
    {value: hours, label: " hour"},
    {value: minutes, label: " minute"},
    {value: seconds, label: " second"}
  ]
    .filter(comb => comb.value !== 0)
    .reduce((str, comb) => {
      return str
        + (comb.label !== " second" ? ", " : " and ")
        + comb.value
        + comb.label
        + (comb.value > 1 ? "s" : "")
  }, "").replace(/^(,\s)/, "").replace(/^(\sand\s)/, "").trim()
}

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))
console.log(formatDuration(15731080)) // '182 days, 1 hour, 44 minutes and 40s ...
console.log(formatDuration(9660900))

//   return [tsa[0], tsa[1]].join(", ") + ", " + [tsa[2], tsa[3]].join(" and ");
