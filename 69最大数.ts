function maximum69Number(num:number):number {
    var reg=/6/;
    var s=[num].join("");
    return parseInt(s.replace(reg,"9"))

}
console.log(maximum69Number(9669))