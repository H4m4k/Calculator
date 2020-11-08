// main caluclator display
let display = document.querySelector('#display');

//keyboard - numbers, coma, positive, negative

let keyboard = document.querySelector('#keyboard');

//memory for calculations

let memory = 0;

keyboard.addEventListener('click' , e => {

  if (e.target.classList.contains('number') ) {

    if (display.textContent === '0') display.textContent = '';
    display.textContent += e.target.textContent

  } else if ( e.target.classList.contains('sign')) {  // change of sign by mutliplying with -1

    display.textContent *= -1;

  } 
});


//-- FUNCTIONS --

let functions = document.querySelector('#functions');

functions.addEventListener('click', e => {

  if ( e.target.textContent === 'C' ) display.textContent = '0'; // clear the display

  if ( e.target.textContent === 'x2' ) {
    let num = display.textContent ** 2;
    return screen(num);
  }// exponent w/screen Function
  
  if ( e.target.classList.contains('sqrt')) {
    let num = Math.sqrt(display.textContent);
    return screen(num);
  } // square root w/screen Function
  
  });



  
  // DISPLAY FUNCTION

  function screen(result) {
    
    result = Number.parseFloat(result);
    let decimal = result.toString()
    let countDecimal = (decimal.length-1)-decimal.indexOf('.');

    if ( countDecimal !== decimal.length ) {
      return display.textContent = result.toFixed(6); 
    } else {
      return display.textContent = result;
    }
    
  } // end of screen



// EXTENDED FUNCTIONS

let extFunct = document.querySelector('#extFunctions');

extFunctions.addEventListener('click',e => {

  if ( e.target.textContent === '+' ) {
    memory = display.textContent;
    display.textContent = '';
  }
})

/* 
   1 - basic math functions also need to work
    1a -  * 
    1b -  - 
    1c -  + 
    1d -  =
   2 - % , CE , 1/x , / , del - functions need to start working
   3 - need to set precision of (any)/exponential numbers                   // done
    3a - create a display function to solve the precision in one place      // done
    3b - upgrade the precision of numbers to keep in the screen size 
    3c - prevent multiple dots 
   4 - solve the functions different size of buttons
   */