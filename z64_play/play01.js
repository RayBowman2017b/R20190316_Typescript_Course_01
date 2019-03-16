
//  play01.js

let arr = [9,9,9];
// arr = [3,9,4];
// arr = [3,9,9];
console.log ("arr " + arr);
arr2 = ( parseInt(arr.toString().replace(/,/g, "")) + 1 )
        .toString()
        .split("")
        .map ( function(x) {return parseInt(x)} )﻿;
console.log (arr2);

const upByOne = (P_arr) => {
    let last = P_arr.length;
    let carry = 1, item = 0;
    let newarr = [];

    while (last)
        newarr.unshift( (item = P_arr[--last] + carry) > 9?
                                 ( () => { carry = 1; return 0 } ) ()
                              :  ( () => { carry = 0; return item } ) () );
    if(newarr[0] === 0) newarr.unshift(1);
    return newarr;
}

const upByOne2 = (P_arr) => {
    let last = P_arr.length;
    let carry = 1, item = 0;
    let newarr = [];

    while (last && carry)
        newarr.unshift( (item = P_arr[--last] + carry) > 9?
                                 ( () => { carry = 1; return 0 } ) ()
                              :  ( () => { carry = 0; return item } ) () );
    newarr = P_arr.splice(0, last).concat(newarr);
    if(newarr[0] === 0) newarr.unshift(1);
    return newarr;
}

 let testarr = [...arr];
 console.log ("testarr " + testarr);
 console.log (upByOne2 (testarr));
 testarr = [ 8, 9, 9 ];
 testarr = [ 2, 9, 3 ];
 console.log ("testarr " + testarr);
 console.log (upByOne2 (testarr));
 console.log ("==============================");

var addOne = function(source) {
 return Array.isArray(source) ?
  (Number.parseInt(source.join('')) + 1).toString().split('').map(Number)
   : source;
}﻿

//newarr = addOne(testarr);
newarr = addOne(arr);
console.log (newarr);

