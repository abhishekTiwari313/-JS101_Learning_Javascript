//print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 5
let sum=0;
for(let i=1; i<=15; i++){
    if(i%2==0 || i%5==0){
        sum=sum+i;
    }
    
}
console.log(sum);