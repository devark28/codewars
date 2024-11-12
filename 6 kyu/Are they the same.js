function comp(array1, array2){
    if(!array1 || !array2){
        return false;
    }
    for(let e1 of array1) {
        console.log(e1);
        console.log(array1, array2)
        const sq = e1 ** 2;
        let sq_index = array2.indexOf(sq);
        if(sq_index === -1){
            return false
        }
        array2 = array2.filter((_, i) => sq_index !== i)
    }
    return array2.length === 0;
}