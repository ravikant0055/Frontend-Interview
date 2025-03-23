Function.prototype.mycall = function(context, ...args){
    context = context || globalThis;
    const fn = Symbol();
    context[fn] = this;
    const result = context[fn](...args);
    delete context[fn];
    return result;

}

function greet(message){
    console.log(`${message}, ${this.name}`);
}

const people = {name: "Ravi"};

greet.mycall(people, "Hello");
