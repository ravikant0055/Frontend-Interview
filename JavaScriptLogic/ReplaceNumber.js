const arr = [0, 1, 0, 1, 1, 1, 0];

//Move all 0 to left and all 1 to right

let left = 0, right = arr.length-1;

while(left<right){
    if(arr[left]==0){
        left++;
    }
    else if(arr[right]==1){
        right--;
    }
    else{
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
}

console.log(arr); 