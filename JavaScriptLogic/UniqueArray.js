//Remove all the duplicate element from array 

const arr =  [1,2,4,3,5,6,7,8,9,3,4,6,7,3,9];

function result(arr){
    return [...new Set(arr)];
}

console.log(result);