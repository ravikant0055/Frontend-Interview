Function.prototype.myapply =  function(context,args){
    context = context || globalThis;
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...(args || []));
    delete context[fn];
    return result;

} 

function greet(message, post){
    console.log(`${message}, ${this.name}, ${post}`);
}

const people = {name: "Ravi Kant"};
greet.myapply(people,["Hello", "SDE"]);