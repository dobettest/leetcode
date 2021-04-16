function soup(arr:number[]){
    var len=arr.length;
    for(var i=0;i<len-1;i++)
        for(var j=i+1;j<len;j++){
            if(arr[i]>arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
   return arr;
}