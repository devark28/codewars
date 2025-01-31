function formatDuration (secs) {
  if(secs === 0){
    return 'now'
  }
  let years = Math.trunc(secs / (60*60*24*365));
  let days = Math.trunc(secs / (60*60*24)) - (years * 365);
  let hours = Math.trunc(secs / (60*60))   - (days * 24)    - (years * 365*24);
  let minutes = Math.trunc(secs / 60)    - (hours * 60)   - (days * 60*24)  - (years * 365*24*60);
  let seconds = Math.trunc(secs / 1)     - (minutes * 60) - (hours * 60*60) - (days * 60*60*24) - (years * 365*24*60*60);
  return [
    {value: years, label: " year"},
    {value: days, label: " day"},
    {value: hours, label: " hour"},
    {value: minutes, label: " minute"},
    {value: seconds, label: " second"}
  ]
    .filter(comb => comb.value !== 0)
    .reduce((str, comb, index, arr) => {
      return str
        + (index !== (arr.length - 1) ? ", " : " and ")
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


function _formatDuration(seconds){
  let output = ((timer) => {
    let years = Math.floor(timer/31536000);
    let days = Math.floor(timer/86400 - years * 365);
    let hours = Math.floor(timer/3600 - days * 24 - years * 8760);
    let minutes = Math.floor(timer/60 - hours * 60 - days * 1440 - years * 525600);
    let seconds = timer - minutes * 60 - hours * 3600 - days * 86400 - years * 31536000;
    
    switch (true) {
      case timer === 0:
        return 'now';
      case timer >= 1 && timer <= 59:{
        return `${seconds} seconds`
      }
      case timer >= 60 && timer <= 3599:{
        return `${minutes} minutes and ${seconds} seconds`
      }
      case timer >= 3600 && timer <= 86399:{
        return `${hours} hours, ${minutes} minutes and ${seconds} seconds`
      }
      case timer >= 86400 && timer <= 31535999:{
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
      }
      case timer >= 31536000:{
        return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
      }
      default:
        return "we have no answer for this please!"
    }
  })(seconds);
  
  return output
    .replaceAll(/, \d+ minutes and 0 seconds/g, (match, og) => {
      return ` and${match.slice(1)}`;
    })
    .replaceAll(/(,|and)? 0 (seconds|minutes|hours|days|years)/g, "")
    .replaceAll(/(\s|^)1 (seconds|minutes|hours|days|years)/g, (match, grp, og) => {
      return match.slice(0, match.length-1);
    }).trim();
  // return output
}

// console.log(format(-1));
// console.log(format(0));
// console.log(format(1));
// console.log(format(34));
// console.log(format(59));
// console.log(format(60));
// console.log(format(64));
// console.log(format(125));
// console.log(format(3533));
// console.log(format(3599));
// console.log(format(3600));
// console.log(format(3662));
// console.log(format(15731080));
// console.log(format(132030240));
// console.log(format(253374061));
