function cakes(recipe, available) {
  return Object.entries(recipe).reduce((possible_cakes, [name, quantity]) => {
    let items = available[name]/quantity
    if(!Number.isNaN(items)){
      return Math.min(possible_cakes, Math.trunc(items))
    }else{
      return 0;
    }
  }, Infinity);
}
