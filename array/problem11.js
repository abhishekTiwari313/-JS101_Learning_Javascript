//find the maximum in an array 

let arr = [ 10,30, 5, 32, 50, 45]

// Maximum ==>50

let notebook = 0;
for(let i=0; i<=arr.length-1; i++){
    if(arr[i]>notebook){
        notebook=arr[i];
    }
    
}
console.log(notebook);
