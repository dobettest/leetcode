function resove(date1:string,date2:string):number {
    var day=24*60*60*1000;
    return Math.abs((new Date(date1).valueOf()-new Date(date2).valueOf())/day)
}
console.log(resove("2020-01-15","2019-12-31"))//15