const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 25 },
    { name: "Frank", age: 40 }
];

//Print all the name having same age

const answer = people.reduce((acc, curr)=>{
   if(acc[curr.age]){
       acc[curr.age].push(curr.name)
   }
   else{
       acc[curr.age] = [curr.name]
   }
},{});

console.log(answer);
