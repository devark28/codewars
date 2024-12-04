function formatDuration (secs) {
  let hours = Math.trunc(secs / 3600);
  let minutes = Math.trunc(secs / 60) - (hours * 60);
  let seconds = secs - (minutes * 60) - (hours * 3600);
  
  let result = "";
  if(hours > 1){
    result += `${hours} hours`
  }else if(hours > 0){
    result += `${hours} hour`
  }
  result += (minutes > 0 && hours > 0) ? ", " : ""
  if(minutes > 1){
    result += `${minutes} minutes`
  }else if(minutes > 0){
    result += `${minutes} minute`
  }
  result += (seconds > 0 && minutes > 0) ? " and " : ""
  if(seconds > 1){
    result += `${seconds} seconds`
  }else if(seconds > 0){
    result += `${seconds} second`
  }
  return result;
}

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))
