const arr=[1,2,3,4,5,6,7,8,9];

Array.prototype.myfilter = function(callback, thisArgs){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(callback.call(thisArgs,this[i],i)){
            result.push(this[i]);
        }
    }
    return result;
}

const output = arr.myfilter((item)=>item%2==0);
console.log(output);