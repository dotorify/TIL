// Test Result: 100% (100/100)
// Report:  https://codility.com/demo/results/training4MDBYV-MPH/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    var len = A.length + 1;
    
    var validEl = (1+len)*len/2;
    var invalidEl = 0;
    for (var i = 0; i < A.length; i++) {
        invalidEl += A[i];
    }
    return validEl - invalidEl;
}
