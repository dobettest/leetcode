function climbStairs(n: number): number {
    if(n<=1){
        return n;
    }
    var f1:number=0;
    var f2:number=1;
    var r:number=0;
    for(var i=1;i<=n;i++){
        r=f1+f2;
        f1=f2;
        f2=r;
    }
    return r;
};
(function main(){
    console.log(climbStairs(90)) //21
})()