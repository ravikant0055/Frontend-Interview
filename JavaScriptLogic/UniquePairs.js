const arr = [1, 5, 2, 4, 8, 3, 6, 7, 9];
const k = 3;

//Find unique pair whole addition or subtraction would give output as 3,
//neglect if the pair is already taken

// O(n) Complexity
const seen = new Set();
const pairs = new Set();

for(let num of arr){
    if(seen.has(num-k)){
        pairs.add(JSON.stringify([num,num-k]));
        // pairs.add([num,num-k].sort().toString());
    }
    if(seen.has(num+k)){
        pairs.add(JSON.stringify([num,num+k]));
        // pairs.add([num,num+k].sort().toString());
    }
    seen.add(num);
}

const UniquePair = Array.from(pairs).map((pair)=>JSON.parse(pair));
// const UniquePair = Array.from(pairs).map((pair)=>pair.split(",").map(Number));
console.log(UniquePair);


// O(n²) Complexity
const ans = [];
for(let i=0; i<arr.length();i++){
    for(let j=0; j<arr.length();i++){
         if(arr[i]+arr[j]==k || Math.abs(arr[i]-arr[j]==k)){
            ans.push([arr[i],arr[j]])
         }
    }    
}

const UniqueArray = new Set();
for(const subArray of ans){
    const sortedStr = JSON.stringify(subArray.slice().sort());
    UniqueArray.add(sortedStr);
}

const result = Array.from(UniqueArray).map((pair)=>JSON.parse(pair));
console.log(result);

