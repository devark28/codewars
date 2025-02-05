/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  console.log(this.dependency);
  let deps = func.toString()
    .match(/function(\s(\w|\d)*)(\((\w|,|\s)*\))/)[3]
    .replaceAll(/\(|\)/g, "")
    .split(",").map(d=>d?.trim())
    .filter(d=>d!==''); // .filter(Boolean); // We can also use this to to filter out empty strings
  console.log(deps);
  return () => func(...deps.map(d=>this.dependency[d]));
}
