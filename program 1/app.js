function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

if(isNaN(num1) || isNaN(num2)){
    result = "Enter a valid Number"
}

else{
switch(operation){

    case "add":
        result = num1 + num2 ;
        break;


    case "subtraction":
        result = num1 - num2 ;
        break;

    case "multiplication":
        result = num1 * num2 ;
        break;
    
    case "division":
        if (num2 === 0){
            result = "Invalid number"
        }else{
            result = num1/num2;
        }

}
}

result = document.getElementById("result").innerText = "Result :"+ result 