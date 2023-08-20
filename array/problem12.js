let max = -Infinity;
let arr = [-2,-7,-1,-3,-4];
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);