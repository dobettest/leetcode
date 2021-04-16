function solution(sub:string,str:string):number{
    var count=0;
    var len=sub.length;
    var i=str.indexOf(sub)
    while(i!=-1){
        count++;
        str=str.slice(i+len);
        i=str.indexOf(sub);
    }
    return count;
}
console.log(solution("a","adfeadea"))