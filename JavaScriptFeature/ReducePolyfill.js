const arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.myreduce = function(callback, initialValue){
    let acc = initialValue!==undefined ? initialValue : this[0];
    let startIndex = initialValue!==undefined ? 0 : 1;
    for( let i=startIndex; i<this.length; i++){
        acc = callback(acc,this[i],i)
    }
    return acc;

}

const output = arr.myreduce((acc, curr)=>acc+curr,0);
console.log(output);