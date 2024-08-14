const output = document.getElementById('output');
let lastInput='';
document.addEventListener('keydown', (event) => {
    console.log(event.key); 
    switch(event.key){
        case '1':appendToDisplay('1');break;
        case '2':appendToDisplay('2');break;
        case '3':appendToDisplay('3');break;
        case '4':appendToDisplay('4');break;
        case '5':appendToDisplay('5');break;
        case '6':appendToDisplay('6');break;
        case '7':appendToDisplay('7');break;
        case '8':appendToDisplay('8');break;
        case '9':appendToDisplay('9');break;
        case '0':appendToDisplay('0');break;
        case '+':operation('+');break;
        case '-':operation('-');break;
        case '*':operation('*');break;
        case '/':operation('/');break;
        case '.':operation('.');break;
        case '=':calculate();break;
        case 'Backspace':clearDisplay();break;
        default:break;
    }
  });
function appendToDisplay(input){
    output.value+=input;
    console.log(`Display: ${output.value}`);
}
function operation(input){
    if(input!==lastInput && output.value){
        lastInput=input;
        appendToDisplay(input);
    }
}
function calculate(){
    try{
        output.value=eval(output.value);
        console.log(`Output: ${output.value}`);
    }
    catch(e){
        output.value='Error!';
    }
}
function clearDisplay(){
    output.value='';
}