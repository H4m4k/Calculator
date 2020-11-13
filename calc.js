// main caluclator display
let display = document.querySelector('#display');

//keyboard - numbers, coma, positive, negative

let keyboard = document.querySelector('#keyboard');

//selector of performed operation - string is split and function chooses the operation based on the selector value

let selector = '';

keyboard.addEventListener('click' , e => {

  if (e.target.classList.contains('number') ) {

    switch (display.textContent) {
      case '0':
        display.textContent = '';
        break;
    }

    /* 
     Prevent the possibility of adding multiple decimal separators (dots)
    */
    if ( display.textContent.includes('.') && e.target.textContent === '.') {
 
      display.textContent = display.textContent + '';
      
    } else {

      display.textContent += e.target.textContent;

    }

  } else if ( e.target.classList.contains('sign')) {  // change of sign by mutliplying with -1

    display.textContent *= -1;

  }
});


//-- FUNCTIONS --

let functions = document.querySelector('#functions');

functions.addEventListener('click', e => {

  switch (e.target.textContent) {

    case 'C':
      return screen(0);

    case 'x2':
      let num = display.textContent ** 2;
      return screen(num);

    case 'DEL':
      if (  display.textContent.includes('-') && display.textContent.length >= 2) {
        display.textContent = display.textContent.slice(0,-2);
      } else { display.textContent = display.textContent.slice(0,-1); }
    break;

    case 'CE':

  } // switch end

  
  if ( e.target.classList.contains('sqrt')) { squareRoot(display.textContent); } 

  if ( e.target.classList.contains('divide')) { 
    
    selector = '/';

    if ( display.textContent.includes('/')) { display.textContent += '';

    } else {  display.textContent += '/';  }
    
   } 
  
  }); // functions.eventListerner.end

  function squareRoot(number) {
    let num = Math.sqrt(number);
    return screen(num);
  }


  
  // DISPLAY FUNCTION

  function screen(result) {
    
    result = Number.parseFloat(result);
    let decimal = result.toString()
    let countDecimal = (decimal.length-1)-decimal.indexOf('.');

    if ( countDecimal !== decimal.length && countDecimal > 6) {
      return display.textContent = result.toFixed(6).replace(/00+/,'');
      
    } else {
      return display.textContent = result;
    }
  } // end of screen



// EXTENDED FUNCTIONS

let extFunctions = document.querySelector('#extFunctions');


extFunctions.addEventListener('click', e => {
  
  switch (e.target.textContent) {

    case '+':
      if ( display.textContent.includes('+') ) {
        display.textContent = display.textContent;
      } else {
        selector = '+';
        display.textContent += '+';
      } 
      break;

    case '-':
      if ( display.textContent.includes('-') ) {
        display.textContent = display.textContent;
      } else {
        selector = '-';
        display.textContent += '-';
      }
      break;

    case '*':
      if ( display.textContent.includes('*') ) {
        display.textContent = display.textContent;
      } else {
        selector = '*';
        display.textContent += '*';
      }
      break;

    case '=':
      return math(selector);
  }
  
}) // extFunctions.eventlistener.end

function math(selector) {
let arr =[];
 if ( selector === '+' ) {
     arr = display.textContent.split('+');
     return screen(Number.parseFloat(arr[0]) + Number.parseFloat(arr[1]));
 } else if ( selector === '-' ) {
     arr = display.textContent.split('-');
     return screen(Number.parseFloat(arr[0]) - Number.parseFloat(arr[1]));
 } else if ( selector === '*' ) {
     arr = display.textContent.split('*');
     return screen(Number.parseFloat(arr[0]) * Number.parseFloat(arr[1]));
} else if ( selector === '/') {
     arr = display.textContent.split('/');
     return screen(Number.parseFloat(arr[0]) / Number.parseFloat(arr[1]));
} else if ( selector !== '+' || selector !== '-' || selector !== '*' || selector !== '/') {
     return screen(display.textContent);
} 
} // math.f.end



/* 
   1 - basic math functions also need to work                               // done
    1a -  *                                                                 // done
    1b -  -                                                                 // done
    1c -  +                                                                 // done
    1d -  =                                                                 // done
   2 - functions need to start working
    2a - % 
    2b - CE 
    2c - 1/x
    2d - /                                                                  // done
    2e - del                                                                // done   
   3 - need to set precision of (any)/exponential numbers                   // done
    3a - create a display function to solve the precision in one place      // done
     3aa - solve the precision funct. filling empty decimals with 0         // done
    3b - upgrade the precision of numbers to keep in the screen size 
    3c - prevent multiple dots                                              // done
    3e - solve how to allow the decimals in second argument of math function
    3d - prevent adding numbers to display after a operation has been performed
   4 - solve the functions different size of buttons
   5 - negative number cant be differentiated from another
   6 - add boolean variable to control the operations
   */