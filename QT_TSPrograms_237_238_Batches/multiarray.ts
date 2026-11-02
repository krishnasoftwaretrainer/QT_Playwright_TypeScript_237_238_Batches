let a:number[][]=[[1,2,3],[4,5,6],[7,8,9]];
declare var process:any;
//console.log(a);
for(let i=0;i<3;i++)
    {
    for(let j=0;j<3;j++)
        {
        // console.log(a[i][j]);
          process.stdout.write(a[i][j] +"  ");
          
    }
    console.log();
}   