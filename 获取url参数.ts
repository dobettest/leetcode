function getUrlParam(sUrl: string, sKey: string) {
    if (sUrl.indexOf("?")<0)
        return {}
    let [baseUrl, queryString] = sUrl.split("?");
    queryString=queryString.replace(/#\w+$/,"");
    let params = queryString.split("&");
    var obj = {};
    for (var i = 0; i < params.length; i++) {
        let [key, value] = params[i].split("=");
        if (obj.hasOwnProperty(key)) {
            var arr = obj[key];
            var temp = Array.isArray(arr) ? [...arr, value] : [arr, value]
            obj[key] = temp;

        } else {
            obj[key] = value;
        }
    }
    return sKey ? obj[sKey] : obj;
}
console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&key=4&a=#tata&test=4#hehe",""))