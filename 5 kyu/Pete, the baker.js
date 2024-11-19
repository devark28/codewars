function cakes(recipe, available) {
  console.log(recipe);
  console.log(available);
  console.log();
  let possible_cakes = undefined;
  for(let [name, quantity] of Object.entries(recipe)){
    console.log([name, quantity], " - ", available[name]);
    if(available[name] !== undefined){
      let items = available[name]/quantity
      console.log(items);
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
