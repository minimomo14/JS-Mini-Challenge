let dotA = [0,3];
let dotB = [3,2];

let dotC = [5,2];
let dotD = [-1,0];

const logRectInfo = function (topLeft,bottomRight) {
    let x = bottomRight[0] - topLeft[0];
    let y = topLeft[1] - bottomRight[1];
    let area = x*y;
    let param = 2 * (x+y);
    
   console.log(`The area is = ${area}.`);
   console.log(`The length of the perimeter is = ${param}`);
   //debugger;

}

logRectInfo(dotA,dotB);
logRectInfo(dotC,dotD);
