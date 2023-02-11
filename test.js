const reg=/([a-zA-Z]+)(?=\s)?/g
const str="capiTalIze tHe titLe";
console.log(str.replace(reg,(raw,$1)=>$1))