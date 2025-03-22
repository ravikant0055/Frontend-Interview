Function.prototype.mybind = function(context, ...args){
    const obj = this;
    return function (...newArgs){
       return obj.apply(context,[...args, ...newArgs]);
    }
}

function message(msg,name){
    console.log(msg," ", name);
}

const mymessgae = message.mybind(null,"Hello");
mymessgae("Ravi");