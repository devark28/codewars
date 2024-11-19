function cakes(recipe, available) {
  let possible_cakes = undefined;
  for(let [name, quantity] of Object.entries(recipe)){
    if(available[name] !== undefined){
      let items = available[name]/quantity
      if(!Number.isNaN(items) && items > 0){
        if(possible_cakes === undefined){
          possible_cakes = Math.trunc(items);
        }else{
          if(possible_cakes > items){
            possible_cakes = Math.trunc(items);
          }
        }
      }else{
        return 0;
      }
    }else{
      return 0;
    }
  }
  return possible_cakes;
}
