const arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.mymap = function(callback, thisArgs){
    let result = [];
    for(let i=0; i<this.length; i++){
        result.push(callback.call(thisArgs,this[i],i));
    }
    return result;
}

const output = arr.mymap((item)=>item*2);
console.log(output);