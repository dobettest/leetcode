function reverse(x: number): number {
    var s:number=0;
    var r:number=0;
    while(x!=0){
        r=x%10;
        x=parseInt((x/10) as any);
        s=s*10+r;
    }
    return s;
};
console.log(reverse(-123))