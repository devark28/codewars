function capMe(names) {
  return names.map(n => n.toLowerCase().replace(/^(\w)/, (c) => c.toUpperCase()));
}
