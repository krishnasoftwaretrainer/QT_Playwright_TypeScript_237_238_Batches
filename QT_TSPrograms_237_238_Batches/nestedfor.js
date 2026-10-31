"use strict";
/*
1   2   3   4   5

1   2   3   4   5

1   2   3   4   5

1   2   3   4   5

1   2   3   4   5  */
for (let i = 1; i <= 5; i++) //Rows 1 2 3 4 5
 {
    for (let j = 1; j <= 3; j++) //Columns 3 
     {
        //console.log(j); //Println 
        process.stdout.write(j + "  "); //Print
    }
    console.log(); //New Line
}
/* Explanation:
Outer Loop:
i=1;i<=5; 1<=5:True
Inner Loop:
j=1;j<=5; 1<=5:True
j++: 2<=5:True
j++: 3<=5:True
j++: 4<=5:True
j++: 5<=5:True
6<=5:False Inner
Outer Loop:
i++: 2<=5:True
Inner Loop:
j=1;j<=5; 1<=5:True
j++: 2<=5:True
j++: 3<=5:True
j++: 4<=5:True
j++: 5<=5:True
6<=5:False Inner
Outer Loop:
i++: 3<=5:True
Inner Loop:
j=1;j<=5; 1<=5:True
Outer Loop:
i++: 6<=5:False Outer

1    2   3   4   5
1   2   3   4   5
1   2   3   4   5
1   2   3   4   5
1   2   3   4   5

*/ 
