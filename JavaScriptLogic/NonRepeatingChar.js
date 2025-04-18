//Find First non-repeating character

function result(str){
   const count ={}
   for(let ch of str){
     count[ch] = (count[ch] || 0) + 1;
   }
   for(let ch of str){
      if(count[ch]===1)
        return ch;
   }
   return null;
}

const str = 'aabbceedd';
const opt = result(str);
console.log(opt);
