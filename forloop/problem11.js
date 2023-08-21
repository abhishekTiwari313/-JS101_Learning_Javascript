//continue :- skip everything below me and go back to the starting of the loop 



//in while loop my compiler goes back to the condition when we used continue

// incase of for loop compiler will go back inc/dec statement

//while ==>  goes to condition 
//for ==>  inc/dec


let i =1;
while(i<=5){
    console.log(i);
    i++;
    if(i == 3){
        continue;
    }
}

for(let i=1; i<=5; i++){
    if(i==3){
        continue;
       }
   console.log(i);
   
}