Array.prototype.newMap = function(cb) {
    for(let ele of this){
        cb(`new map ${ele}`)
    }
};
['a', 1].newMap((ele) => {
    console.log(ele)
});
