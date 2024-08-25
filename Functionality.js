let answerScreen = document.querySelector(".answer"); 
let innerAnswer = document.getElementById("theAnswer"); 
innerAnswer.innerText = "Display";
let display = document.querySelector(".display"); 
//Now first we want what ever btn i press to be displayed on the main top screen  
let addActive = false; 
let diffActive = false; 
let multActive = false; 
let divideActive = false;
let expoNent = false;  
let float = false; 

var value = " "; 
let firstvalue = 0; 
let lastValue = 0; 
let base = " "; 
let expo = " "
let sum = 0;  
const num7 = document.querySelector(".num7"); 
    num7.addEventListener("click", function(){
        value += num7.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num8 = document.querySelector(".num8"); 
    num8.addEventListener("click", function(){
        value += num8.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num9 = document.querySelector(".num9"); 
    num9.addEventListener("click", function(){
        value += num9.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num6 = document.querySelector(".num6"); 
    num6.addEventListener("click", function(){
        value += num6.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num5 = document.querySelector(".num5"); 
    num5.addEventListener("click", function(){
        value += num5.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num4 = document.querySelector(".num4"); 
    num4.addEventListener("click", function(){
        value += num4.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num3 = document.querySelector(".num3"); 
    num3.addEventListener("click", function(){
        value += num3.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num2 = document.querySelector(".num2"); 
    num2.addEventListener("click", function(){
        value += num2.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num1 = document.querySelector(".num1"); 
    num1.addEventListener("click", function(){
        value += num1.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })
    const num0 = document.querySelector(".num0"); 
    num0.addEventListener("click", function(){
        value += num0.innerText ; //This will help us see is the click function works
        innerAnswer.innerText = value;
    })

    const periodBtn = document.querySelector(".periodBtn"); 
    periodBtn.addEventListener("click", function(){
        value += periodBtn.innerText; //This will help us see is the click function works
        innerAnswer.innerText = value;
        float = true; 
    })
    //These have different functions but will get the that later on the day. 
    const exponetialBtn = document.querySelector(".exponetialBtn"); 
    exponetialBtn.addEventListener("click", function(){
        base = innerAnswer.innerText; 
        value += exponetialBtn.innerText; 
        innerAnswer.innerText = value;
        expoNent = true; 
    })
    
    const clearBtn = document.querySelector(".clearBtn"); 
    clearBtn.addEventListener("click", function(){
        value = " ";
        innerAnswer.innerText = "Display";
        firstvalue = 0; 
        lastValue = 0; 
        answerScreen.innerText = "Answer:";
    })

    //Deals with the addtion of values 
    const additionBtn = document.querySelector(".additionBtn");
    additionBtn.addEventListener("click", function(){
        value = innerAnswer.innerText; 
        if (!addActive){
            if(value == "Display"){
                firstvalue = sum;     
            }
            else if(expoNent){
                firstvalue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else{
                if(float){
                    firstvalue = parseFloat(value);
                }
                else
                    firstvalue = parseInt(value, 10); 
            }
        }
        else if (addActive && value == "Display"){
            sum += 0; 
        }
        else{

            if(float){
                firstvalue += parseFloat(value);
            }
            else if(expoNent){
                firstvalue += exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                firstvalue += parseInt(value, 10); 
        }
        addActive = true;
        diffActive = false;
        multActive = false;
        divideActive = false; 
        expoNent = false; 
        value = " "; 
        innerAnswer.innerText = "Display";
        answerScreen.innerText = firstvalue;

    })
    
    //Deals with the difference of values 
    const differenceBtn = document.querySelector(".differenceBtn"); 
    differenceBtn.addEventListener("click", function(){
        value = innerAnswer.innerText; 
        if (!diffActive){
            if(value == "Display"){
                firstvalue = sum;     
            }
            else{
                if(float){
                    firstvalue = parseFloat(value);
                }
                else if(expoNent){
                    firstvalue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
                }
                else
                    firstvalue = parseInt(value, 10); 
            }
        }
        else if (diffActive && value == "Display"){
            sum -= 0; 
        }
        else{
            if(float){
                firstvalue -= parseFloat(value);
            }
            else if(expoNent){
                firstvalue -= exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                firstvalue -= parseInt(value, 10);  
        }
        diffActive = true;
        addActive = false; 
        multActive = false;
        divideActive = false; 
        expoNent = false; 
        value = " "; 
        innerAnswer.innerText = "Display";
        answerScreen.innerText = firstvalue;
    })

    //Deals with the divisions of values 
    const divideBtn = document.querySelector(".divideBtn"); 
    divideBtn.addEventListener("click", function(){
        value = innerAnswer.innerText; 
        if (!divideActive){
            if(value == "Display"){
                firstvalue = sum;     
            }
            else{
                if(float){
                    firstvalue = parseFloat(value);
                }
                else if(expoNent){
                    firstvalue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
                }
                else
                    firstvalue = parseInt(value, 10); 
            }
        }
        else if (divideActive && value == "Display"){
            sum += 0; 
        }
        else{
            if(float){
                firstvalue /= parseFloat(value);
            }
            else if(expoNent){
                firstvalue /= exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                firstvalue /= parseInt(value, 10);  
        }
        diffActive = false;
        addActive = false; 
        multActive = false;
        divideActive = true; 
        expoNent = false; 
        value = " "; 
        innerAnswer.innerText = "Display";
        answerScreen.innerText = firstvalue;
    })

    //Deals with the multiplication 
    const multiplicationBtn = document.querySelector(".multiplicationBtn"); 
    multiplicationBtn.addEventListener("click", function(){
        value = innerAnswer.innerText; 
        if (!multActive){
            if(value == "Display"){
                firstvalue = sum;     
            }
            else{
                if(float){
                    firstvalue = parseFloat(value);
                }
                else if(expoNent){
                    firstvalue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
                }
                else
                    firstvalue = parseInt(value, 10); 
            }
        }
        else if (multActive && value == "Display"){
            sum += 0; 
        }
        else{
            if(float){
                firstvalue *= parseFloat(value);
            }
            else if(expoNent){
                firstvalue *= exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                firstvalue *= parseInt(value, 10);  
        }
        diffActive = false;
        addActive = false; 
        multActive = true;
        divideActive = false; 
        expoNent = false; 
        value = " "; 
        innerAnswer.innerText = "Display";
        answerScreen.innerText = firstvalue;
    })

    //The eqaul sign btn
    const eqaulBtn = document.querySelector(".eqaulBtn"); 
    eqaulBtn.addEventListener("click", function(){
        value = innerAnswer.innerText; 

        if(addActive && value != "Display"){

            if(float){
                lastValue = parseFloat(value);
            }
            else if(expoNent){
                lastValue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                lastValue = parseInt(value, 10); 
            sum = firstvalue + lastValue; 
        }
        else if(diffActive && value != "Display"){
            if(float){
                lastValue = parseFloat(value);
            }
            else if(expoNent){
                lastValue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                lastValue = parseInt(value, 10); 
            sum = firstvalue - lastValue; 
        }
        else if(divideActive && value != "Display"){
            if(float){
                lastValue = parseFloat(value);
            }
            else if(expoNent){
                lastValue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                lastValue = parseInt(value, 10); 
            sum = firstvalue / lastValue; 
        }
        else if(multActive && value != "Display"){
            if(float){
                lastValue = parseFloat(value);
            }
            else if(expoNent){
                lastValue = exponent(parseInt(base, 10), parseInt(value.slice(base.length + 1))); 
            }
            else
                lastValue = parseInt(value, 10); 
            sum = firstvalue * lastValue; 
        }
        else if (expoNent && base.length > 0){
            firstvalue = parseInt(base, 10);  
            lastValue = parseInt(value.slice(base.length + 1)); 
            sum = exponent(firstvalue, lastValue); 
        }
        else{
            sum = parseInt(value, 10); 
        }
        addActive = false; 
        diffActive = false;
        divideActive = false;  
        multActive = false;
        float = false; 
        expoNent = false; 
        value = " ";
        innerAnswer.innerText = "Display";
        answerScreen.innerText = sum; 
    })
    //Delects 
    document.querySelector(".deleteDigit").addEventListener("click", ()=>{
        value = innerAnswer.innerText; 
        if(value != "Display"){

            value = value.substring(0, value.length - 1)
            innerAnswer.innerText = value;

        }
    })

    function exponent(base, expo){ 
        let temp = base; 
        for(let i = 1; i < expo; i++ ){
            temp *= base; 
        }

        return temp; 
    }
