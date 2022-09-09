let display= document.querySelector('#Display-area');
let btnClear= document.querySelector('#btn-clear');
let btnClearLastAction= document.querySelector('#btn-clear-last-action');
let btnBackSpace= document.querySelector('#btn-back-space');
let btnDiv= document.querySelector('#btn-div');
let btnMul= document.querySelector('#btn-mul');
let btnMinus= document.querySelector('#btn-minus');
let btnPlus= document.querySelector('#btn-plus');
let btnPn= document.querySelector('#btn-pn');
let btnPoint= document.querySelector('#btn-point');
let btnEqual= document.querySelector('#btn-equal');

let btnNumbers=document.querySelectorAll('.num-btn');

let ifChosenPoint = false;
let number1, number2, result;
let operatorType = "";
let setResult = false;

btnClear.addEventListener('click', (e)=>{
    display.textContent = '0';
    ifChosenPoint = false;
    setResult = false;
    number1 = 0;
    number2 = 0;
});
btnClearLastAction.addEventListener('click', (e)=>{
    display.textContent = '0';
})

btnPlus.addEventListener('click', (e)=>{
    number1 = Number(display.textContent);
    display.textContent = '0';
    operatorType = "+";
})
btnMinus.addEventListener('click', (e)=>{
    number1 = Number(display.textContent);
    display.textContent = '0';
    operatorType = "-";
})
btnMul.addEventListener('click', (e)=>{
    number1 = Number(display.textContent);
    display.textContent = '0';
    operatorType = "*";
})
btnDiv.addEventListener('click', (e)=>{
    number1 = Number(display.textContent);
    display.textContent = '0';
    operatorType = "/";
})

btnEqual.addEventListener('click', (e)=>{
    if(setResult == false){
        number2 = Number(display.textContent);
    }else{
        number1 = Number(display.textContent);
    }
    

    switch(operatorType){
        case "+": 
        result = number1 + number2;
          break;
        case "-": 
        result = number1 - number2;
          break;
        case "*": 
        result = number1 * number2;
          break;
        case "/": 
        result = number1 / number2;
          break;
    }
    display.textContent = result;
    setResult = true;
})

btnBackSpace.addEventListener('click',(e)=>{
    let len = display.textContent.length;
    let lastDigit = display.textContent.substring(len-1 , len);
    if(len > 1){
        display.textContent = display.textContent.substring(0,len - 1);
    }else{
        display.textContent = '0';
    }
    if(lastDigit == '.'){
        ifChosenPoint = false;
    }
})

btnPn.addEventListener('click', (e)=>{
    display.textContent = display.textContent * -1;
})
btnPoint.addEventListener('click', (e)=>{
    if(ifChosenPoint == false){
        display.textContent += '.';
        ifChosenPoint = true;
    }
})


btnNumbers.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        // if(display.textContent == "0.0"){
        //     display.textContent= '';
        //     // console.log(display.textContent);
        //     // display.textContent = e.target.textContent;
        // }
        // else{
        //    display.textContent += e.target.textContent;
        // }
        // display.textContent = e.target.textContent;
        if(display.textContent == "0"){
            display.textContent = e.target.textContent;
            
        }
       else{
        display.textContent += e.target.textContent;
       }
        
    })
})
