let rand_num = Math.floor(Math.random()*100)+1;

let count = 0;

let user_guess = document.getElementById("user_input");

let message = document.getElementById("mesg");
let message2 = document.querySelector("#mesg_tries");




function check(){
    let guess = parseInt(user_guess.value);
    count += 1;

    if(guess < 1 || guess > 100){
        alert("Your Guess should be between 1 to 100 !!");
    }
    
    else{
        if(guess == rand_num){
             message.innerHTML = "Congrats you guess the Correct Number !";
             message2.textContent = "Number of tries is: " + count;
        
             message.style.color = "green";
             message2.style.color = " green";
        }
        else{
             if(guess > rand_num ){
                 message.innerHTML = "Your number is TOO BIG !";
                 message.style.color = "red";
             }
             else{
                 message.innerHTML = "Damn your number is Too SMALL !!";
                 message.style.color = "red"; 
             }
        }
    
   }
}




function reset_Game(){
    rand_num = Math.floor(Math.random()*100)+1;
    
    message.innerHTML = "";
    user_guess.value = "";
    
    count = 0;
    
    alert("I wish you All the Best for your New Try !!");
}







