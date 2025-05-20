function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
}

/*
  For for readability also try
*/
function validPhoneNumber(phoneNumber){
  return RegExp(/^\(\d{3}\) \d{3}-\d{4}$/).test(phoneNumber);
}
