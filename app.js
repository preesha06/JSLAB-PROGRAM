let target = Math.floor(Math.random()*100)
let  count = 0


function playgame(){
    let guess = parseInt(document.getElementById("main").value)
    count ++;

    if(guess < target){
        document.getElementById("feedback").innerText="Number is too low"

    }
    else if(guess > target){
        document.getElementById("feedback").innerText="Number is too high"

    }
    else{
        document.getElementById("feedback").innerText="Number is correct"
        document.getElementById("attempts").innerText="Number of attempts:" + count
    }
}
