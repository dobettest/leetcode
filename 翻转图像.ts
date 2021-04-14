function flipAndInvertImage(image: number[][]): number[][] {
    var row=image.length;
    var col=image[0].length;
    for(var i=0;i<row;i++){
        for(var j=0;j<Math.ceil(col/2);j++){
            var temp=image[i][j];
            image[i][j]=Math.abs(image[i][col-1-j]-1)
            image[i][col-1-j]=Math.abs(temp-1)
        }
    }
    return image;
};
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))//[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]