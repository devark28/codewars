function comp(array1, array2){
    let result = false;

    for(let e1 of array1) {
        const sq = e1 ** 2;
        let sq_index = -1;
        for(let e2_i in array2){
            if(sq === array2[e2_i]){
                sq_index = e2_i;
                break;
            }
        }
        if(sq_index !== -1){
            result = true;
        }
    }

    return result;
}