const arr = [1, 5, 2, 4, 3, 6, 7, 9];
const n = 9

// find the missing number in this array

const ExpectedSum = n*(n+1)/2;
let arraySum=0;

for(let i=0; i<arr.length; i++){
    arraySum+=arr[i];
}

console.log(ExpectedSum-arraySum);  