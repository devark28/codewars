var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count < 0){
      return `${count}<0`;
    }
    let sum = 0;
    let preview = '';
    for(let i = 0; i <= count; i++){
      sum += i;
      preview += i + (i === count ? '' : '+');
    }
    preview += (sum > 0 ? ' = ' : '=') + sum;
    console.log(preview);
    return preview;
  };

  return SequenceSum;

})();
