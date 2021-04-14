function resolve(n:number):string{
    var s="1";
    for(var i=1;i<n;i++){
        s=s.replace(/(\w\1)\1*/g,function(matched,r){
            return ""+matched.length+r
        })
    }
    return s;
}
console.log(resolve(4))