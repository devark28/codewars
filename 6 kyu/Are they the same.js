function comp(array1, array2){
    let result = [];
    const arr1 = array1.filter((e, i) => array1.indexOf(e) !== i)
    const arr2 = array2.filter((e, i) => array2.indexOf(e) !== i)

    for(let e1 of arr1) {
        console.log(e1);
        const sq = e1 ** 2;
        let sq_index = -1;
        for(let e2_i in arr2){
            if(sq === arr2[e2_i]){
                console.log(sq, arr2[e2_i], sq === arr2[e2_i]);
                sq_index = e2_i;
                break;
            }
        }
        if(sq_index !== -1){
            result.push(true);
        }else {
            result.push(false)
        }
    }
    if(result.length !== arr1.length || result.length !== arr2.length){
        return false
    }
    return result.reduce((prev, curr) => prev && curr, true);
}