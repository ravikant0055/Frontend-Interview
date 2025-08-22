console.log(("6"/"3")==2);   // output: true
console.log(("6"/"3")===2);  // output: true
console.log(5 == "5");      v// outout : true
console.log(5 === "5");      // outout : false

console.log(NaN===NaN);     // output: false NaN is not equal to anything even itself 
console.log(NaN==NaN);      // output: false 

console.log(a);             //output : undefined
var a = 5;                 
console.log(a);             //output : 5

console.log(a);             //output : Error
let a = 5;                 
console.log(a);            

console.log(1+2+"3");       // output : 33
console.log("1"+2+3);       // output : 123
console.log(1+"2"-1);       // output : 11

console.log(true + false);  // output : 1
console.log([] == []);      // output : false  --Because no same referance
console.log([] + false);    // output : false   --empty [] == "" so "" + false = false
console.log([] + {});       // output : [object, object]  --empty [] == "" and emply {} == "[object,object]"

console.log(!!"");          // output : false  --empty "" is falsy value in js so !""==true and !!""==false
console.log(!!" ");         // output : true   --string " " with space is not empty so it is true

console.log(parseInt("10px"));   // output : 10 

console.log(0.1 + 0.2 === 0.3);  // output : false  --JS uses floating-point arithmetic so 0.1 + 0.2 = 0.30000000000000004 

console.log(typeof null);   // output : object
console.log(typeof NaN);    // output : number
console.log(typeof undefined == typeof null);  //output : false


