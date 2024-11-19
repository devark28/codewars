function cakes(recipe, available) {
  return Object.entries(recipe).reduce((possible_cakes, [name, quantity]) => {
    let items = available[name]/quantity
    return Math.min(possible_cakes, Math.trunc(items)) || 0;
  }, Infinity);
}
