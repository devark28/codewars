function collinearity( x1,y1, x2,y2 ) {
    if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
        return true;
    }else{
        return x1 * y2 - y1 * x2 === 0
    }
}