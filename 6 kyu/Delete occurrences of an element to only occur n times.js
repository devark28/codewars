function deleteNth(arr,n){
    let indexes = {};
    for(let el of arr){
        indexes[el] = arr.reduce((found,e) => {
            if(el == e){
                return found + 1
            }
            return found
        }, 0);
    }
    for(let el of arr){
        while(indexes[el] > n){
            arr.splice(arr.lastIndexOf(el), 1);
            indexes[el] -= 1;
        }
    }
    return arr
}
