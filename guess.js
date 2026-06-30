const min_num=1;
const max_num=100;
const rand_num = Math.floor(Math.random() * (max_num - min_num)) + min_num;
console.log(rand_num);
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess a number between ${min_num} and ${max_num}`);
    guess=Number(guess);

    if(guess<min_num || guess>max_num){
        window.alert("inavalid number ; try again!");
    }
    else if(isNaN(guess)){
        window.alert("inavalid number ; try again!");
    }
    else if(guess<rand_num){
        window.alert("LOW ONE! TRY AGAIN GREATER");
    }
    else if(guess>rand_num){
        window.alert("GREATER ONE! TRY AGAIN LOWER");
    }
    else{
        window.alert("HURREYY!! YOU MADE IT ");
        window .alert(`The Number is ${rand_num}`);
        running=false;
    }
    
}

