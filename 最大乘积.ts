function maximumProduct(x: number[]):number{
    var len: number=x.length;
    if(len<3){
        return 0;
    }
    x.sort();
    return Math.max(x[0]*x[1]*x[2],x[len-1]*x[len-2]*x[len-3]);
}
console.log(maximumProduct([-1,-2,-3,1,2,3]))