function cakes(recipe, available) {
  return Object.entries(recipe).reduce((possible_cakes, [name, quantity]) => {
    return Math.min(possible_cakes, Math.trunc(available[name]/quantity)) || 0;
  }, Infinity);
}
