const generate = length => {
  return Array.from({ length }, () => [0, 1][Math.round(Math.random())]).join('');
};
