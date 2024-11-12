function comp(array1, array2){
    let result = [];

    for(let e1 of array1) {
        console.log(e1);
        const sq = e1 ** 2;
        let sq_index = -1;
        for(let e2_i in array2){
            console.log(sq, array2[e2_i], sq === array2[e2_i]);
            if(sq === array2[e2_i]){
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

    return result.reduce((prev, curr) => prev && curr, true);
}