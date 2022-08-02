import Display from "../../entities/display/class";

export const getResultWhenTryToAddZero = (displayContent:string): string => {
    
    // Add a space and a zero if the display content finishes with a operation symbol
    if(/[-\+\*\/]$/.test(displayContent)) return (displayContent + " 0"); 
    
    if(
        // Add a zero if the last number in the display content - start whit a zero followed by a dot OR
        /(^0\.$| -?0\.\d*$)/.test(displayContent) ||
      
        // Add a zero if the last number in the display content does not - start whit a zero
        /(^[1-9][\d\.]*$| -?[1-9][\d\.]*$)/.test(displayContent)
    ) return (displayContent + "0");
    
    return displayContent;
}

export const getResultWhenTryToAddDigit = (display: Display, digit: string) => {
    return (displayContent: string) => {
  
        // Replace the initial content of the display by the digit
        if(display.isInInitialState()) return digit; 
        
        // Add the digit to: a number that finish in a digit or a dot; a negative number or when the displayContent only shows a -
        if(/([\d\.]$|[-\+\*\/] -$|^-$)/.test(displayContent)) return (displayContent + digit);
        
        // Add a space and the first digit of a new number. TODO: use an if
        return (displayContent + " " + digit);
    }
}

export const getResultWhenTryToAddDot = (displayContent: string) => {

    // Add a space and a dot sign if the last character in the display content is a math operator
    if(/[-\+\*\/]$/.test(displayContent)) return (displayContent + " .");
    
    // Add the dot sign only in numbers that have not decimal separator yet
    if(/( \d+|^\d+)$/.test(displayContent)) return (displayContent + ".");

    return displayContent; 
}

export const getResultWhenTryToAddOp = (display: Display, symbol: string) => {
    return (displayContent: string) => {
      
      // Add the operator symbol if the display content is in its initial state and the symbols is a - 
      if(display.isInInitialState() && symbol === "-") return "-";
      
      // Add a space and the operator symbol if the last char showed in the display content is a number
      if(/\d$/.test(displayContent)) return (displayContent + " " + symbol); 
      
      // Add a space and the operator symbol if the last two chars in the display content are: everything but a space followed by a point
      if(/[^ ]\.$/.test(displayContent)) return (displayContent + " " + symbol); 
  
      if(/[^-\+\*\/] [-\+\*\/]$/.test(displayContent)) { // Executed only if the last three chars in the display content are: everything but a symbol, a space and a operation symbol
        
        // Add a space and a - if the display finish whith an operation symbol and a - key was pressed
        if(symbol==="-") return (displayContent + " -");
  
        // Replace the last symbol if a new symbol is provided (except -)
        const newDisplay= displayContent.slice(0, -1);
        return (newDisplay + symbol);
      }
      
      // If the display finish in: everything but a operation sign, a space, an operator, a space and a -; then replace all the operators with the new symbol
      if(/[^-\+\*\/] [-\+\*\/] -$/.test(displayContent)) {
        const newDisplay= displayContent.slice(0, -3);
        return (newDisplay + symbol);
      }
  
      return displayContent;
    } 
  }