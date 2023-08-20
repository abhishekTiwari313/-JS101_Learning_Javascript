//print all the movie except Ghajani and Pushpa

let arr = ["BATMAN","RRR","PUSHPA","AVENGERS","GHAJINI","BLACK PANTHER","KGF 2"];


for(let i=0; i<=arr.length-1; i++){
    if(arr[i]=="GHAJINI" || arr[i]=="PUSHPA"){
        continue;
    }
    console.log(arr[i])
}